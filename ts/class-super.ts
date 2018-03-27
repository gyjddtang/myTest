/**
 * Created by MiliGao on 2017/12/29.
 */

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