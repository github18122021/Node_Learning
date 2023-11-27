let http = require("http");

let fs = require("fs");

let server = http.createServer((req, res) => {

    // if (req.url === "/about") {
    //     res.statusCode = 302;
    //     res.setHeader('Location', "/")
    //     res.end();
    //     // console.log("Executed /about section to redirect");
    // } else if (req.url === "/") {
    //     res.statusCode = 200;
    //     res.setHeader('Content-Type', 'text/Plain')
    //     res.write("Hello");
    //     res.end()
    // }

    if (req.url === "/") {
        res.setHeader('Content-Type', 'text/Plain');
        res.write("Root url");
        res.end();
    } else if (req.url === "/about") {
        res.statusCode = 302;
        res.setHeader('Location', '/');
        res.end();
    } else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/Plain');
        res.end("Error 404: Page Not Found");
    }


    // if (req.url === "/about") {
    //     res.statusCode = 302;
    //     res.setHeader('Location', "/")
    // }

    // if (req.url === "/") {
    //     let data = fs.readFileSync('./09_exercise.html', 'utf8', (error, result) => {
    //         if (error) {
    //             console.error(error);
    //         }
    //         return result;
    //     })

    //     res.setHeader('Content-Type', 'text/Html');
    //     res.write(`${data}`);
    //     res.end()
    // }


    // if (req.url === "/") {
    //     let messages = ["Hello", "World", "From", "An", "Array"];
    //     res.setHeader('Content-Type', 'text/Html');
    //     for (let i = 0; i < messages.length; i++) {
    //         res.write(`<h1>${messages[i]}</h1>`)
    //         res.write('<br>')
    //     }
    //     res.end();
    // }
})

server.listen(5000, () => {
    console.log("Listening on port 5000: ....");
})