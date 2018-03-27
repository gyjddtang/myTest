/**
 * Created by MiliGao on 2017/12/19.
 */
var obj = {
    a: 'foo',
    b: 200,
    c: 'bar'
};
// 对象解构
var a = obj.a, b = obj.b;
console.log(a, b);
// 数组解构
function calc(_a) {
    var first = _a[0], second = _a[1];
    console.log(first + second);
}
calc([22, 33, 44]);
// 默认值
function test(_a) {
    var a = _a.a, _b = _a.b, b = _b === void 0 ? 222 : _b;
    return a + b;
}
console.log(test({ a: 33 }));
