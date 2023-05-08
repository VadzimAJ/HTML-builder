const fs = require('fs');
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const filePath = path.join(__dirname, 'output.txt');
const writeStream = fs.createWriteStream(filePath, { flags: 'a' });

console.log('Введите текст. Для выхода введите "exit"');
console.log('или используйте сочетание клавишь Ctr + C');

rl.on('line', (input) => {
  if (input.toLowerCase() === 'exit') {
    console.log('Программа завершена.');
    process.exit();s
  }
  writeStream.write(`${input}\n`);
});