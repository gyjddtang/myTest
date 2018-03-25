/**
 * Created by MiliGao on 2017/12/31.
 */

// 完整函数类型: 参数类型和返回值类型。
// TypeScript能够根据返回语句自动推断出返回值类型，因此我们通常省略它。
// 返回值类型是函数类型的必要部分，如果函数没有返回任何值，你也必须指定返回值类型为 void 而不能留空。

let add: (x: number, y: number) => number = function (x: number, y: number): number {
  return x + y;
}

let myAdd = function (x: number, y: number): number {
  return x + y;
}

// 推断类型: 赋值语句的一边指定了类型但是另一边没有类型的话，TypeScript编译器会自动识别出类型
let elseAdd: (x: number, y: number) => number = function (x, y) {
  return x + y;
}

console.log(add(3, 5));
console.log(myAdd(3, 5));
console.log(elseAdd(3, 5));