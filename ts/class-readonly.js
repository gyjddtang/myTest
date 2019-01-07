/**
 * Created by MiliGao on 2017/12/29.
 */
var animal = /** @class */ (function () {
    function animal(name) {
        this.name = name;
    }
    return animal;
}());
var cat = new animal('cat');
// cat.name = 'cats';   // 只读属性必须在声明时或构造函数里被初始化。
console.log(cat.name);
var human = /** @class */ (function () {
    function human(name) {
        this.name = name;
    } // 参数属性 可以方便地让我们在一个地方定义并初始化一个成员。
    human.prototype.instroduce = function () {
        console.log("my name is " + this.name);
    };
    return human;
}());
var miligao = new human('miligao');
miligao.instroduce();
