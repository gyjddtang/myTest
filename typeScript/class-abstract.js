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
    animal.prototype.printName = function () {
        console.log("my name is " + this.name);
    };
    return animal;
}());
var dog = /** @class */ (function (_super) {
    __extends(dog, _super);
    function dog(name) {
        return _super.call(this, name) || this;
    }
    dog.prototype.printMessage = function () {
        console.log("\u6211\u8D70\u4E86100\u6B65\u3002");
    };
    dog.prototype.makeSound = function () {
        console.log('我会叫，不信你试试！');
    };
    return dog;
}(animal));
var dog1; // 允许创建一个对抽象类型的引用
//dog1 = new animal('dog');   // 错误: 不能创建一个抽象类的实例
dog1 = new dog('dog'); // 允许对一个抽象子类进行实例化和赋值
dog1.printName();
dog1.printMessage();
//dog1.makeSound();   // 错误: 方法在声明的抽象类中不存在
