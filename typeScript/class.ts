/**
 * Created by MiliGao on 2017/12/20.
 */

// 基类、超类
class Animal {
  animal: string;
  constructor(animal: string) {
    this.animal = animal;
  }
  move(distance: number) {
    console.log(`${this.animal} moved ${distance}`);
  }
}

// 派生类、子类
class Dog extends Animal {
  bark() {
    console.log('汪汪！');
  }
}

let dog = new Dog('dog');
dog.move(36);
dog.bark();