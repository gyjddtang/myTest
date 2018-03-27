/**
 * Created by MiliGao on 2017/12/31.
 */

// 继承接口

interface One {
  color: string;
}

interface Two {
  width: number;
}

interface Three extends One, Two {
  height: number;
}

let test = <Three>{};
test.color = 'white';
test.width = 200;
test.height = 300;

console.log(test);