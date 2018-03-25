/**
 * Created by MiliGao on 2017/12/31.
 */
var oneClock = /** @class */ (function () {
    function oneClock() {
    }
    oneClock.prototype.constructoe = function (h, m) { };
    oneClock.prototype.tick = function () {
        console.log('from oneClock');
    };
    return oneClock;
}());
var twoClock = /** @class */ (function () {
    function twoClock() {
    }
    twoClock.prototype.constructoe = function (h, m) { };
    twoClock.prototype.tick = function () {
        console.log('from twoClock');
    };
    return twoClock;
}());
function createClock(clock, h, m) {
    return new clock(h, m);
}
var c1 = createClock(oneClock, 20, 30);
var c2 = createClock(twoClock, 40, 50);
c1.tick();
c2.tick();
