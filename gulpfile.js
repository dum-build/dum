'use strict'

const
	gulp = require('gulp'),
	mason = require('gulp-mason'),
	plumber = require('gulp-plumber'),
	sourcemaps = require('gulp-sourcemaps'),
	watch = require('gulp-watch')

gulp.task('compile', () => pipeMs(gulp.src(src), 'dist'))
gulp.task('watch', () => pipeMs(srcWatch(src), 'dist'))

const src = 'src/**/*.ms'

function pipeMs(stream, dest) {
	return stream
	.pipe(sourcemaps.init())
	.pipe(mason({
		includeAmdefine: true,
		mslPath: 'msl/dist'
	}))
	.pipe(sourcemaps.write())
	.pipe(gulp.dest(dest))
}

function srcWatch(glob) {
	return gulp.src(glob)
	.pipe(watch(glob, {verbose: true}))
	.pipe(plumber())
}
