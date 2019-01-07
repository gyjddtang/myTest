/**
 * Created by MiliGao on 2019/1/3.
 */

// for(var i = 0; i < 10 ; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 100 * i);
// }

// 当let声明出现在循环体里时拥有完全不同的行为。 不仅是在循环里引入了一个新的变量环境，而是针对 每次迭代都会创建这样一个新作用域。
for(let i = 0; i < 10 ; i++) {
  setTimeout(() => {
    console.log(i);
  }, 100 * i);
}

// 引用的值是不可变的。实际上const变量的内部状态是可修改的。
const kitty = {
  name: "Aurora",
  numLives: 34
};

kitty.name = "Rory";

// 解构数组
let input = [23, 45];
let [first, second] = input;
let [, kk] = input;
console.log(first, second, kk);

// 对象解构
let obj = {
  a: "foo",
  b: 12,
  c: "bar"
};
let {a, b}: {a: string, b: number} = obj;
console.log(a, b);

// 展开
let defaults = { food: "spicy", price: "$$", ambiance: "noisy" };
let search1 = { ...defaults, food: "rich" };
console.log(defaults, search1);

