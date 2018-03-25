/**
 * Created by MiliGao on 2017/12/31.
 */

// 接口也可以描述函数类型

interface SearchFun {
  (source: string, subString: string): boolean;
}

let mySearch: SearchFun;
mySearch = function (source, subString) {   // 函数参数不指定类型，TypeScript的类型系统会推断出参数类型，因为函数直接赋值给了 SearchFunc类型变量
  let res = source.search(subString);
  return res > -1;
}

let res = mySearch('我是全部的文字信息', '全部');
console.log(res);


