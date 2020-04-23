var express = require("express");
var app = express();
var router = require("./router.js");
var bodyParser = require("body-parser");//获得post请求中的数据

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use("/api",router);

app.listen(3002,function(){
    console.log(3002);
})