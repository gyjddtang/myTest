/**
 * Created by MiliGao on 2019/1/3.
 */

// 元组 Tuple: 元组类型允许表示一个已知元素数量和类型的数组

let x: [string, number];

x = ['hello', 1234];

console.log(x[0]);

// 当访问一个越界的元素，会使用联合类型替代：
x[2] = 'world';   // OK, 字符串可以赋值给(string | number)类型
