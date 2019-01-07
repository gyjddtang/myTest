/**
 * Created by MiliGao on 2017/12/29.
 */

// 派生类包含了一个构造函数，它 必须调用 super()，它会执行基类的构造函数。 而且，在构造函数里访问 this的属性之前，我们 一定要调用 super()。

class animal {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  move(distance: number = 0) {
    console.log(`${this.name} moved ${distance}m`);
  }
}

class dog extends animal {
  constructor(name: string) {
    super(name);
  }
  move(distance: number = 5) {
    console.log('from dog!');
    super.move(distance);
  }
}

class horse extends animal {
  constructor(name: string) {
    super(name);
  }
  move(distance: number = 10) {
    console.log('from horse');
    super.move(distance);
  }
}

let dog1 = new dog('dog');
let horse1: animal = new horse('horse');

dog1.move();
horse1.move(50);