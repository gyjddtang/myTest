/**
 * Created by Mili on 2017/11/9.
 */

'use strict'

let per = [ { name: 'Jim', age: 16 }, { name: 'ALeen', age: 17 }]

for (let [index, ele] of per.entries()) {
  console.log(ele, index)
}

// node test1.js
// 直接运行node test1.js文件相当于启动了Node解释器，然后一次性把test1.js文件的源代码给执行了