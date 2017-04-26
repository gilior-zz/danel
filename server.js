// var express = require('express')
"use strict";
exports.__esModule = true;
var express = require("express");
var app = express();
var port = process.env.port || 3000;
app.get('/', function (req, res) {
    res.send('wtf');
});
app.listen(port, function () {
    console.log("process.env.port" + process.env.port);
    console.log("listening on port" + port);
});
