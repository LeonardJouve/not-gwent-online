var browserify = require('browserify');
var gulp = require('gulp');
var source = require('vinyl-source-stream');
var fs = require("fs");
var path = require("path");
var spritesmith = require('gulp.spritesmith');
var buffer = require('vinyl-buffer');
var babelify = require("babelify");
var handlebars = require("browserify-handlebars");
var imagemin = require('gulp-imagemin');
var gm = require("gulp-gm");
require("dotenv").config();
var envify = require('envify');

gulp.task('browserify', function () {
  browserify('./client/js/main.js', { standalone: "app", debug: true })
    .transform(envify)
    .transform(handlebars).on("error", function (err) {
      console.log(err);
    })
    .transform(babelify)
    .bundle().on("error", function (err) {
      console.log(err);
    })
    .pipe(source('app.js').on("error", function (err) {
      console.log(err);
    }))
    .pipe(gulp.dest('./public/build/').on("error", function (err) {
      console.log(err);
    }));
});

gulp.task("index", function () {
  gulp.src("./client/index.html")
    .pipe(gulp.dest("./public/"));

  gulp.src("./client/favicon.ico")
    .pipe(gulp.dest("./public/"));

  gulp.src("./client/css/bootstrap.css")
    .pipe(gulp.dest("./public/build"));

  gulp.src("./client/css/main.css")
    .pipe(gulp.dest("./public/build"));

  gulp.src("./client/css/app.css")
    .pipe(gulp.dest("./public/build"));

  gulp.src("./client/css/chat.css")
    .pipe(gulp.dest("./public/build"));

})

gulp.task('resize sm', function (done) {
  if (fs.existsSync(__dirname + "/assets/cards/sm/monster/arachas1.png")) {
    console.log("skip generating sm images");
    return done();
  }
  return gulp.src('./assets/original_cards/**/*.png')
    .pipe(gm(function (gmfile) {
      return gmfile.resize(null, 120);
    }))
    .pipe(imagemin())
    .pipe(gulp.dest('./assets/cards/sm/'));
});

gulp.task('resize md', function (done) {
  if (fs.existsSync(__dirname + "/assets/cards/md/monster/arachas1.png")) {
    console.log("skip generating md images");
    return done();
  }
  return gulp.src('./assets/original_cards/**/*.png')
    .pipe(gm(function (gmfile) {
      return gmfile.resize(null, 284);
    }))
    .pipe(imagemin())
    .pipe(gulp.dest('./assets/cards/md/'));
});

gulp.task('resize lg', ["resize sm", "resize md"], function (done) {
  if (fs.existsSync(__dirname + "/assets/cards/lg/monster/arachas1.png")) {
    console.log("skip generating lg images");
    return done();
  }
  return gulp.src('./assets/original_cards/**/*.png')
    .pipe(gm(function (gmfile) {
      return gmfile.resize(null, 450);
    }))
    .pipe(imagemin())
    .pipe(gulp.dest('./assets/cards/lg/'));
});

gulp.task("generate sprites", ["resize lg"], function () {
  if (fs.existsSync(__dirname + "/public/build/cards-lg-monster.png")) {
    console.log("skip sprite generation");
    return;
  }

  var assetsPath = './assets/cards/';
  return Promise.all(fs.readdirSync(assetsPath).reduce((acc, size) => {
    return fs.readdirSync(path.join(assetsPath, size)).reduce((acc, faction) => {
      var sprite = gulp.src(path.join(assetsPath, size, faction, "*.png")).pipe(spritesmith({
        imgName: `cards-${size}-${faction}.png`,
        cssName: `cards.css`,
        cssFormat: 'css',
        cssOpts: { cssSelector: (item) => `.card-${size}-${faction}-${item.name}` }
      }));

      acc.push(
        new Promise((resolve, reject) => {
          sprite.img
            .pipe(buffer())
            .pipe(imagemin())
            .pipe(gulp.dest('./public/build/'))
            .on('finish', resolve)
            .on('error', reject);
        }),
        new Promise((resolve, reject) => {
          sprite.css.on("data", (file) => {
            if (file.isBuffer()) {
              fs.appendFile('./public/build/cards.css', file.contents.toString(), (err) => {
                if (err) reject(err);
              });
            }
          })
            .on('finish', resolve)
            .on('error', reject);
        })
      );

      return acc;
    }, acc);
  }, []));
})

gulp.task("default", ["browserify", "index", "resize lg", "resize sm", "resize md", "generate sprites"]);