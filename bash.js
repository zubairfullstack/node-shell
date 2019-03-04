
const prompt = '\nprompt > ';
process.stdout.write(prompt);

const pwd = require('./pwd');
const ls = require('./ls');
const cat = require('./cat')

process.stdin.on('data', (data) => {
  const cmd = data.toString().trim()
  const cmdArray = cmd.split(' ');

  if (cmdArray[0] === 'pwd') {
    pwd();
  }
  if (cmdArray[0] === 'ls'){
    ls();
  }
  if (cmdArray[0] === 'cat'){
    cat(cmdArray[1])
  }

});

