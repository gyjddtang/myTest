/**
 * Created by MiliGao on 2017/12/31.
 */

// 绕开额外属性检查：
// 1. 添加变量来传入参数对象
// 2. 索引签名
// 3. 类型断言 createSquare({ width: 100, opacity: 0.5 } as SquareConfig);

interface SquareConfig {
  color?: string;
  width?: number;
  [propName: string]: any;   // 索引签名 可以绕开额外属性检查
}

function createSquare(config: SquareConfig) {
  let newSquare = {color: 'white', area: 400}
  if(config.color) {
    newSquare.color = config.color;
  }
  if(config.width) {
    newSquare.area = config.width * config.width;
  }
  return newSquare;
}

console.log(createSquare({color: 'red', width: 30, opacity: 0.5}));