/**
 * Created by MiliGao on 2017/12/29.
 */

abstract class animal {
  constructor(public name: string) {}

  printName(): void {
    console.log(`my name is ${this.name}`);
  }

  abstract printMessage(): void;   // 必须在派生类中实现
}

class dog extends animal {
  constructor(name: string) {
    super(name);
  }

  printMessage(): void {
    console.log(`我走了100步。`);
  }

  makeSound(): void {
    console.log('我会叫，不信你试试！');
  }
}

let dog1: animal;   // 允许创建一个对抽象类型的引用
//dog1 = new animal('dog');   // 错误: 不能创建一个抽象类的实例
dog1 = new dog('dog');   // 允许对一个抽象子类进行实例化和赋值
dog1.printName();
dog1.printMessage();
//dog1.makeSound();   // 错误: 方法在声明的抽象类中不存在



