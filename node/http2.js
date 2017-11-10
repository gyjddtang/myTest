/**
 * Created by Mili on 2017/11/9.
 */

'use strict';

let path = require('path')
let url = require('url')
let http = require('http')
let fs = require('fs')

let workRoot = path.resolve(process.argv[2] || '.')
console.log('workRoot: ' + workRoot)

let server = http.createServer((request, response) => {
  let pathName = url.parse(request.url).pathname
  let filePath = path.join(workRoot, pathName)

  fs.stat(filePath, (err, stat) => {
    if (!err && stat.isFile()) {
      response.writeHead(200)
      fs.createReadStream(filePath).pipe(response)
    } else {
      response.writeHead(404)
      response.end('404 Not Found')
    }
  })
})

server.listen(9527)

console.log('Server is runing at: 9527')
