/**
 * Created by MiliGao on 2017/12/31.
 */
var Clock = /** @class */ (function () {
    function Clock(d) {
        this.currentTime = d;
    }
    Clock.prototype.setTime = function (d) {
        this.currentTime = d;
    };
    return Clock;
}());
var clock1 = new Clock(new Date());
console.log(clock1.currentTime);
clock1.setTime(new Date());
console.log(clock1.currentTime);
