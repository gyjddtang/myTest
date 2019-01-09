/**
 * Created by MiliGao on 2019-01-08.
 */

// Set：类似于数组，但是成员的值都是唯一的，没有重复的值。

const s1 = new Set();
[1, 2, 3, 4, 5, 5, 6].forEach(e => s1.add(e));
console.log([ ...s1 ]);

const s2 = new Set();
const o1 = { a: 'sss', b: 4};
const o2 = o1;
let a = NaN;
let b = NaN;
s2.add(o1);
s2.add(o2);
s2.add(a);
s2.add(b);
console.log(s2);


// Set实例的属性
console.log(s1.size);   // size：返回Set实例的成员总数


// 操作方法
// add(value)：添加某个值，返回 Set 结构本身。
// delete(value)：删除某个值，返回一个布尔值，表示删除是否成功。
// has(value)：返回一个布尔值，表示该值是否为Set的成员。
// clear()：清除所有成员，没有返回值


// Array.from方法可以将 Set 结构转为数组。
let s3 = new Set([7, 8, 9, 10]);
console.log(Array.from(s3));


// Set 结构没有键名，只有键值（或者说键名和键值是同一个值）
s3.forEach((ele, key) => {
  console.log(ele, key);
});



// 事例：数组去重
const a1 = [1, 2, 3, 4, 5, 5, 6, 6];
console.log([ ...new Set(a1) ]);
console.log(Array.from(new Set(a1)));

// 事例：字符串去重复字符
const t1 = 'abcddeeff';
console.log([ ...new Set(t1) ].join(''));