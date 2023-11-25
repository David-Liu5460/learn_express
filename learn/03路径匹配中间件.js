const express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log('common middleware');
    next();
})

// 路径匹配的中间件
app.use('/home', (req, res, next) => {
    console.log("hello middleware 01");
    next();
});


app.use('/home', (req, res, next) => {
    console.log("hello middleware 01");
});

app.listen(8000, () => {
    console.log('express服务器启动成功');
})


