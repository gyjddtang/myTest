/**
 * Created by MiliGao on 2017/12/31.
 */

// 可选属性的好处之一是可以对可能存在的属性进行预定义，好处之二是可以捕获引用了不存在的属性时的错误。

interface SquareConfig {
  color?: string;
  width?: number;
}

function createSquare(config: SquareConfig) {
  let newSquare = {color: 'white', area: 100};
  if(config.color) {
    newSquare.color = config.color;
  }
  if(config.width) {
    newSquare.area = config.width * config.width;
  }
  return newSquare;
}

console.log(createSquare({width: 33}));
