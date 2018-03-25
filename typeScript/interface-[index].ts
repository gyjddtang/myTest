/**
 * Created by MiliGao on 2017/12/31.
 */

// 接口也可以描述那些能够“通过索引得到”的类型


// 数字索引签名
interface StringArray {
  [index: number]: string;   //表示了当用 number去索引StringArray时会得到string类型的返回值
}

let myArrary: StringArray;
myArrary = ['mi', 'li', 'gao'];

let myStr: string = myArrary[2];
console.log(myStr);

// 字符串索引签名
interface NumberDictionary {
  [index: string]: number;
  length: number;    // 可以，length是number类型
  name: string       // 错误，`name`的类型与索引类型返回值的类型不匹配
}

// readonly
interface ReadonlyStringArray {
  readonly [index: number]: string;
}
let myArray: ReadonlyStringArray = ["Alice", "Bob"];
myArray[2] = "Mallory"; // error!