var gulp = require("gulp"),
watch = require("gulp-watch");

gulp.task("default", function(){
	console.log("Horray I have installed gulp")
});

gulp.task("html", function(){
	console.log("Hmtl task ran")
});

gulp.task("watch", function(){
	watch("./app/index.html", function(){
		gulp.start("html");
	});
});