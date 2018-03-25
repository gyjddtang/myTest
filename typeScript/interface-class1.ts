/**
 * Created by MiliGao on 2017/12/31.
 */

// 接口描述了类的公共部分，而不是公共和私有两部分。 它不会帮你检查类是否具有某些私有成员。

interface ClockInterface {
  currentTime: Date;
  setTime(d: Date): void;
}

class Clock implements ClockInterface {
  currentTime: Date;
  setTime(d: Date) {
    this.currentTime = d;
  }
  constructor(d: Date) {
    this.currentTime = d;
  }
}

let clock1 = new Clock(new Date());
console.log(clock1.currentTime);
clock1.setTime(new Date());
console.log(clock1.currentTime);