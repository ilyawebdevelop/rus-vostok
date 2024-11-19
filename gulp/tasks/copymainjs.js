export const copymainjs = () => {
	return app.gulp.src(app.path.src.mainJs)
		.pipe(app.gulp.dest(app.path.build.mainJs))
}