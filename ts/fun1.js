/**
 * Created by MiliGao on 2017/12/31.
 */
// 完整函数类型: 参数类型和返回值类型。
// 返回值类型是函数类型的必要部分，如果函数没有返回任何值，你也必须指定返回值类型为 void 而不能留空。
var add = function (x, y) {
    return x + y;
};
var myAdd = function (x, y) {
    return x + y;
};
// 推断类型: 赋值语句的一边指定了类型但是另一边没有类型的话，TypeScript编译器会自动识别出类型
var elseAdd = function (x, y) {
    return x + y;
};
console.log(add(3, 5));
console.log(myAdd(3, 5));
console.log(elseAdd(3, 5));
