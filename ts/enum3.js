/**
 * Created by MiliGao on 2018/1/2.
 */
// 当访问枚举值时，为了避免生成多余的代码和间接引用，可以使用常数枚举。
// 常数枚举不可能有计算成员。
var Direction;
(function (Direction) {
    Direction["up"] = "1";
    Direction["down"] = "2";
    Direction["left"] = "3";
    Direction["right"] = "4";
})(Direction || (Direction = {}));
var directions = [Direction.up, Direction['2'], Direction.left, Direction.right];
console.log(directions);
