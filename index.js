const express=require('express');
const app=express();
const session = require("express-session");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const mysql = require('mysql2');
const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'wt152'
});
app.use(session({
    secret:"secret",
    resave:false,
    saveUninitialized:true
}));
app.get("/register",(req,res)=>{
    res.sendFile(__dirname + "/register.html");
    console.log("success");
});
app.get("/admin_reg",(req,res)=>{
    res.sendFile(__dirname + "/admin_reg.html");
    console.log("success");
});
app.post("/register",(req,res)=>{
    console.log(req.body);
   const name = req.body.name;
   req.session.loggedin = true;
   req.session.username = name;
   console.log(req.session.username);
   res.render("ok.ejs",{name:name});

});
app.get("/",(req,res)=>{
         res.send("hii");
});
app.listen(3000,()=>{
    console.log("server is running");
});