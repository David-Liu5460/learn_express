const express = require('express');


const app = express();

app.use((req, res, next) => {
    if (req.headers["content-type"] === "application/json") {
        const info = JSON.parse(data.toString());
        req.body = info;
        // next();
    } else {
        next()
    }

    req.on('end', () => {
        next();
        // res.end('codewhy, welcome back')
    })
})

// body-parser

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 路径和方法匹配的中间件
app.use((req, res, next) => {
    console.log('common middleware01');
    next();
});

app.get('/login', (req, res, next) => {
    console.log(req.body);
    console.log("home path and method middleware01");
    req.on('data', data => {
        console.log(data.toString());
    });

    req.on('end', () => {
        res.end("codewhy");
    })
});

app.get('/products', (req, res, next) => {
    console.log("home path and method middleware01");
    req.on('data', data => {
        console.log(data.toString());
    });

    req.on('end', () => {
        res.end("codewhy");
    })
});



app.listen(8000, () => {
    console.log('服务启动成功');

})

