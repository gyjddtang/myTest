/**
 * Created by MiliGao on 2017/12/29.
 */

// 在TypeScript里，成员都默认为 public。

class animal {
  private name: string;
  constructor(name: string) {
    this.name = name;
  }
  introduce() {
    console.log(`my name is ${this.name}`);
  }
}

class horse extends animal {
  constructor(name: string) {
    super(name);
  }
  // introduce() {
  //   console.log(`from subclass: my name is ${this.name}`);   // private 成员在派生类中不可访问。
  // }
}

class human {
  private name: string;
  constructor(name: string) {
    this.name = name;
  }
  introduce() {
    console.log(`my name is ${this.name}`);
  }
}

let dog1 = new animal('dog');
let horse1 = new horse('horse');
let miliGao = new human('miliGao');

dog1.introduce();
horse1.introduce();

//console.log(dog1.name);   // 当成员被标记成 private时，它就不能在声明它的类的外部访问。
//console.log(dog1 == horse1);   // 因为 horse1 和 dog1 共享了来自 animal 里的私有成员定义 private name: string，因此它们是兼容的。
//console.log(dog1 == miliGao);   // 错误: Animal 与 Employee 不兼容.