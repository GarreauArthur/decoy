"use strict";
var sum = function () {
    var a = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        a[_i] = arguments[_i];
    }
    return a.reduce(function (acc, val) { return acc + val; }, 0);
};
test("basic", function () {
    expect(sum()).toBe(0);
});
test("1+1=2", function () {
    expect(sum(1, 1)).toBe(2);
});
