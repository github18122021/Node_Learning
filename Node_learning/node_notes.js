res.statusCode = 200;
res.statusMessage = "OK";
res.setHeader('Content-Type', 'text/Plain');

res.setStatus(200, "OK", "text/Plain");
res.setStatus(res.statusCode, res.statusMessage, res.setHeader('Content-Type', 'text/Plain'));

//  ----------------------------------


res.setHeader('Content-Type', 'text/Plain');
res.write("Hello World");
res.end("Hello World again");

// ------------------------------------

res.setHeader('Content-Type', 'text/Html');
res.write("<h1>Hello World</h1>");
res.end("<h2>Hello World again");


// -------------------------------------

let http = require("http");

http.createServer((req, res) => {
    console.log(req.method);
    console.log(res);

    if (req.url === "/") {
        res.statusCode = 200;
        res.statusMessage = "All OK";
        res.setHeader("Content-Type", "text/Plain");
        res.end('Hello World "/"');
    } else if (req.url === "/index") {
        res.setStatus(200, "ALL OK", 'Content-Type', 'text/Plain');
        res.end("Hello Worldy");
    } else {
        res.statusCode = 404;
        res.Message = "!OK";
        res.setHeader("Content-Type", "text/Html");
        res.end("<h1>Hello World");
    }
})

http.listen(5000, () => {
    console.log("Server has started to listen at port: 5000");
})
// --------------Express----------------

let express = require("express");
let app = express();

app.get("/", (res, req) => {
    console.log("Hello World");
})

app.all((res, req) => {
    console.log("Error 404: Page Not Found");
})