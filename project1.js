
//import the url,httpand fs module

const url = require('url')
const http = require('http')
const fs = require('fs')
const { request } = require('https')

//creating the server 

http.createServer((req,res)=>{
   
//request

const path = req.url

if(path == '/about'){
    console.log("about page");
}
else if(path == '/'){
    console.log("Home page");

res.writeHead(200,{
    'content-type':'text/html'
})


const filecontent = fs.readFileSync("./views/home.html")

res.write(filecontent)

res.end();


}
else if(path == '/services'){
    console.log("service page");
}

}).listen(8082);