// console.log('home')

// class Log {
//     constructor() {
//         console.log('log123')
//     }
// }

// let log = new Log()

require('./a.css')

// 发送一个请求
let xhr = new XMLHttpRequest();

// 默认访问 http://localhost:8080  webpack-dev-server 的服务 再转发给3000
// xhr.open('GET', '/api/user', true);

// mock 请求  --- devServer
xhr.open('GET', '/user', true);


xhr.onload = function () {
  console.log(xhr.response)
}

xhr.send();


// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap'
console.log(DEV)
console.log(FLAG)
console.log(EXPOR)
