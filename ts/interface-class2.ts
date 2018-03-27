/**
 * Created by MiliGao on 2017/12/31.
 */

// 类是具有两个类型的：静态部分的类型和实例的类型。
// 当一个类实现了一个接口时，只对其实例部分进行类型检查。 constructor存在于类的静态部分，所以不在检查的范围内。
// 我们应该直接操作类的静态部分。


interface ClockConstructor {
  new (h: number, m: number): ClockInterface;
}

interface ClockInterface {
  tick(): void;
}

class oneClock implements ClockInterface {
  constructoe(h: number, m: number) {}
  tick() {
    console.log('from oneClock');
  }
}

class twoClock implements ClockInterface {
  constructoe(h: number, m: number) {}
  tick() {
    console.log('from twoClock');
  }
}

function createClock(clock: ClockConstructor, h: number, m: number): ClockInterface {
  return new clock(h, m);
}

let c1 = createClock(oneClock, 20, 30);
let c2 = createClock(twoClock, 40, 50);

c1.tick();
c2.tick();