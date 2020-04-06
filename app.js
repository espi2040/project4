const express = require("express");
const app = express();
const faker = require('faker');
app.engine('html', require('ejs').renderFile);
app.use(express.static("public"));



app.get("/",function(req,res){
    let firstName = faker.name.firstName();
    let lastName = faker.name.lastName();
  
    res.render("home.ejs",{"firstName": firstName,"lastName": lastName });
});
app.get("/bubblesort",function(req,res){
   res.render("bubblesort.ejs");
});
app.get("/insertionsort",function(req,res){
   res.render("insertionsort.ejs");
});
app.get("/merge",function(req,res){
   res.render("merge.ejs");
});

//starting server
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Express server is running...");
});