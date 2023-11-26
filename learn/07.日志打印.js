const fs = require('fs');


const express = require('express');
const morgan = require('morgan');

const app = express();


const writerStream = fs.createWriteStream('./logs/access.log', { flags: "a+" });

app.get('/products/:id', (req, res, next) => {
    // 解析参数的两种方式
    // req.params
    // req.query
    res.end('商品详情页面');
});

app.get('/login', (req, res, next) => {
    // res.type("application/json");
    // res.end(JSON.stringify({name: "", age: 18 }));
    res.status(200);
    res.json({a: 1})
})

app.use(morgan("combined", {stream: writerStream}));

app.get('/home', (req, res, next) => {
    res.end("hello world")
})


