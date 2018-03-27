/**
 * Created by MiliGao on 2017/12/29.
 */
var grid = /** @class */ (function () {
    function grid(scale) {
        this.scale = scale;
    }
    grid.prototype.distance = function (_a) {
        var x = _a.x, y = _a.y;
        var xDist = x - grid.origin.x;
        var yDist = y - grid.origin.y;
        return Math.sqrt((xDist * xDist + yDist * yDist) / this.scale);
    };
    grid.origin = { x: 0, y: 0 };
    return grid;
}());
var grid1 = new grid(1);
var grid2 = new grid(4);
console.log(grid1.distance({ x: 10, y: 10 }));
console.log(grid2.distance({ x: 30, y: 30 }));
