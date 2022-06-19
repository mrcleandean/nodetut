const http = require('http');
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Welcome to my shitty server!');
    }
    if (req.url === '/about') {
        res.end('Here\'s some information on our shit!');
    }
    res.end(`
        <h1>Oops!</h1>
        <p>We can't seem to find your shit.</p>
        <a href='/'>Get back to the shitty server home.</a>
    `)
    res.end();
})
server.listen(3000);