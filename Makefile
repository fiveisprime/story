SRC = index.js spec/*.js

test: $(SRC)
	@node_modules/.bin/jshint $^
	@NODE_ENV=test node_modules/.bin/jasmine-node \
	--verbose \
	--captureExceptions \
	spec
