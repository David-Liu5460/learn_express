const express = require('express');

// 创建 express 实例 createApplication
// 返回app
const app = express();

// 监听默认路径
app.get('/', (req, res) => {
  res.end('Hello World!');
})

app.post('/', (req, res) => {
  res.end('Hello World!');
})

// 开启监听
app.listen(8000, () => {
  console.log('Server is running on port 3000');
});



// express是一个路由和中间件的web框架 它本身的功能非常少
// express的功能包括：路由、中间件 express应用程序本质上是一系列中间件函数的调用

// 中间件是什么呢？ 中间件的本质是传递给express的一个回调函数
// 中间件是一种函数，它接收一个请求对象和一个响应对象，并返回一个中间件函数
// 这个回调函数接收三个参数 req(请求对象)、res(响应对象)、next
// next在express中定义的用于执行下一个中间件的函数

// 中间件可以执行哪些任务?
// 执行任何代码
// 更改请求和响应对象
// 结束请求 - 响应周期
// 调用栈中的下一个中间件