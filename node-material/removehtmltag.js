const express = require('express');
const path = require('path');

const app = express();
const publicPath=path.join(__dirname,'public')

app.get('',(_request,response)=>{
    response.sendFile(`${publicPath}/index.html`)
})

app.get('/about',(_request,response)=>{
    response.sendFile(`${publicPath}/about.html`)
})
app.get('*',(_request,response)=>{
    response.sendFile(`${publicPath}/404page.html`)
})

app.listen(5000);