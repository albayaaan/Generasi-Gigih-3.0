const http = require("http");

const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "text/plain");
    if (req.url === "/") {
        res.statusCode = 200;
        res.end("This is home page");
    } else if (req.url === "/about") {
        res.statusCode = 200;
        res.end("This is about page");
    } else {
        res.statusCode = 404;
        res.end("Page not found");
    }
});

server.listen(3000, () => {
    console.log("Server running on port 3000 ...");
});
