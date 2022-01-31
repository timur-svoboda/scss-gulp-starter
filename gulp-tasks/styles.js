import gulp from "gulp";
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
const sass = gulpSass(dartSass);
import sourcemaps from "gulp-sourcemaps";

export default function styles() {
  return gulp.src("src/scss/*.scss")
    .pipe(sourcemaps.init())
    .pipe(sass().on("error", sass.logError))
    .pipe(sourcemaps.write("./"))
    .pipe("src/css");
}