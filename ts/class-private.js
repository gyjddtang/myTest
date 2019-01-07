/**
 * Created by MiliGao on 2017/12/29.
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// 在TypeScript里，成员都默认为 public。
var animal = /** @class */ (function () {
    function animal(name) {
        this.name = name;
    }
    animal.prototype.introduce = function () {
        console.log("my name is " + this.name);
    };
    return animal;
}());
var horse = /** @class */ (function (_super) {
    __extends(horse, _super);
    function horse(name) {
        return _super.call(this, name) || this;
    }
    return horse;
}(animal));
var human = /** @class */ (function () {
    function human(name) {
        this.name = name;
    }
    human.prototype.introduce = function () {
        console.log("my name is " + this.name);
    };
    return human;
}());
var dog1 = new animal('dog');
var horse1 = new horse('horse');
var miliGao = new human('miliGao');
dog1.introduce();
horse1.introduce();
//console.log(dog1.name);   // 当成员被标记成 private时，它就不能在声明它的类的外部访问。
//console.log(dog1 == horse1);   // 因为 horse1 和 dog1 共享了来自 animal 里的私有成员定义 private name: string，因此它们是兼容的。
//console.log(dog1 == miliGao);   // 错误: Animal 与 Employee 不兼容.
