/**
 * This unit test file was auto generated via a gulp task.
 * Any formatting issues can be ignored
 */

'use strict';
var _ = require('lodash'),
	expect = require('must'),
	lodashArgHelpers = require('./lodash-args');
var helpers = lodashArgHelpers.getArgHelpers();

describe('Testing Lodash Args as plain Object fetched via getArgHelpers', function() {
	
describe('Testing Lodash Args in release 1.0.0', function() {
	describe('Testing toArguments', function() {
		var fruit;
		var fruitObj;
		beforeEach(function() {
			fruitObj = {
				0: 'Banana',
				1: 'Orange',
				2: 'Lemon',
				3: 'Apple',
				4: 'Mango'
			};
			fruit = _.values(fruitObj);
		});

		it('with undefined value', function() {
			var args = helpers.toArguments();
			expect(_.isArguments(args)).to.be(true);
		});
		it('with `undefined` value', function() {
			var args = helpers.toArguments(undefined);
			expect(_.isArguments(args)).to.be(true);
			expect(args.length).to.equal(1);
			expect(args[0]).to.equal(undefined);
		});
		it('with null value', function() {
			var args = helpers.toArguments(null);
			expect(_.isArguments(args)).to.be(true);
			expect(args.length).to.equal(1);
			expect(args[0]).to.equal(null);
		});
		it('with string value', function() {
			var args = helpers.toArguments('test');
			expect(_.isArguments(args)).to.be(true);
			expect(args.length).to.equal(1);
			expect(args[0]).to.equal('test');
		});
		it('with number value', function() {
			var args = helpers.toArguments(123);
			expect(_.isArguments(args)).to.be(true);
			expect(args.length).to.equal(1);
			expect(args[0]).to.equal(123);
		});
		it('with multiple inputs where first input is not an object or array', function() {
			var args = helpers.toArguments(123, 456, 789);
			expect(_.isArguments(args)).to.be(true);
			expect(args.length).to.equal(3);
			expect(args[0]).to.equal(123);
			expect(args[1]).to.equal(456);
			expect(args[2]).to.equal(789);
		});
		it('with empty Object value', function() {
			var args = helpers.toArguments({});
			expect(_.isArguments(args)).to.be(true);
			expect(args.length).to.equal(0);
		});
		it('with empty array value', function() {
			var args = helpers.toArguments([]);
			expect(_.isArguments(args)).to.be(true);
			expect(args.length).to.equal(0);
		});
		it('with plain object value', function() {
			var args = helpers.toArguments(fruitObj);
			expect(_.isArguments(args)).to.be(true);
			expect(args.length).to.equal(5);
			expect(args[0]).to.equal('Banana');
			expect(args[1]).to.equal('Orange');
			expect(args[2]).to.equal('Lemon');
			expect(args[3]).to.equal('Apple');
			expect(args[4]).to.equal('Mango');
		});
		it('with array value', function() {
			var args = helpers.toArguments(fruit);
			expect(_.isArguments(args)).to.be(true);
			expect(args.length).to.equal(5);
			expect(args[0]).to.equal('Banana');
			expect(args[1]).to.equal('Orange');
			expect(args[2]).to.equal('Lemon');
			expect(args[3]).to.equal('Apple');
			expect(args[4]).to.equal('Mango');
		});
		it('with `arguments` value', function() {
			var args = helpers.toArguments(helpers.toArguments(fruit));
			expect(_.isArguments(args)).to.be(true);
			expect(args.length).to.equal(5);
			expect(args[0]).to.equal('Banana');
			expect(args[1]).to.equal('Orange');
			expect(args[2]).to.equal('Lemon');
			expect(args[3]).to.equal('Apple');
			expect(args[4]).to.equal('Mango');
		});
	});
	describe('Testing firstNArgs', function() {
		var fruit;
		var fruitObj;
		var fruitArgs;
		beforeEach(function() {
			fruitObj = {
				0: 'Banana',
				1: 'Orange',
				2: 'Lemon',
				3: 'Apple',
				4: 'Mango'
			};
			fruit = _.values(fruitObj);
			fruitArgs = helpers.toArguments(fruit);
		});
		it('with invalid N', function() {
			var args = helpers.firstNArgs(fruitObj, 'invalid');
			expect(_.isArguments(args)).to.be(true);
			expect(args.length).to.equal(0);
		});
		it('with negative N value', function() {
			var args = helpers.firstNArgs(fruitObj, -3);
			expect(_.isArguments(args)).to.be(true);
			expect(args.length).to.equal(0);
		});
		it('with plain object value', function() {
			var args = helpers.firstNArgs(fruitObj, 3);
			expect(_.isArguments(args)).to.be(true);
			expect(args.length).to.equal(3);
			expect(args[0]).to.equal('Banana');
			expect(args[1]).to.equal('Orange');
			expect(args[2]).to.equal('Lemon');
		});
		it('with array value', function() {
			var args = helpers.firstNArgs(fruit, 3);
			expect(_.isArguments(args)).to.be(true);
			expect(args.length).to.equal(3);
			expect(args[0]).to.equal('Banana');
			expect(args[1]).to.equal('Orange');
			expect(args[2]).to.equal('Lemon');
		});
		it('with `arguments` value', function() {
			var args = helpers.firstNArgs(fruitArgs, 3);
			expect(_.isArguments(args)).to.be(true);
			expect(args.length).to.equal(3);
			expect(args[0]).to.equal('Banana');
			expect(args[1]).to.equal('Orange');
			expect(args[2]).to.equal('Lemon');
		});
	});
	describe('Testing lastNArgs', function() {
		var fruit;
		var fruitObj;
		var fruitArgs;
		beforeEach(function() {
			fruitObj = {
				0: 'Banana',
				1: 'Orange',
				2: 'Lemon',
				3: 'Apple',
				4: 'Mango'
			};
			fruit = _.values(fruitObj);
			fruitArgs = helpers.toArguments(fruit);
		});
		it('with invalid N', function() {
			var args = helpers.lastNArgs(fruitObj, 'invalid');
			expect(_.isArguments(args)).to.be(true);
			expect(args.length).to.equal(0);
		});
		it('with negative N value', function() {
			var args = helpers.lastNArgs(fruitObj, -3);
			expect(_.isArguments(args)).to.be(true);
			expect(args.length).to.equal(0);
		});
		it('with plain object value', function() {
			var args = helpers.lastNArgs(fruitObj, 3);
			expect(_.isArguments(args)).to.be(true);
			expect(args.length).to.equal(3);
			expect(args[0]).to.equal('Lemon');
			expect(args[1]).to.equal('Apple');
			expect(args[2]).to.equal('Mango');
		});
		it('with array value', function() {
			var args = helpers.lastNArgs(fruit, 3);
			expect(_.isArguments(args)).to.be(true);
			expect(args.length).to.equal(3);
			expect(args[0]).to.equal('Lemon');
			expect(args[1]).to.equal('Apple');
			expect(args[2]).to.equal('Mango');
		});
		it('with `arguments` value', function() {
			var args = helpers.lastNArgs(fruitArgs, 3);
			expect(_.isArguments(args)).to.be(true);
			expect(args.length).to.equal(3);
			expect(args[0]).to.equal('Lemon');
			expect(args[1]).to.equal('Apple');
			expect(args[2]).to.equal('Mango');
		});
	});
	describe('Testing argsAfterN', function() {
		var fruit;
		var fruitObj;
		var fruitArgs;
		beforeEach(function() {
			fruitObj = {
				0: 'Banana',
				1: 'Orange',
				2: 'Lemon',
				3: 'Apple',
				4: 'Mango'
			};
			fruit = _.values(fruitObj);
			fruitArgs = helpers.toArguments(fruit);
		});
		it('with invalid N', function() {
			var args = helpers.argsAfterN(fruitObj, 'invalid');
			expect(_.isArguments(args)).to.be(true);
			expect(args.length).to.equal(4);
			expect(args[0]).to.equal('Orange');
			expect(args[1]).to.equal('Lemon');
			expect(args[2]).to.equal('Apple');
			expect(args[3]).to.equal('Mango');
		});
		it('with negative N value', function() {
			var args = helpers.argsAfterN(fruitObj, -3);
			expect(_.isArguments(args)).to.be(true);
			expect(args.length).to.equal(4);
			expect(args[0]).to.equal('Orange');
			expect(args[1]).to.equal('Lemon');
			expect(args[2]).to.equal('Apple');
			expect(args[3]).to.equal('Mango');
		});
		it('with plain object value', function() {
			var args = helpers.argsAfterN(fruitObj, 3);
			expect(_.isArguments(args)).to.be(true);
			expect(args.length).to.equal(1);
			expect(args[0]).to.equal('Mango');
		});
		it('with array value', function() {
			var args = helpers.argsAfterN(fruit, 3);
			expect(_.isArguments(args)).to.be(true);
			expect(args.length).to.equal(1);
			expect(args[0]).to.equal('Mango');
		});
		it('with `arguments` value', function() {
			var args = helpers.argsAfterN(fruitArgs, 3);
			expect(_.isArguments(args)).to.be(true);
			expect(args.length).to.equal(1);
			expect(args[0]).to.equal('Mango');
		});
	});
	describe('Testing argsBeforeN', function() {
		var fruit;
		var fruitObj;
		var fruitArgs;
		beforeEach(function() {
			fruitObj = {
				0: 'Banana',
				1: 'Orange',
				2: 'Lemon',
				3: 'Apple',
				4: 'Mango'
			};
			fruit = _.values(fruitObj);
			fruitArgs = helpers.toArguments(fruit);
		});
		it('with invalid N', function() {
			var args = helpers.argsBeforeN(fruitObj, 'invalid');
			expect(_.isArguments(args)).to.be(true);
			expect(args.length).to.equal(0);
		});
		it('with negative N value', function() {
			var args = helpers.argsBeforeN(fruitObj, -3);
			expect(_.isArguments(args)).to.be(true);
			expect(args.length).to.equal(0);
		});
		it('with plain object value', function() {
			var args = helpers.argsBeforeN(fruitObj, 3);
			expect(_.isArguments(args)).to.be(true);
			expect(args.length).to.equal(3);
			expect(args[0]).to.equal('Banana');
			expect(args[1]).to.equal('Orange');
			expect(args[2]).to.equal('Lemon');
		});
		it('with array value', function() {
			var args = helpers.argsBeforeN(fruit, 3);
			expect(_.isArguments(args)).to.be(true);
			expect(args.length).to.equal(3);
			expect(args[0]).to.equal('Banana');
			expect(args[1]).to.equal('Orange');
			expect(args[2]).to.equal('Lemon');
		});
		it('with `arguments` value', function() {
			var args = helpers.argsBeforeN(fruitArgs, 3);
			expect(_.isArguments(args)).to.be(true);
			expect(args.length).to.equal(3);
			expect(args[0]).to.equal('Banana');
			expect(args[1]).to.equal('Orange');
			expect(args[2]).to.equal('Lemon');
		});
	});
	describe('Testing argsAt', function() {
		var fruit;
		var fruitObj;
		var fruitArgs;
		beforeEach(function() {
			fruitObj = {
				0: 'Banana',
				1: 'Orange',
				2: 'Lemon',
				3: 'Apple',
				4: 'Mango'
			};
			fruit = _.values(fruitObj);
			fruitArgs = helpers.toArguments(fruit);
		});
		it('with invalid index list', function() {
			var args = helpers.argsAt(fruitObj, 'invalid list');
			expect(_.isArguments(args)).to.be(true);
			expect(args.length).to.equal(0);
		});
		it('with plain object value', function() {
			var args = helpers.argsAt(fruitObj, [0, 1, 3]);
			expect(_.isArguments(args)).to.be(true);
			expect(args.length).to.equal(3);
			expect(args[0]).to.equal('Banana');
			expect(args[1]).to.equal('Orange');
			expect(args[2]).to.equal('Apple');
		});
		it('with array value', function() {
			var args = helpers.argsAt(fruit, [0, 1, 3]);
			expect(_.isArguments(args)).to.be(true);
			expect(args.length).to.equal(3);
			expect(args[0]).to.equal('Banana');
			expect(args[1]).to.equal('Orange');
			expect(args[2]).to.equal('Apple');
		});
		it('with `arguments` value', function() {
			var args = helpers.argsAt(fruitArgs, [0, 1, 3]);
			expect(_.isArguments(args)).to.be(true);
			expect(args.length).to.equal(3);
			expect(args[0]).to.equal('Banana');
			expect(args[1]).to.equal('Orange');
			expect(args[2]).to.equal('Apple');
		});
		it('with plain object value & array of string index', function() {
			var args = helpers.argsAt(fruitObj, ['0', '1', '3']);
			expect(_.isArguments(args)).to.be(true);
			expect(args.length).to.equal(3);
			expect(args[0]).to.equal('Banana');
			expect(args[1]).to.equal('Orange');
			expect(args[2]).to.equal('Apple');
		});
		it('with array value & array of string index', function() {
			var args = helpers.argsAt(fruit, ['0', '1', '3']);
			expect(_.isArguments(args)).to.be(true);
			expect(args.length).to.equal(3);
			expect(args[0]).to.equal('Banana');
			expect(args[1]).to.equal('Orange');
			expect(args[2]).to.equal('Apple');
		});
		it('with `arguments` value & array of string index', function() {
			var args = helpers.argsAt(fruitArgs, ['0', '1', '3']);
			expect(_.isArguments(args)).to.be(true);
			expect(args.length).to.equal(3);
			expect(args[0]).to.equal('Banana');
			expect(args[1]).to.equal('Orange');
			expect(args[2]).to.equal('Apple');
		});
	});
	describe('Testing argsWithout', function() {
		var fruit;
		var fruitObj;
		var fruitArgs;
		beforeEach(function() {
			fruitObj = {
				0: 'Banana',
				1: 'Orange',
				2: 'Lemon',
				3: 'Apple',
				4: 'Mango'
			};
			fruit = _.values(fruitObj);
			fruitArgs = helpers.toArguments(fruit);
		});
		it('with invalid index list', function() {
			var args = helpers.argsWithout(fruitObj, 'invalid list');
			expect(_.isArguments(args)).to.be(true);
			expect(args.length).to.equal(5);
			expect(args[0]).to.equal('Banana');
			expect(args[1]).to.equal('Orange');
			expect(args[2]).to.equal('Lemon');
			expect(args[3]).to.equal('Apple');
			expect(args[4]).to.equal('Mango');
		});
		it('with plain object value', function() {
			var args = helpers.argsWithout(fruitObj, [2, 4]);
			expect(_.isArguments(args)).to.be(true);
			expect(args.length).to.equal(3);
			expect(args[0]).to.equal('Banana');
			expect(args[1]).to.equal('Orange');
			expect(args[2]).to.equal('Apple');
		});
		it('with array value', function() {
			var args = helpers.argsWithout(fruit, [2, 4]);
			expect(_.isArguments(args)).to.be(true);
			expect(args.length).to.equal(3);
			expect(args[0]).to.equal('Banana');
			expect(args[1]).to.equal('Orange');
			expect(args[2]).to.equal('Apple');
		});
		it('with `arguments` value', function() {
			var args = helpers.argsWithout(fruitArgs, [2, 4]);
			expect(_.isArguments(args)).to.be(true);
			expect(args.length).to.equal(3);
			expect(args[0]).to.equal('Banana');
			expect(args[1]).to.equal('Orange');
			expect(args[2]).to.equal('Apple');
		});
		it('with plain object value & array of string index', function() {
			var args = helpers.argsWithout(fruitObj, ['2', '4']);
			expect(_.isArguments(args)).to.be(true);
			expect(args.length).to.equal(3);
			expect(args[0]).to.equal('Banana');
			expect(args[1]).to.equal('Orange');
			expect(args[2]).to.equal('Apple');
		});
		it('with array value & array of string index', function() {
			var args = helpers.argsWithout(fruit, ['2', '4']);
			expect(_.isArguments(args)).to.be(true);
			expect(args.length).to.equal(3);
			expect(args[0]).to.equal('Banana');
			expect(args[1]).to.equal('Orange');
			expect(args[2]).to.equal('Apple');
		});
		it('with `arguments` value & array of string index', function() {
			var args = helpers.argsWithout(fruitArgs, ['2', '4']);
			expect(_.isArguments(args)).to.be(true);
			expect(args.length).to.equal(3);
			expect(args[0]).to.equal('Banana');
			expect(args[1]).to.equal('Orange');
			expect(args[2]).to.equal('Apple');
		});
	});
	describe('Testing insertArgsAt', function() {
		var fruit;
		var fruitObj;
		var fruitArgs;
		var newFruit;
		var newFruitObj;
		var newFruitArgs;
		beforeEach(function() {
			fruitObj = {
				0: 'Banana',
				1: 'Orange',
				2: 'Lemon',
				3: 'Apple',
				4: 'Mango'
			};
			newFruitObj = {
				0: 'Kiwi',
				1: 'Lime'
			}
			fruit = _.values(fruitObj);
			fruitArgs = helpers.toArguments(fruit);
			newFruit = _.values(newFruitObj);
			newFruitArgs = helpers.toArguments(newFruit);
		});
		it('with invalid N', function() {
			var args = helpers.insertArgsAt(fruitObj, newFruit, 'invalid');
			expect(_.isArguments(args)).to.be(true);
			expect(args.length).to.equal(7);
			expect(args[0]).to.equal('Kiwi');
			expect(args[1]).to.equal('Lime');
			expect(args[2]).to.equal('Banana');
			expect(args[3]).to.equal('Orange');
			expect(args[4]).to.equal('Lemon');
			expect(args[5]).to.equal('Apple');
			expect(args[6]).to.equal('Mango');
		});
		it('with negative N value', function() {
			var args = helpers.insertArgsAt(fruitObj, newFruit, -3);
			expect(_.isArguments(args)).to.be(true);
			expect(args.length).to.equal(7);
			expect(args[0]).to.equal('Kiwi');
			expect(args[1]).to.equal('Lime');
			expect(args[2]).to.equal('Banana');
			expect(args[3]).to.equal('Orange');
			expect(args[4]).to.equal('Lemon');
			expect(args[5]).to.equal('Apple');
			expect(args[6]).to.equal('Mango');
		});
		it('with plain object value - plain object value', function() {
			var args = helpers.insertArgsAt(fruitObj, newFruitObj, 3);
			expect(_.isArguments(args)).to.be(true);
			expect(args.length).to.equal(7);
			expect(args[0]).to.equal('Banana');
			expect(args[1]).to.equal('Orange');
			expect(args[2]).to.equal('Lemon');
			expect(args[3]).to.equal('Kiwi');
			expect(args[4]).to.equal('Lime');
			expect(args[5]).to.equal('Apple');
			expect(args[6]).to.equal('Mango');
		});
		it('with plain object value - array value', function() {
			var args = helpers.insertArgsAt(fruitObj, newFruit, 3);
			expect(_.isArguments(args)).to.be(true);
			expect(args.length).to.equal(7);
			expect(args[0]).to.equal('Banana');
			expect(args[1]).to.equal('Orange');
			expect(args[2]).to.equal('Lemon');
			expect(args[3]).to.equal('Kiwi');
			expect(args[4]).to.equal('Lime');
			expect(args[5]).to.equal('Apple');
			expect(args[6]).to.equal('Mango');
		});
		it('with plain object value - `arguments` value', function() {
			var args = helpers.insertArgsAt(fruitObj, newFruitArgs, 3);
			expect(_.isArguments(args)).to.be(true);
			expect(args.length).to.equal(7);
			expect(args[0]).to.equal('Banana');
			expect(args[1]).to.equal('Orange');
			expect(args[2]).to.equal('Lemon');
			expect(args[3]).to.equal('Kiwi');
			expect(args[4]).to.equal('Lime');
			expect(args[5]).to.equal('Apple');
			expect(args[6]).to.equal('Mango');
		});
		it('with array value - plain object value', function() {
			var args = helpers.insertArgsAt(fruit, newFruitObj, 3);
			expect(_.isArguments(args)).to.be(true);
			expect(args.length).to.equal(7);
			expect(args[0]).to.equal('Banana');
			expect(args[1]).to.equal('Orange');
			expect(args[2]).to.equal('Lemon');
			expect(args[3]).to.equal('Kiwi');
			expect(args[4]).to.equal('Lime');
			expect(args[5]).to.equal('Apple');
			expect(args[6]).to.equal('Mango');
		});
		it('with array value - array value', function() {
			var args = helpers.insertArgsAt(fruit, newFruit, 3);
			expect(_.isArguments(args)).to.be(true);
			expect(args.length).to.equal(7);
			expect(args[0]).to.equal('Banana');
			expect(args[1]).to.equal('Orange');
			expect(args[2]).to.equal('Lemon');
			expect(args[3]).to.equal('Kiwi');
			expect(args[4]).to.equal('Lime');
			expect(args[5]).to.equal('Apple');
			expect(args[6]).to.equal('Mango');
		});
		it('with array value - `arguments` value', function() {
			var args = helpers.insertArgsAt(fruit, newFruitArgs, 3);
			expect(_.isArguments(args)).to.be(true);
			expect(args.length).to.equal(7);
			expect(args[0]).to.equal('Banana');
			expect(args[1]).to.equal('Orange');
			expect(args[2]).to.equal('Lemon');
			expect(args[3]).to.equal('Kiwi');
			expect(args[4]).to.equal('Lime');
			expect(args[5]).to.equal('Apple');
			expect(args[6]).to.equal('Mango');
		});
		it('with `arguments` value - plain object value', function() {
			var args = helpers.insertArgsAt(fruitArgs, newFruitObj, 3);
			expect(args.length).to.equal(7);
			expect(args[0]).to.equal('Banana');
			expect(args[1]).to.equal('Orange');
			expect(args[2]).to.equal('Lemon');
			expect(args[3]).to.equal('Kiwi');
			expect(args[4]).to.equal('Lime');
			expect(args[5]).to.equal('Apple');
			expect(args[6]).to.equal('Mango');
		});
		it('with `arguments` value - array value', function() {
			var args = helpers.insertArgsAt(fruitArgs, newFruit, 3);
			expect(args.length).to.equal(7);
			expect(args[0]).to.equal('Banana');
			expect(args[1]).to.equal('Orange');
			expect(args[2]).to.equal('Lemon');
			expect(args[3]).to.equal('Kiwi');
			expect(args[4]).to.equal('Lime');
			expect(args[5]).to.equal('Apple');
			expect(args[6]).to.equal('Mango');
		});
		it('with `arguments` value - `arguments` value', function() {
			var args = helpers.insertArgsAt(fruitArgs, newFruitArgs, 3);
			expect(args.length).to.equal(7);
			expect(args[0]).to.equal('Banana');
			expect(args[1]).to.equal('Orange');
			expect(args[2]).to.equal('Lemon');
			expect(args[3]).to.equal('Kiwi');
			expect(args[4]).to.equal('Lime');
			expect(args[5]).to.equal('Apple');
			expect(args[6]).to.equal('Mango');
		});
	});
	describe('Testing prependArgs', function() {
		var fruit;
		var fruitObj;
		var fruitArgs;
		var newFruit;
		var newFruitObj;
		var newFruitArgs;
		beforeEach(function() {
			fruitObj = {
				0: 'Banana',
				1: 'Orange',
				2: 'Lemon',
				3: 'Apple',
				4: 'Mango'
			};
			newFruitObj = {
				0: 'Kiwi',
				1: 'Lime'
			}
			fruit = _.values(fruitObj);
			fruitArgs = helpers.toArguments(fruit);
			newFruit = _.values(newFruitObj);
			newFruitArgs = helpers.toArguments(newFruit);
		});
		it('with plain object value - plain object value', function() {
			var args = helpers.prependArgs(fruitObj, newFruitObj);
			expect(_.isArguments(args)).to.be(true);
			expect(args.length).to.equal(7);
			expect(args[0]).to.equal('Kiwi');
			expect(args[1]).to.equal('Lime');
			expect(args[2]).to.equal('Banana');
			expect(args[3]).to.equal('Orange');
			expect(args[4]).to.equal('Lemon');
			expect(args[5]).to.equal('Apple');
			expect(args[6]).to.equal('Mango');
		});
		it('with plain object value - array value', function() {
			var args = helpers.prependArgs(fruitObj, newFruit);
			expect(_.isArguments(args)).to.be(true);
			expect(args.length).to.equal(7);
			expect(args[0]).to.equal('Kiwi');
			expect(args[1]).to.equal('Lime');
			expect(args[2]).to.equal('Banana');
			expect(args[3]).to.equal('Orange');
			expect(args[4]).to.equal('Lemon');
			expect(args[5]).to.equal('Apple');
			expect(args[6]).to.equal('Mango');
		});
		it('with plain object value - `arguments` value', function() {
			var args = helpers.prependArgs(fruitObj, newFruitArgs);
			expect(_.isArguments(args)).to.be(true);
			expect(args.length).to.equal(7);
			expect(args[0]).to.equal('Kiwi');
			expect(args[1]).to.equal('Lime');
			expect(args[2]).to.equal('Banana');
			expect(args[3]).to.equal('Orange');
			expect(args[4]).to.equal('Lemon');
			expect(args[5]).to.equal('Apple');
			expect(args[6]).to.equal('Mango');
		});
		it('with array value - plain object value', function() {
			var args = helpers.prependArgs(fruit, newFruitObj);
			expect(_.isArguments(args)).to.be(true);
			expect(args.length).to.equal(7);
			expect(args[0]).to.equal('Kiwi');
			expect(args[1]).to.equal('Lime');
			expect(args[2]).to.equal('Banana');
			expect(args[3]).to.equal('Orange');
			expect(args[4]).to.equal('Lemon');
			expect(args[5]).to.equal('Apple');
			expect(args[6]).to.equal('Mango');
		});
		it('with array value - array value', function() {
			var args = helpers.prependArgs(fruit, newFruit);
			expect(_.isArguments(args)).to.be(true);
			expect(args.length).to.equal(7);
			expect(args[0]).to.equal('Kiwi');
			expect(args[1]).to.equal('Lime');
			expect(args[2]).to.equal('Banana');
			expect(args[3]).to.equal('Orange');
			expect(args[4]).to.equal('Lemon');
			expect(args[5]).to.equal('Apple');
			expect(args[6]).to.equal('Mango');
		});
		it('with array value - `arguments` value', function() {
			var args = helpers.prependArgs(fruit, newFruitArgs);
			expect(_.isArguments(args)).to.be(true);
			expect(args.length).to.equal(7);
			expect(args[0]).to.equal('Kiwi');
			expect(args[1]).to.equal('Lime');
			expect(args[2]).to.equal('Banana');
			expect(args[3]).to.equal('Orange');
			expect(args[4]).to.equal('Lemon');
			expect(args[5]).to.equal('Apple');
			expect(args[6]).to.equal('Mango');
		});
		it('with `arguments` value - plain object value', function() {
			var args = helpers.prependArgs(fruitArgs, newFruitObj);
			expect(args.length).to.equal(7);
			expect(args[0]).to.equal('Kiwi');
			expect(args[1]).to.equal('Lime');
			expect(args[2]).to.equal('Banana');
			expect(args[3]).to.equal('Orange');
			expect(args[4]).to.equal('Lemon');
			expect(args[5]).to.equal('Apple');
			expect(args[6]).to.equal('Mango');
		});
		it('with `arguments` value - array value', function() {
			var args = helpers.prependArgs(fruitArgs, newFruit);
			expect(args.length).to.equal(7);
			expect(args[0]).to.equal('Kiwi');
			expect(args[1]).to.equal('Lime');
			expect(args[2]).to.equal('Banana');
			expect(args[3]).to.equal('Orange');
			expect(args[4]).to.equal('Lemon');
			expect(args[5]).to.equal('Apple');
			expect(args[6]).to.equal('Mango');
		});
		it('with `arguments` value - `arguments` value', function() {
			var args = helpers.prependArgs(fruitArgs, newFruitArgs);
			expect(args.length).to.equal(7);
			expect(args[0]).to.equal('Kiwi');
			expect(args[1]).to.equal('Lime');
			expect(args[2]).to.equal('Banana');
			expect(args[3]).to.equal('Orange');
			expect(args[4]).to.equal('Lemon');
			expect(args[5]).to.equal('Apple');
			expect(args[6]).to.equal('Mango');
		});
	});
	describe('Testing appendArgs', function() {
		var fruit;
		var fruitObj;
		var fruitArgs;
		var newFruit;
		var newFruitObj;
		var newFruitArgs;
		beforeEach(function() {
			fruitObj = {
				0: 'Banana',
				1: 'Orange',
				2: 'Lemon',
				3: 'Apple',
				4: 'Mango'
			};
			newFruitObj = {
				0: 'Kiwi',
				1: 'Lime'
			}
			fruit = _.values(fruitObj);
			fruitArgs = helpers.toArguments(fruit);
			newFruit = _.values(newFruitObj);
			newFruitArgs = helpers.toArguments(newFruit);
		});
		it('with plain object value - plain object value', function() {
			var args = helpers.appendArgs(fruitObj, newFruitObj);
			expect(_.isArguments(args)).to.be(true);
			expect(args.length).to.equal(7);
			expect(args[0]).to.equal('Banana');
			expect(args[1]).to.equal('Orange');
			expect(args[2]).to.equal('Lemon');
			expect(args[3]).to.equal('Apple');
			expect(args[4]).to.equal('Mango');
			expect(args[5]).to.equal('Kiwi');
			expect(args[6]).to.equal('Lime');
		});
		it('with plain object value - array value', function() {
			var args = helpers.appendArgs(fruitObj, newFruit);
			expect(_.isArguments(args)).to.be(true);
			expect(args.length).to.equal(7);
			expect(args[0]).to.equal('Banana');
			expect(args[1]).to.equal('Orange');
			expect(args[2]).to.equal('Lemon');
			expect(args[3]).to.equal('Apple');
			expect(args[4]).to.equal('Mango');
			expect(args[5]).to.equal('Kiwi');
			expect(args[6]).to.equal('Lime');
		});
		it('with plain object value - `arguments` value', function() {
			var args = helpers.appendArgs(fruitObj, newFruitArgs);
			expect(_.isArguments(args)).to.be(true);
			expect(args.length).to.equal(7);
			expect(args[0]).to.equal('Banana');
			expect(args[1]).to.equal('Orange');
			expect(args[2]).to.equal('Lemon');
			expect(args[3]).to.equal('Apple');
			expect(args[4]).to.equal('Mango');
			expect(args[5]).to.equal('Kiwi');
			expect(args[6]).to.equal('Lime');
		});
		it('with array value - plain object value', function() {
			var args = helpers.appendArgs(fruit, newFruitObj);
			expect(_.isArguments(args)).to.be(true);
			expect(args.length).to.equal(7);
			expect(args[0]).to.equal('Banana');
			expect(args[1]).to.equal('Orange');
			expect(args[2]).to.equal('Lemon');
			expect(args[3]).to.equal('Apple');
			expect(args[4]).to.equal('Mango');
			expect(args[5]).to.equal('Kiwi');
			expect(args[6]).to.equal('Lime');
		});
		it('with array value - array value', function() {
			var args = helpers.appendArgs(fruit, newFruit);
			expect(_.isArguments(args)).to.be(true);
			expect(args.length).to.equal(7);
			expect(args[0]).to.equal('Banana');
			expect(args[1]).to.equal('Orange');
			expect(args[2]).to.equal('Lemon');
			expect(args[3]).to.equal('Apple');
			expect(args[4]).to.equal('Mango');
			expect(args[5]).to.equal('Kiwi');
			expect(args[6]).to.equal('Lime');
		});
		it('with array value - `arguments` value', function() {
			var args = helpers.appendArgs(fruit, newFruitArgs);
			expect(_.isArguments(args)).to.be(true);
			expect(args.length).to.equal(7);
			expect(args[0]).to.equal('Banana');
			expect(args[1]).to.equal('Orange');
			expect(args[2]).to.equal('Lemon');
			expect(args[3]).to.equal('Apple');
			expect(args[4]).to.equal('Mango');
			expect(args[5]).to.equal('Kiwi');
			expect(args[6]).to.equal('Lime');
		});
		it('with `arguments` value - plain object value', function() {
			var args = helpers.appendArgs(fruitArgs, newFruitObj);
			expect(args.length).to.equal(7);
			expect(args[0]).to.equal('Banana');
			expect(args[1]).to.equal('Orange');
			expect(args[2]).to.equal('Lemon');
			expect(args[3]).to.equal('Apple');
			expect(args[4]).to.equal('Mango');
			expect(args[5]).to.equal('Kiwi');
			expect(args[6]).to.equal('Lime');
		});
		it('with `arguments` value - array value', function() {
			var args = helpers.appendArgs(fruitArgs, newFruit);
			expect(args.length).to.equal(7);
			expect(args[0]).to.equal('Banana');
			expect(args[1]).to.equal('Orange');
			expect(args[2]).to.equal('Lemon');
			expect(args[3]).to.equal('Apple');
			expect(args[4]).to.equal('Mango');
			expect(args[5]).to.equal('Kiwi');
			expect(args[6]).to.equal('Lime');
		});
		it('with `arguments` value - `arguments` value', function() {
			var args = helpers.appendArgs(fruitArgs, newFruitArgs);
			expect(args.length).to.equal(7);
			expect(args[0]).to.equal('Banana');
			expect(args[1]).to.equal('Orange');
			expect(args[2]).to.equal('Lemon');
			expect(args[3]).to.equal('Apple');
			expect(args[4]).to.equal('Mango');
			expect(args[5]).to.equal('Kiwi');
			expect(args[6]).to.equal('Lime');
		});
	});
});
});