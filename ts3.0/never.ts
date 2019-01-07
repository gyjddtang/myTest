/**
 * Created by MiliGao on 2019/1/3.
 */

// never类型表示的是那些永不存在的值的类型。

// 返回never的函数必须存在无法达到的终点
function error(message: string): never {
  throw new Error(message);
}

// 返回never的函数必须存在无法达到的终点
function infiniteLoop(): never {
  while (true) {
  }
}