// 我们可以使用express.Router 来创建一个路由处理程序
// 一个ROUTER实例拥有完整的中间件和路由系统
// mini-app

const express = require('express');
const userRouter = require('./routers/users');

const app = express();


app.use('/users', userRouter);

app.listen(8000, () => {
    console.log('路由服务器启动成功');
});

