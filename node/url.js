/**
 * Created by Mili on 2017/11/10.
 */

'use strict'

let url = require('url')
let path = 'http://user:pass@host.com:8080/path/to/file?query=string#hash'

// 通过parse()将一个字符串解析为一个Url对象
let obj = url.parse(path)

console.log(obj)