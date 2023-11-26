const express = require('express');
const multer = require('multer');


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

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads/')
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname))
    }
})


// 文件上传
const upload = multer({
    dest: './uploads/'
});

app.use(upload.any());

app.post('/upload', upload.single('file'), (req, res, next) => {
    console.log(res.body);
    console.log('用户登陆成功')
})

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

