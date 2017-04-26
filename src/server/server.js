// var express = require('express')
"use strict";
exports.__esModule = true;
var express = require("express");
var app = express();
var port = process.env.port || 3000;
var booksRouter = express.Router();
booksRouter.route('/books')
    .get(function (req, res) {
    var l = { hello: 'my api j hckj hkjh ckjvhkcjhvk h' };
    res.json(l);
});
app.use('/api', booksRouter);
app.use('/api', booksRouter);
app.get('/', function (req, res) {
    res.send('wtf');
});
app.listen(port, function () {
    console.log("process.env.port " + process.env.port);
    console.log("listening on port " + port);
});
