// I am server

const http= require('http');

http.createServer((request,response)=>{
       response.write("<h1>sending response from http server---> vishal<h1>");
       response.end();
}).listen(4000);