/**
 * Created by MiliGao on 2019-01-08.
 */

// Map 数据结构。它类似于对象，也是键值对的集合，但是“键”的范围不限于字符串，各种类型的值（包括对象）都可以当作键。也就是说，Object 结构提供了“字符串—值”的对应，Map 结构提供了“值—值”的对应。

const o1 = { p: 'Hello Word!' };
let m1 = new Map();

m1.set(o1, 'content');
console.log(m1.get(o1));

// 任何具有 Iterator 接口、且每个成员都是一个双元素的数组的数据结构（详见《Iterator》一章）都可以当作Map构造函数的参数
const s1 = new Set([
  ['foo', 1],
  ['bar', 2]
]);
const m2 = new Map(s1);
const m3 = new Map([['baz', 3]]);
const m4 = new Map(m3);
console.log(m2, m3, m4);

// 只有对同一个对象的引用，Map 结构才将其视为同一个键。Map 的键实际上是跟内存地址绑定的，只要内存地址不一样，就视为两个键。
const m5 = new Map();
const k1 = ['a'];
const k2 = ['a'];
const k3 = k1;
m5.set(k1, 111);
m5.set(k2, 222);
m5.set(k3, 333);
console.log(m5);


// Map实例的属性
console.log(m5.size);

// 操作方法
// set(key, value)
// get(key)
// has(key)
// delete(key)
// clear()

// forEach
m5.forEach((value, key) => {
  // console.log(value, key);
});

// 与其他数据结构的互相转换
// （1）Map 转为数组
const map = new Map([
  [1, 'one'],
  [2, 'two'],
  [3, 'three'],
]);
console.log([...map.keys()]);
console.log([...map.values()]);
console.log([...map]);

//  (2）数组 转为 Map

// （3）Map 转为对象
function strMapToObj(strMap) {
  let obj = Object.create(null);
  for (let [k, v] of strMap) {
    obj[k] = v;
  }
  return obj;
}

console.log(strMapToObj(map));

// （4）对象转为 Map
function objToStrMap(obj) {
  let strMap = new Map();
  for (let k of Object.keys(obj)) {
    strMap.set(k, obj[k]);
  }
  return strMap;
}

console.log(objToStrMap({yes: true, no: false}));