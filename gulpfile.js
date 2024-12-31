var browserify = require('browserify');
var gulp = require('gulp');
var vinylSource = require('vinyl-source-stream');
var fs = require("fs");
var path = require("path");
var spritesmith = require('gulp.spritesmith');
var buffer = require('vinyl-buffer');
var babelify = require("babelify");
var handlebars = require("browserify-handlebars");
var imagemin = require('gulp-imagemin');
var gm = require("gulp-gm");
var argv = require("minimist")(process.argv.slice(2));
require("dotenv").config();
var envify = require('envify');

function source() {
  return browserify('./client/js/main.js', {standalone: "app", debug: true})
    .transform(envify)
    .transform(handlebars).on("error", console.log)
    .transform(babelify)
    .bundle().on("error", console.log)
    .pipe(vinylSource('app.js').on("error", console.log))
    .pipe(gulp.dest('./public/build/').on("error", console.log));
}

function index() {
  var files = ["./client/index.html", "./client/favicon.ico", "./client/css/bootstrap.css", "./client/css/main.css", "./client/css/app.css"];
  
  return Promise.all(files.map((file) => new Promise((resolve, reject) => gulp.src(file)
    .pipe(gulp.dest("./public/build"))
    .on("error", reject)
    .on("end", resolve))));
}

function resizeSm() {
  if(fs.existsSync(__dirname + "/assets/cards/sm/monster/arachas1.png")) {
    console.log("skip generating sm images");
    return Promise.resolve();
  }

  return gulp.src('./assets/original_cards/**/*.png')
    .pipe(gm(function(gmfile) {
      return gmfile.resize(null, 120);
    }))
    .pipe(imagemin())
    .pipe(gulp.dest('./assets/cards/sm/'));
};

function resizeMd() {
  if(fs.existsSync(__dirname + "/assets/cards/md/monster/arachas1.png")) {
    console.log("skip generating md images");
    return Promise.resolve();
  }
  
  return gulp.src('./assets/original_cards/**/*.png')
    .pipe(gm(function(gmfile) {
      return gmfile.resize(null, 284);
    }))
    .pipe(imagemin())
    .pipe(gulp.dest('./assets/cards/md/'));
}

function resizeLg() {
  if(fs.existsSync(__dirname + "/assets/cards/lg/monster/arachas1.png")) {
    console.log("skip generating lg images");
    return Promise.resolve();
  }
  
  return gulp.src('./assets/original_cards/**/*.png')
    .pipe(gm(function(gmfile) {
      return gmfile.resize(null, 450);
    }))
    .pipe(imagemin())
    .pipe(gulp.dest('./assets/cards/lg/'));
}

function generateSprites() {
  if(fs.existsSync(__dirname + "/public/build/cards-lg-monster.png")) {
    console.log("skip sprite generation");
    return Promise.resolve();
  }

  var assetsPath = './assets/cards/';
  return Promise.all(fs.readdirSync(assetsPath).reduce((acc, size) => {
    return fs.readdirSync(path.join(assetsPath, size)).reduce((acc, faction) => {
      var sprite = gulp.src(path.join(assetsPath, size, faction, "*.png")).pipe(spritesmith({
        imgName: `cards-${size}-${faction}.png`,
        cssName: `cards.css`,
        cssFormat: 'css',
        cssOpts: {cssSelector: (item) => `.card-${size}-${faction}-${item.name}`}
      }));

      acc.push(
        new Promise((resolve, reject) => {
          sprite.img
            .pipe(buffer())
            .pipe(imagemin())
            .pipe(gulp.dest('./public/build/'))
            .on('error', reject)
            .on('end', resolve);
        }),
        new Promise((resolve, reject) => {
          sprite.css.on("data", (file) => {
            if (file.isBuffer()) {
              fs.appendFile('./public/build/cards.css', file.contents.toString(), (err) => {
                if (err) reject(err);
              });
            }
          })
          .on('error', reject)
          .on('end', resolve);
        })
      );

      return acc;
    }, acc);
  }, []));
}

var images = gulp.series(gulp.parallel(resizeSm/*, resizeMd, resizeLg*/), generateSprites);

var code = gulp.parallel(index, source);

gulp.task("default", gulp.series(code, images));