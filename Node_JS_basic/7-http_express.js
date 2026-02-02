const express = require('express');
const fs = require('fs');

const app = express();

// Middleware to set Content-Type to text/plain for all responses
app.use((req, res, next) => {
  res.setHeader('Content-Type', 'text/plain');
  next();
});

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  const databasePath = process.argv[2];
  
  if (!databasePath) {
    res.status(500).send('This is the list of our students\nCannot load the database');
    return;
  }
  
  let responseText = 'This is the list of our students\n';
  
  fs.readFile(databasePath, 'utf8', (err, data) => {
    if (err) {
      res.status(500).send('This is the list of our students\nCannot load the database');
      return;
    }
    
    // Process the data
    const lines = data.split('\n').filter(line => line.trim() !== '');
    const students = lines.slice(1);
    
    responseText += `Number of students: ${students.length}\n`;
    
    // Group students by field
    const fields = {};
    
    students.forEach(student => {
      const [firstname, , , field] = student.split(',');
      if (field) {
        fields[field] = fields[field] || [];
        fields[field].push(firstname);
      }
    });
    
    // Add statistics for each field
    Object.entries(fields).forEach(([field, names], index, arr) => {
      responseText += `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`;
      if (index < arr.length - 1) {
        responseText += '\n';
      }
    });
    
    res.send(responseText);
  });
});

app.listen(1245);

module.exports = app;
