const express = require('express');

const router = express.Router();

router.get('/users', (req, res, next) => {
    res.json(["why"])
});

router.post("/users/:id", (req, res, next) => {
    res.json(`${req.params.id}用户的信息`);
});

router.post('/users', (req, res, next) => {
    res.json("create user success ~");
});

module.exports = router;


