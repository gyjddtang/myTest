/**
 * Created by Mili on 2017/11/9.
 */

'use strict'

let fs = require('fs')

let ws = fs.createWriteStream('text-stream1.txt')
ws.write('使用 Stream 写入流式数据……\n')
ws.write('第二行写入的\n')
ws.write('END')
ws.end()