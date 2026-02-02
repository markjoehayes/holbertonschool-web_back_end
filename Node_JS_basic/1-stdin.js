process.stdout.write('Welcome to Holberton School, what is your name?\n');

const isTTY = process.stdin.isTTY;

process.stdin.on('data', (data) => {
  // Output exactly: "Your name is: " + the input (with whatever line endings it has)
  process.stdout.write('Your name is: ' + data);
  
  if (isTTY) {
    process.exit(0);
  }
});

process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
