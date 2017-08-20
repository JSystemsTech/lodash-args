(function(factory) {
    'use strict';
    /* istanbul ignore next */
    // CommonJS
    if (typeof exports == "object" && typeof require == "function") {
        module.exports = factory(require("lodash"));
    }
    // AMD
    else if (typeof define == "function" && define.amd) {
        define(["lodash"], factory);
    }
}(function(_) {
    "use strict";
    const _privateAttributes = new WeakMap();
    class ArgumentsHelpers {
        constructor() {
            this.instanceId = _.uniqueId('instanceId_');
            var self = this;
            _privateAttributes.set(this, {
                _minToZero: function(num) {
                    if (!_.isInteger(num) || num < 0) {
                        return 0;
                    }
                    return num;
                },
                toArguments: function(argsObj) {
                    if (_.isArguments(argsObj)) {
                        return argsObj;
                    } else if (!_.isPlainObject(argsObj) && !_.isArray(argsObj)) {
                        return arguments;
                    }
                    return function() {
                        return arguments;
                    }.apply(this, _.values(argsObj));
                },
                firstNArgs: function(args, firstN) {
                    return _privateAttributes.get(self).toArguments(_privateAttributes.get(self).argsAt(args, _.range(0, _privateAttributes.get(self)._minToZero(firstN))));
                },
                lastNArgs: function(args, lastN) {
                    args = _privateAttributes.get(self).toArguments(args);
                    return _privateAttributes.get(self).toArguments(_privateAttributes.get(self).argsAt(args, _.range(args.length - _privateAttributes.get(self)._minToZero(lastN), args.length)));
                },
                argsAfterN: function(args, index) {
                    args = _privateAttributes.get(self).toArguments(args);
                    return _privateAttributes.get(self).toArguments(_privateAttributes.get(self).argsAt(args, _.range(_privateAttributes.get(self)._minToZero(index) + 1, args.length)));
                },
                argsBeforeN: function(args, index) {
                    return _privateAttributes.get(self).firstNArgs(args, index);
                },
                argsAt: function(args, indexes) {
                    return _privateAttributes.get(self).toArguments(_.pick(_privateAttributes.get(self).toArguments(args), indexes));
                },
                argsWithout: function(args, indexes) {
                    return _privateAttributes.get(self).toArguments(_.omit(_privateAttributes.get(self).toArguments(args), indexes));
                },
                insertArgsAt: function(args, argsToInsert, index) {
                    args = _privateAttributes.get(self).toArguments(args);
                    argsToInsert = _.values(_privateAttributes.get(self).toArguments(argsToInsert));
                    index = _privateAttributes.get(self)._minToZero(index);
                    var insertArgsAtValue = Array.prototype.slice.call(args, 0, index).concat(argsToInsert).concat(Array.prototype.splice.call(args, index));
                    return _privateAttributes.get(self).toArguments(insertArgsAtValue);

                },
                prependArgs: function(args, argsObjToPrepend) {
                    return _privateAttributes.get(self).insertArgsAt(args, argsObjToPrepend);
                },
                appendArgs: function(args, argsObjToAppend) {
                    args = _privateAttributes.get(self).toArguments(args);
                    return _privateAttributes.get(self).insertArgsAt(args, argsObjToAppend, args.length);
                }
            });
            this.toArguments = function() {
                return _privateAttributes.get(this).toArguments.apply(this, arguments);
            };
            this.firstNArgs = function() {
                return _privateAttributes.get(this).firstNArgs.apply(this, arguments);
            };
            this.lastNArgs = function() {
                return _privateAttributes.get(this).lastNArgs.apply(this, arguments);
            };
            this.argsAfterN = function() {
                return _privateAttributes.get(this).argsAfterN.apply(this, arguments);
            };
            this.argsBeforeN = function() {
                return _privateAttributes.get(this).argsBeforeN.apply(this, arguments);
            };
            this.argsAt = function() {
                return _privateAttributes.get(this).argsAt.apply(this, arguments);
            };
            this.argsWithout = function() {
                return _privateAttributes.get(this).argsWithout.apply(this, arguments);
            };
            this.insertArgsAt = function() {
                return _privateAttributes.get(this).insertArgsAt.apply(this, arguments);
            };
            this.prependArgs = function() {
                return _privateAttributes.get(this).prependArgs.apply(this, arguments);
            };
            this.appendArgs = function() {
                return _privateAttributes.get(this).appendArgs.apply(this, arguments);
            };
            this.getArgHelpers = function() {
                var argHelpers = _privateAttributes.get(this);
                return {
                    toArguments: argHelpers.toArguments,
                    firstNArgs: argHelpers.firstNArgs,
                    lastNArgs: argHelpers.lastNArgs,
                    argsAfterN: argHelpers.argsAfterN,
                    argsBeforeN: argHelpers.argsBeforeN,
                    argsAt: argHelpers.argsAt,
                    argsWithout: argHelpers.argsWithout,
                    insertArgsAt: argHelpers.insertArgsAt,
                    prependArgs: argHelpers.prependArgs,
                    appendArgs: argHelpers.appendArgs
                };
            };
        }
    }
    return new ArgumentsHelpers();
}));