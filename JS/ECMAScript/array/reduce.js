/**
 * Created by MiliGao on 2019-01-11.
 */

// reduce() 方法对数组中的每个元素执行一个由您提供的reducer函数(升序执行)，将其结果汇总为单个返回值。

// reducer 函数接收4个参数:
// Accumulator (acc) (累计器)
// Current Value (cur) (当前值)
// Current Index (idx) (当前索引)
// Source Array (src) (源数组)

const array1 = [1, 2, 3];
const reducerFunc = (accumulator, currentValue, currentIndex, array) => {
  console.log(accumulator, currentValue, currentIndex, array);
  return accumulator + currentValue
};

// 1 + 2 + 3
console.log(array1.reduce(reducerFunc));

// 20 + 1 + 2 + 3
console.log(array1.reduce(reducerFunc, 20));