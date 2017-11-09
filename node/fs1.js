/**
 * Created by Mili on 2017/11/9.
 */
'use strict'

let fs = require('node/fs1')

fs.readFile('text-fs1.txt', 'utf-8', (err, data) => {
  if (err) {
    console.log(err)
  } else {
    console.log(data)
  }
})


// 不传入文件编码时，回调函数的data参数将返回一个Buffer对象
// Buffer对象就是一个包含零个或任意个字节的数组
// fs.readFile('text-fs1.txt', (err, data) => {
//   if (err) {
//     console.log(err)
//   } else {
//     let txt = data.toString('utf-8')
//     console.log(txt)
//   }
// })