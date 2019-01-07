/**
 * Created by MiliGao on 2019/1/3.
 */

interface SquareConfig {
  color?: string;
  width?: number;
}

function createSquare(config: SquareConfig): {color: string; area: number} {
  let newSquare = {color: "white", area: 100};
  if (config.color) {
    newSquare.color = config.color;
  }
  if (config.width) {
    newSquare.area = config.width * config.width;
  }
  return newSquare;
}

let mySquare1 = createSquare({ color: "black" });
//let mySquare2 = createSquare({ colour: "red", width: 100 });   // error: 'colour' not expected in type 'SquareConfig'
console.log(mySquare1);


// 绕开额外的属性检查：对象字面量会被特殊对待而且会经过 额外属性检查，当将它们赋值给变量或作为参数传递的时候。 如果一个对象字面量存在任何“目标类型”不包含的属性时，你会得到一个错误。

// 1.类型断言
let mySquare2 = createSquare({ colour: "red", width: 100 } as SquareConfig);
console.log(mySquare2);

// 2.索引签名
interface SquareConfig2 {
  color?: string;
  width?: number;
  [propName: string]: any;
}

// 3.增加中间变量
let squareOptions = { colour: "red", width: 100 };
let mySquare3 = createSquare(squareOptions);
console.log(mySquare3);