var express = require("express");
var app = express();
var url = require('url');
var port = process.env.PORT || 80;
app.use(express.static("."));
app.listen(port);
console.log("Server started at: " + "http://localhost:".concat(port));
