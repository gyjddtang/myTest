/**
 * Created by MiliGao on 2017/12/31.
 */

// 可选参数必须跟在必须参数后面。

function add(x: number, y?: number) {   // 没传参的时候，y的值就是undefined。
  if(y) {
    return x + y;
  } else {
    return x;
  }
}

console.log(add(4));
console.log(add(4, 4));

function elseAdd(x: number, y = 7) {   // 默认初始化值的参数
  return x + y;
}

console.log(elseAdd(4));

//剩余参数: 剩余参数会被当做个数不限的可选参数。 可以一个都没有，同样也可以有任意个。
function buildName(firstName: string, ...restOfname: string[]) {
  return firstName + restOfname.join(' ');
}

console.log(buildName('mi', 'li', 'gao'));