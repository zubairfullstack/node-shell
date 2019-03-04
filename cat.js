const fs = require('fs');

function cat (filePath) {

  fs.readFile(`${filePath}`, 'utf8', (err, data) => {
    if (err) {throw err; }
    else {
      console.log(data)
      process.stdout.write('\nprompt > ');
      }
    })
}

module.exports = cat;
