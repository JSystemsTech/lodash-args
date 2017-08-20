'use strict';
var _ = require('lodash'),
	expect = require('must'),
	argHelpers = require('./lodash-args');

describe('Testing getArgHelpers', function() {
	var helpers = argHelpers.getArgHelpers();
	it('Expect getArgHelpers to return a plain Object', function() {
		expect(_.isPlainObject(helpers)).to.be(true);
	});
	it('Expect getArgs to return a plain Object with 10 attributes', function() {
		expect(_.keys(helpers).length).to.equal(10);
	});
	_.each(helpers, function(helper, helperName) {
		it('Expect getArgHelpers.' + helperName + ' to be a Function', function() {
			expect(_.isFunction(helper)).to.be(true);
		});
	});
});