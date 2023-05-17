
//  embeded js template

var ejs = require('ejs')
var express = require('express')
var app = express()
var path = require('path')

app.set("view engine", "ejs"); //  greek for greek
app.get('/' , function(req , res){
        res.render('home' , {name : 'ravi'})
})
app.listen(3030)