/**
 * Created by Mili on 2017/11/9.
 */

'use strict'

let fs = require('fs')

// 文件流读取文本内容
let rs = fs.createReadStream('text-fs1.txt', 'utf-8')

rs.on('data', (chunk) => {
  console.log('DATD')
  console.log(chunk)
})

rs.on('end', () => {
  console.log('END')
})

rs.on('error', (err) => {
  console.log('ERROR')
  console.log(err)
})