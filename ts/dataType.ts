/**
 * Created by MiliGao on 2017/12/19.
 */

let isOK: boolean = true;

let a: number = 4;
let b: number = 0xf00d;

let name: string = 'MiliGao';
let age: number = 18;
let person: string = `My name is ${name}, I'm ${age} years old!`;

let list1: number[] = [1, 2, 3, 4];
let list2: Array<number> = [1, 2, 3];

// 元组 Tuple: 表示一个已知元素数量和类型的数组
let x: [number, string];
x = [10, 'MiliGao'];
console.log(x[1].substr(0));

// 枚举 enum
enum Color {red, green, blue}
let c1: Color = Color.blue;   // 2
let c2: Color = Color[0];   // 'red'
console.log(c1, c2);

// Any
let notSure: any = 4;
notSure = '我是字符串';
notSure = false
console.log(notSure);
let arr: any[] = [1, 'hello', true];
arr[1] = 400;
console.log(arr);

// void 没有任何类型
let unusable: void = undefined;   // 只能赋予 undefined 和 null

// 类型断言: 通常这会发生在你清楚地知道一个实体具有比它现有类型更确切的类型。
let someOne: any = 'this is a string';
let strLength1: number = (<string>someOne).length;
let strLength2: number = (someOne as string).length;
console.log(strLength1, strLength2);