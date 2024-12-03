const express = require('express');
const path = require('path');
const middlewareTest = require('./middleware');
const app = express();
const route = express.Router();

const publicPath = path.join(__dirname,'public');


// app.get('',middlewareTest,(_request,response)=>{
//     response.sendFile(`${publicPath}/index.html`)
// });

// app.get('/about',middlewareTest,(_request,response)=>{
//     console.log("about page "+response.name)
//     response.sendFile(`${publicPath}/about.html`)
// });

app.get('',middlewareTest,(_request,response)=>{
    response.sendFile(`${publicPath}/index.html`)
});

app.get('/about',middlewareTest,(_request,response)=>{
    console.log("about page "+response.name)
    response.sendFile(`${publicPath}/about.html`)
});

route.use('/',route)

app.listen(5000);

