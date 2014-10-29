whiteboard: src/*
	browserify -o whiteboard.js src/whiteboard.js
index: src/*
	browserify -o index.js src/index.js
all: whiteboard index