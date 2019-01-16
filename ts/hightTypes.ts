/**
 * Created by MiliGao on 2019-01-15.
 */

// 交叉类型：交叉类型是将多个类型合并为一个类型。 这让我们可以把现有的多种类型叠加到一起成为一种类型，它包含了所需的所有类型的特性。A & B & C
// 联合类型：联合类型表示一个值可以是几种类型之一。 我们用竖线（ |）分隔每个类型，所以 number | string | boolean表示一个值可以是 number， string，或 boolean。

// 类型保护就是一些表达式，它们会在运行时检查以确保在某个作用域里的类型。
// typeof类型保护
// 这些* typeof类型保护*只有两种形式能被识别： typeof v === "typename"和 typeof v !== "typename"， "typename"必须是 "number"， "string"， "boolean"或 "symbol"。 但是TypeScript并不会阻止你与其它字符串比较，语言不会把那些表达式识别为类型保护。
function padLeft(value: string, padding: string | number) {
  if (typeof padding === "number") {
    return Array(padding + 1).join(" ") + value;
  }
  if (typeof padding === "string") {
    return padding + value;
  }
  throw new Error(`Expected string or number, got '${padding}'.`);
}

console.log(padLeft('hello word', 4));


// instanceof类型保护是通过构造函数来细化类型的一种方式。

// if (padder instanceof StringPadder) {
//   padder; // 类型细化为'StringPadder'
// }

// instanceof的右侧要求是一个构造函数，TypeScript将细化为：
// 此构造函数的 prototype属性的类型，如果它的类型不为 any的话
// 构造签名所返回的类型的联合