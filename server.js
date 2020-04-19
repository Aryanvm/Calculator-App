const express=require("express")
const server=express();
const path=require('path')

server.use('/',express.static(path.join(__dirname+'/front_end')))
server.use('/sounds',require('./router'))
server.listen(1234,()=>console.log("server started at http://localhost:1234"));