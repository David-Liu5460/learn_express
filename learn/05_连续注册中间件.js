const express = require('express');


const app = express();


// 路径和方法匹配的中间件
app.use((req, res, next) => {
    console.log('common middleware01');
    next();
});

app.get('/home', (req, res, next) => {
    console.log("home path and method middleware01");
}, (req, res, next) => {
    console.log('连续注册中间件')

    next()

}, (res, req, next) => {
    next()

});


app.listen(8000, () => {
    console.log('服务启动成功');

})

