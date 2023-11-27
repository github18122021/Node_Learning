let http = require('http');

// console.log(http);

let myServer = http.createServer((req, res) => {
    // console.log(req);
    console.log("Congrats, The server has been successfully created")
    res.setHeader('Content-Type', 'text/Plain') 
    // res.setHeader('Content-Type', 'text/Html')
    res.end('Hello world')
})

myServer.listen(3000, ()=> {
    console.log("Server has started to listen at localhost port: 3000");
    // console.log("experimenting nodemon here");
})