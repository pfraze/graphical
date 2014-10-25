pres: src/*
	browserify -o pres.js src/pres.js
index: src/*
	browserify -o build.js src/index.js