const express = require('express');
const app = express();

const path = require('path');
const publicPath = path.join(__dirname,'public');

app.use((_request,response,next)=>{
    console.log("middleware 1")
    response.name= "srk";
    next();
})

app.use((_request,response,next)=>{
    console.log("middleware 2 "+response.name)
    next();
//    return response.send('<h1>middleware 2 response</h1>')
})

app.get('',(_request,response)=>{
    response.sendFile(`${publicPath}/index.html`)
});

app.get('/about',(_request,response)=>{
    console.log("about page "+response.name)
    response.sendFile(`${publicPath}/about.html`)
});


app.listen(5000);

