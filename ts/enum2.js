/**
 * Created by MiliGao on 2018/1/2.
 */
var Direction;
(function (Direction) {
    Direction[Direction["up"] = 1] = "up";
    Direction[Direction["dowm"] = 2] = "dowm";
    Direction[Direction["left"] = 4] = "left";
    Direction[Direction["right"] = '你好啊'.length] = "right";
})(Direction || (Direction = {}));
console.log(Direction);
console.log(Direction.up);
console.log(Direction[3]);
