/**
 * Created by Mili on 2017/11/10.
 */

'use strict'

let path = require('path')

// '.' : 解析当前目录
// process.argv[2] : 从命令行参数获取root目录
let workDir = path.resolve(process.argv[2] || '.')

// 组合完整的文件路径
let filePath = path.join(workDir, 'travel', 'index.html')

console.log('root dir: ' + workDir)
console.log('filePath: ' + filePath)