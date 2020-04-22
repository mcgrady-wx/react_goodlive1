var express = require("express");
var router = express.Router();
var config = require("./config.js");
var url = require("url");
var homehot = require("./data/home/hotdata")
var searchdata = require("./data/search/searchdata")
var detailsdata = require("./data/details/detailsdata")
var commentdata = require("./data/comment/commentdata")

//首页显示接口
router.get(config.homehot1,function(req,res){
	// 接受城市作为参数
    var cityName = url.parse(req.url, true).query.city;
    console.log("城市：" + cityName);
    res.send(homehot.hot1)
})
//首页显示接口
router.get(config.homehot2,function(req,res){
	// 接受城市作为参数
    var cityName = url.parse(req.url, true).query.city;
    console.log("城市：" + cityName);
    res.send(homehot.hot2)
})

//搜索接口
router.get("/search",function(req,res){
	//接收三个参数 城市 请求内容 页码
    var cityName = url.parse(req.url, true).query.city;
    var content = url.parse(req.url, true).query.content;
    var page = url.parse(req.url, true).query.page;
    console.log("城市：" + cityName,"搜索内容：" + content,"页码：" + page);
    res.send(searchdata)
})
// 详情接口
router.get("/details",function(req,res){
	//接收一个参数 商品id
    var id = url.parse(req.url, true).query.id;
    console.log("id:"+id);
    res.send(detailsdata)
})
// 评价接口
router.get("/comment",function(req,res){
	//接收两个参数 商品id和页码
    var id = url.parse(req.url, true).query.id;
    var page = url.parse(req.url, true).query.page;
    console.log("id:"+id,"页码：" + page);
    res.send(commentdata)
})
module.exports = router;