/**
 * Created by MiliGao on 2017/12/20.
 */

// 接口：对值所具有的结构进行类型检查。
// 类型检查器不会去检查属性的顺序，只要相应的属性存在并且类型也是对的就可以。

interface LabelValue {
  label: string;
}

function printlabel(labelObj: LabelValue) {
  console.log(labelObj.label);
}

let myLabel = {size: 50, label: '我是一段标签文本'};   // 增加中间变量，绕开额外属性检查。
printlabel(myLabel);