var express = require("express");
var app = express();
var _ = require("lodash");
var url = require('url');
var port = process.env.PORT || 3000;
app.use(express.static("."));
app.listen(port);