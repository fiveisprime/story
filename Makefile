LINT_SRC = index.js $(wildcard spec/*.js)

test: $(LINT_SRC)
	@node node_modules/.bin/jshint $^
	@node node_modules/.bin/istanbul test node_modules/.bin/_mocha \
		-R spec -- \
		--reporter spec
