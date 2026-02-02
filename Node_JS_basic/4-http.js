const http = require('http');

const app = http.createServer((req, res) => {
  // Set the response header with status code 200 and content type text/plain
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  
  // Write the response body
  res.end('Hello Holberton School!');
});

// Make the server listen on port 1245
app.listen(1245, () => {
  console.log('Server is listening on port 1245');
});

// Export the app variable
module.exports = app;
