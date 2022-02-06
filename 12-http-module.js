const http = require('http');

const server = http.createServer((req, res) => {
    // homepage, listening for address or enpoint
    if(req.url === '/') {
        res.end('Welcome to our home page')
    }
    if(req.url === '/about') {
        res.end('Here is our short history')
    }
    // if the user request to the address that doesn't exist in out server.
    res.end(`
        <h1>Oops!</h1>
        <p>We can't seem to find the page you are looking for</p>
        <a href="/">back home</a>
    `)

})

server.listen(5000)