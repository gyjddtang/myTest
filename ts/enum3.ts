/**
 * Created by MiliGao on 2018/1/2.
 */

// 当访问枚举值时，为了避免生成多余的代码和间接引用，可以使用常数枚举。
// 常数枚举不可能有计算成员。

enum Direction {
  up = '1',
  down = '2',
  left = '3',
  right = '4'
}

let directions = [Direction.up, Direction['2'], Direction.left, Direction.right];
console.log(directions);