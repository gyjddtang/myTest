/**
 * Created by MiliGao on 2017/12/29.
 */

//存取器要求你将编译器设置为输出ECMAScript 5或更高。

let psd: number = 123456;

class animal {
  private _name: string;

  get name(): string {
    return this._name;
  }

  set name(val: string) {
    if(psd === 123456) {
      this._name = val;
    } else {
      console.log('Error: Unauthorized update of employee!');
    }
  }
}

let dog = new animal();
console.log(dog.name);
dog.name = '小灰灰';
console.log(dog.name);

