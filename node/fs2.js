/**
 * Created by Mili on 2017/11/9.
 */

'use strict'

let fs = require('fs')
let data = '我是来自写入文件的内容，可好玩了,你要不要试试？'

// 如果传入的数据是String，默认按UTF-8编码写入文本文件, 如果传入的参数是Buffer，则写入的是二进制文件
fs.writeFile('text-fs2.txt', data, (err) => {
  if (err) {
    console.log(err)
  } else {
    console.log('写入成功')
  }
})

