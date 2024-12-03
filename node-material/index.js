// const app = require('./app')
// const fs= require('fs');
// const colors= require('colors');
const http = require("http");

// let a=10
// let b=20
// let c=30

// console.log(a+b+c);
// console.log(app.z());

// fs.writeFileSync('hello.txt',"hello i am vishal");
// fs.writeFileSync('server1.js',"I am server");

// console.log("hello".yellow)
// console.log("nodemon active")


//first api

// const data = require("./data")

// http
//   .createServer((request, response) => {
//     response.writeHead(200, { "Content-Type": "application/json" });
//     response.write(JSON.stringify(data));
//     response.end();
//   })
//   .listen(4000);



//Getting input frm command line

// console.log(process.argv)
// console.log(process.argv[2])


// do something meaningful with process.


const fs= require('fs');

const input = process.argv;

// fs.writeFileSync(input[2],input[3]);


// video-12


// if(input[2] === "add"){
    
//     fs.writeFileSync(input[3],input[4]);
// }else if(input[2] === "remove"){
    
//     fs.unlinkSync(input[3]);
// }



// video-13

// # 15 Asynchronous Programming Language


console.log("start exe")

setTimeout(()=>{
    console.log("Logic exe")
},1000)

console.log("Complete exe")


// Drawback of Asynchronous Programming Language

// let a=10;
// let b=20;

// setTimeout(()=>{
//     b=50;
// },1000)

// console.log(a+b)   //30



//video-16 Handle Asynchronous Data,and solve problem.


let a=10;
let b=20;

const data= new Promise((resolve,reject)=>{
      setTimeout(()=>{
           resolve(30);
      },2000)  
})

data.then((d)=>{
    b=d;
  console.log(a+b)
})


// video-17 How Node js Works.

