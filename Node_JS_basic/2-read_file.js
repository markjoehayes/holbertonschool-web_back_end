const fs = require('fs');

function countStudents(path) {
  try {
    // Read the file synchronously
    const data = fs.readFileSync(path, 'utf8');
    
    // Split the data into lines and filter out empty lines
    const lines = data.split('\n').filter(line => line.trim() !== '');
    
    // Remove the header row
    const students = lines.slice(1);
    
    // Count total students (excluding empty lines)
    console.log(`Number of students: ${students.length}`);
    
    // Group students by field
    const fields = {};
    
    students.forEach(student => {
      const [firstname, , , field] = student.split(',');
      
      if (!fields[field]) {
        fields[field] = [];
      }
      fields[field].push(firstname);
    });
    
    // Log the count and list for each field
    for (const field in fields) {
      if (Object.prototype.hasOwnProperty.call(fields, field)) {
        const count = fields[field].length;
        const list = fields[field].join(', ');
        console.log(`Number of students in ${field}: ${count}. List: ${list}`);
      }
    }
    
  } catch (error) {
    // Throw error if file cannot be loaded
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
