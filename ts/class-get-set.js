/**
 * Created by MiliGao on 2017/12/29.
 */
var psd = 123456;
var animal = /** @class */ (function () {
    function animal() {
    }
    Object.defineProperty(animal.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (val) {
            if (psd && psd == 123456) {
                this._name = val;
            }
            else {
                console.log('Error: Unauthorized update of employee!');
            }
        },
        enumerable: true,
        configurable: true
    });
    return animal;
}());
var dog = new animal();
console.log(dog.name);
dog.name = '小灰灰';
console.log(dog.name);