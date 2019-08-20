var express = require("express");
var app = express();

app.listen(3001);

app.get("/src/component/Page3.js",(req,res)=>{
  res.sendFile(__dirname + "/src/component/Page3.js");
})
