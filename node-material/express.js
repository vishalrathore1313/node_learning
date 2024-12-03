const express = require('express');   //import express

const app = express();  //make fuction executable.


app.get('',(resquest,response)=>{
    response.send('<h1>hello this is Home Page</h1>')
})

app.get('/about',(resquest,response)=>{
    response.send('<h1>hello this is About Page</h1>')
})

app.get('/help',(resquest,response)=>{
    response.send('<h1>hello this is help Page</h1>')
})

app.get('/user',(resquest,response)=>{
    response.send({
        name: 'sachin',
        sport: 'cricket'
    })
})


app.listen(5000);