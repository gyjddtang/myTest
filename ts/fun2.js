/**
 * Created by MiliGao on 2017/12/31.
 */
// 可选参数必须跟在必须参数后面。
function add(x, y) {
    if (y) {
        return x + y;
    }
    else {
        return x;
    }
}
console.log(add(4));
console.log(add(4, 4));
function elseAdd(x, y) {
    if (y === void 0) { y = 7; }
    return x + y;
}
console.log(elseAdd(4));
console.log(elseAdd(4, 10));
//剩余参数: 剩余参数会被当做个数不限的可选参数。 可以一个都没有，同样也可以有任意个。
function buildName(firstName) {
    var restOfname = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restOfname[_i - 1] = arguments[_i];
    }
    return firstName + restOfname.join(' ');
}
console.log(buildName('mi', 'li', 'gao'));
