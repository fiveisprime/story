SRC = index.js spec/*.js

test: $(SRC)
	@node node_modules/.bin/jshint $^
	@NODE_ENV=test node node_modules/.bin/mocha \
	--require should \
	--reporter spec \
	spec
