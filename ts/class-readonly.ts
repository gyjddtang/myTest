/**
 * Created by MiliGao on 2017/12/29.
 */

class animal {
  readonly name: string;
  constructor(name: string) {
    this.name = name;
  }
}

let cat: animal = new animal('cat');
// cat.name = 'cats';   // 只读属性必须在声明时或构造函数里被初始化。
console.log(cat.name);


class human {
  constructor(public name: string) {}   // 参数属性 可以方便地让我们在一个地方定义并初始化一个成员。
  instroduce() {
    console.log(`my name is ${this.name}`);
  }
}

let miligao = new human('miligao');
miligao.instroduce();