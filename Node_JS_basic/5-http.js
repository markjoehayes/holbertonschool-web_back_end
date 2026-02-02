const http = require('http');
const fs = require('fs');

const app = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  
  if (req.url === '/') {
    res.statusCode = 200;
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    const databasePath = process.argv[2];
    
    if (!databasePath) {
      res.statusCode = 500;
      res.end('This is the list of our students\nCannot load the database');
      return;
    }
    
    res.write('This is the list of our students\n');
    
    fs.readFile(databasePath, 'utf8', (err, data) => {
      if (err) {
        res.statusCode = 500;
        res.end('Cannot load the database');
        return;
      }
      
      // Process the data
      const lines = data.split('\n').filter(line => line.trim() !== '');
      
      // Remove header row
      const students = lines.slice(1);
      
      // Write total number of students
      res.write(`Number of students: ${students.length}\n`);
      
      // Group students by field
      const fields = {};
      
      students.forEach(student => {
        const [firstname, , , field] = student.split(',');
        
        if (!fields[field]) {
          fields[field] = [];
        }
        fields[field].push(firstname);
      });
      
      // Write statistics for each field
      for (const field in fields) {
        if (Object.prototype.hasOwnProperty.call(fields, field)) {
          const count = fields[field].length;
          const list = fields[field].join(', ');
          res.write(`Number of students in ${field}: ${count}. List: ${list}\n`);
        }
      }
      
      res.end();
    });
  } else {
    res.statusCode = 404;
    res.end('Not Found');
  }
});

app.listen(1245, () => {
  console.log('Server is listening on port 1245');
});

module.exports = app;
