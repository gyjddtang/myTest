/**
 * Created by Mili on 2017/11/9.
 */

'use strict'

let http = require('http')

let server = http.createServer((request, response) => {
  console.log(request.method + ': ' + request.url)

  response.writeHead(200, { 'Content-type': 'text/html' })
  // 将HTTP响应的HTML内容写入response:
  response.end('<h1>响应返回的标签</h1>')
})

// 让服务器监听9527端口:
server.listen(9527)

console.log('> Server is running at 9527')