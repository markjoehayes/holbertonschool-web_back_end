process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.setEncoding('utf8');

// Check if input is coming from a terminal (interactive) or a pipe
const isTTY = process.stdin.isTTY;

process.stdin.on('data', (data) => {
  const name = data.replace(/\r?\n$/, ''); // remove newline
  process.stdout.write(`Your name is: ${name}\n`);
  
  // If running in terminal, exit immediately
  if (isTTY) {
    process.exit(0);
  }
});

process.stdin.on('end', () => {
  // This will only be called for piped input (not for terminal with process.exit())
  process.stdout.write('This important software is now closing\n');
});
