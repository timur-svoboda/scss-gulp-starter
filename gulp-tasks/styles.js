import gulp from "gulp";
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
const sass = gulpSass(dartSass);

export default function styles() {
  return gulp.src("src/scss/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("src/css"));
}