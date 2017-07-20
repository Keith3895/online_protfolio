 var express = require("express");
var app = express();



app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));



app.get("/",function(req,res){
	res.redirect('/Home');
});
app.get("/Home",function(req,res){
	res.render('index');
});
app.get("/Projects",function(req,res){
	res.render('project');
});
app.get("/About",function(req,res){
	res.render('about');
});
app.get("/Contact",function(req,res){
	res.render('contact');
});
app.get("/Blog",function(req,res){
	res.send("Due to payment issues with the account the page can't load.");
});
app.get("/demo/Pheno-bot",function(req,res){
	res.render('phenobot-readup');
});
app.get("/demo/sureify",function(req,res){
	res.render('surify');
});

app.get("*",function(req,res){
	res.redirect('/');
});

// app.listen(process.env.port || process.env.PORT  ,function(a){
app.listen(3000, '127.0.0.1',function(a){
    console.log("server started");
});
