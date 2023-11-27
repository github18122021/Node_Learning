let http = require('http');

let server = http.createServer((req, res) => {
    // console.log(req.url);
    console.log(req.method);
    res.setHeader('Content-Type', 'text/Html');

    if (req.url === "/") {
        res.write("<h1>Hello world </h1>");
        res.end();
    } else if (req.url === "/about") {
        res.write("<h1>About</h1>")
        res.end()
    }
})

server.listen(3000, () => {
    console.log("Listening on port 3000...");
})
