// Create web server
// Create a web server that listens on port 3000 and responds to the comments endpoint. The server should respond with the comments array as JSON.

const http = require('http');
const comments = require('./comments');

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(comments));
});

server.listen(3000);
// The server should respond to the following URL: http://localhost:3000/comments