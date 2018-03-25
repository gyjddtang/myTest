/**
 * Created by MiliGao on 2017/12/29.
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var animal = /** @class */ (function () {
    function animal(name) {
        this.name = name;
    }
    animal.prototype.move = function (distance) {
        if (distance === void 0) { distance = 0; }
        console.log(this.name + " moved " + distance + "m");
    };
    return animal;
}());
var dog = /** @class */ (function (_super) {
    __extends(dog, _super);
    function dog(name) {
        return _super.call(this, name) || this;
    }
    dog.prototype.move = function (distance) {
        if (distance === void 0) { distance = 5; }
        console.log('from dog!');
        _super.prototype.move.call(this, distance);
    };
    return dog;
}(animal));
var horse = /** @class */ (function (_super) {
    __extends(horse, _super);
    function horse(name) {
        return _super.call(this, name) || this;
    }
    horse.prototype.move = function (distance) {
        if (distance === void 0) { distance = 10; }
        console.log('from horse');
        _super.prototype.move.call(this, distance);
    };
    return horse;
}(animal));
var dog1 = new dog('dog');
var horse1 = new horse('horse');
dog1.move();
horse1.move(50);
