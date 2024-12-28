var browserify = require('browserify');
var gulp = require('gulp');
var source = require('vinyl-source-stream');
var fs = require("fs");
var babelify = require("babelify");
var livereload = require("gulp-livereload");
var handlebars = require("browserify-handlebars");
// var imagemin = require('gulp-imagemin');
var gm = require("gulp-gm");
var sprity = require("sprity");
var argv = require("minimist")(process.argv.slice(2));
require("dotenv").config();
var envify = require('envify');
//livereload({start: true});

//fast install
//npm i --save-dev browserify vinyl-source-stream babelify gulp-livereload gulp


gulp.task('browserify', function() {
  browserify('./client/js/main.js', {standalone: "app", debug: true})
  .transform(envify)
  .transform(handlebars).on("error", function(err) {
    console.log(err);
  })
  .transform(babelify)
  .bundle().on("error", function(err) {
    console.log(err);
  })
  .pipe(source('app.js').on("error", function(err) {
    console.log(err);
  }))
  .pipe(gulp.dest('./public/build/').on("error", function(err) {
    console.log(err);
  }));
});

gulp.task("watch", function() {
  if(argv.production) return;
  gulp.watch("./client/js/*", ["browserify"]);
  gulp.watch("./client/templates/*", ["browserify"]);
  gulp.watch("./client/*.html", ["index"]);
  gulp.watch("./test/src/*", ["unit tests"]);
})


gulp.task("index", function() {
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
})

gulp.task('resize sm', function(done) {
  if(fs.existsSync(__dirname + "/assets/cards/sm/monster/arachas1.png")) {
    console.log("skip generating sm images");
    return done();
  }
  return gulp.src('./assets/original_cards/**/*.png')
  .pipe(gm(function(gmfile) {
    return gmfile.resize(null, 120);
  }))
  // .pipe(imagemin())
  .pipe(gulp.dest('./assets/cards/sm/'));
});

gulp.task('resize md', function(done) {
  if(fs.existsSync(__dirname + "/assets/cards/md/monster/arachas1.png")) {
    console.log("skip generating md images");
    return done();
  }
  return gulp.src('./assets/original_cards/**/*.png')
  .pipe(gm(function(gmfile) {
    return gmfile.resize(null, 284);
  }))
  // .pipe(imagemin())
  .pipe(gulp.dest('./assets/cards/md/'));
});

gulp.task('resize lg', ["resize sm", "resize md"], function(done) {
  if(fs.existsSync(__dirname + "/assets/cards/lg/monster/arachas1.png")) {
    console.log("skip generating lg images");
    return done();
  }
  return gulp.src('./assets/original_cards/**/*.png')
  .pipe(gm(function(gmfile) {
    return gmfile.resize(null, 450);
  }))
  // .pipe(imagemin())
  .pipe(gulp.dest('./assets/cards/lg/'));
});

gulp.task("generate sprites", ["resize lg"], function() {
  if(fs.existsSync(__dirname + "/public/build/cards-lg-monster.png")) {
    console.log("skip sprite generation");
    return;
  }


  return sprity.src({
    src: "./assets/cards/**/*.png",
    style: "cards.css",
    processor: "css",
    engine: "gm",
    orientation: "binary-tree",
    split: true,
    cssPath: "../../public/build/",
    prefix: "card",
    name: "cards",
    margin: 0
  })
  .pipe(gulp.dest("./public/build/"));
})


gulp.task("default", ["watch", "browserify", "index", "resize lg", "resize sm", "resize md", "generate sprites"]);
