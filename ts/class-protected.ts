/**
 * Created by MiliGao on 2017/12/29.
 */

class animal {
  protected name: string;
  protected constructor(name: string) {
    this.name = name;
  }
  introduce() {
    console.log(`my name is ${this.name}`);
  }
}

class dog extends animal {
  constructor(name: string) {
    super(name);
  }
  instroduce() {
    console.log(`from subClass: my name is ${this.name}`);   // protected 成员在派生类中仍然可以访问。
  }
}

//let horse: animal = new animal('horse');   // 构造函数也可以被标记成 protected。 这意味着这个类不能在包含它的类外被实例化，但是能被继承。
let dog1: animal = new dog('dog');

dog1.introduce();