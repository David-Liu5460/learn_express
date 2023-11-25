const express = require('express');

const app = express();

// 编写普通的中间件
// use注册一个中间件(回调函数)

app.use((req, res, next) => {

    console.log('注册了第一个普通的中间件');
    res.end('hello world'); // 请求响应的周期 并不妨碍执行下一个中间件
    next(); // 调用栈中的下一个中间件
});

app.use((req, res, next) => {

    console.log('注册了第二个普通的中间件');
    res.end('hello world')
    next();
});

app.use((req, res, next) => {

    console.log('注册了第三个普通的中间件');
    res.end('hello world')
    // next();
});


app.listen(8000, () => {
    console.log('server is running at 8000');
});