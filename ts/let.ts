/**
 * Created by MiliGao on 2017/12/19.
 */

let obj = {
  a: 'foo',
  b: 200,
  c: 'bar'
};

// 对象解构
let {a, b}: {a: string, b: number} = obj;
console.log(a, b);

// 数组解构
function calc ([first, second]: [number, number]) {
  console.log(first + second);
}
calc([22, 33, 44]);

// 默认值
function test ({a, b = 222}: {a: number, b?: number}) {
  return a + b;
}
console.log(test({a: 33}));