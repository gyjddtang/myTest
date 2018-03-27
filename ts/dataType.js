/**
 * Created by MiliGao on 2017/12/19.
 */
var isOK = true;
var a = 4;
var b = 0xf00d;
var name = 'MiliGao';
var age = 18;
var person = "My name is " + name + ", I'm " + age + " years old!";
var list1 = [1, 2, 3, 4];
var list2 = [1, 2, 3];
// 元组 Tuple
var x;
x = [10, 'MiliGao'];
console.log(x[1].substr(0));
// 枚举 enum
var Color;
(function (Color) {
    Color[Color["red"] = 0] = "red";
    Color[Color["green"] = 1] = "green";
    Color[Color["blue"] = 2] = "blue";
})(Color || (Color = {}));
var c1 = Color.blue; // 2
var c2 = Color[0]; // 'red'
console.log(c1, c2);
// Any
var notSure = 4;
notSure = '我是字符串';
notSure = false;
console.log(notSure);
var arr = [1, 'hello', true];
arr[1] = 400;
console.log(arr);
// void 没有任何类型
var unusable = undefined; // 只能赋予 undefined 和 null
// 类型断言: 通常这会发生在你清楚地知道一个实体具有比它现有类型更确切的类型。
var someOne = 'this is a string';
var strLength1 = someOne.length;
var strLength2 = someOne.length;
console.log(strLength1, strLength2);
