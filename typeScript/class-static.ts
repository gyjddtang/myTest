/**
 * Created by MiliGao on 2017/12/29.
 */

class grid {
  static origin = {x: 0, y: 0};   // 静态属性 存在于类本身上面而不是类的实例上。

  constructor(public scale: number) {}

  distance({x, y}: {x: number, y: number}) {
    let xDist = x - grid.origin.x;
    let yDist = y - grid.origin.y;
    return Math.sqrt((xDist * xDist + yDist * yDist) / this.scale);
  }
}

let grid1 = new grid(1);
let grid2 = new grid(4);

console.log(grid1.distance({x: 10, y: 10}));
console.log(grid2.distance({x: 30, y: 30}));
