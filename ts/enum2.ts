/**
 * Created by MiliGao on 2018/1/2.
 */

// 当满足如下条件时，枚举成员被当作是常数：
// 1. 不具有初始化函数并且之前的枚举成员是常数。 在这种情况下，当前枚举成员的值为上一个枚举成员的值加1。 但第一个枚举元素是个例外。 如果它没有初始化方法，那么它的初始值为 0。
// 2. 枚举成员使用常数枚举表达式初始化。 常数枚举表达式是TypeScript表达式的子集，它可以在编译阶段求值。

// 当一个表达式满足下面条件之一时，它就是一个常数枚举表达式：
// 1. 数字字面量
// 2. 引用之前定义的常数枚举成员（可以是在不同的枚举类型中定义的） 如果这个成员是在同一个枚举类型中定义的，可以使用非限定名来引用。
// 3. 带括号的常数枚举表达式
// 4. +, -, ~ 一元运算符应用于常数枚举表达式
// 5. +, -, *, /, %, <<, >>, >>>, &, |, ^二元运算符，常数枚举表达式做为其一个操作对象。若常数枚举表达式求值后为 NaN或Infinity，则会在编译阶段报错。

enum Direction {
  // 常数枚举成员
  up = 1,
  dowm = 1 << 1,
  left = 1 << 2,
  // 计算值枚举成员
  right = '你好啊'.length
}

console.log(Direction);
console.log(Direction.up);
console.log(Direction[3]);