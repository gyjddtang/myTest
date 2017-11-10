/**
 * Created by Mili on 2017/11/9.
 */

'use strict'

let fs = require('fs')
let rs = fs.createReadStream('text-fs1.txt')
let ws = fs.createWriteStream('text-fs3.txt')

ws.write('\n以下是复制来的内容\n')

rs.pipe(ws)