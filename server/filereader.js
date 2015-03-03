/**
 * Created by paul on 3/1/15.
 */
var fs = require('fs'),
    readline = require('readline');


//var fileContents = fs.readFileSync('data.txt', 'utf8');

var rd = readline.createInterface({
    input: fs.createReadStream('data.txt'),
    output: process.stdout,
    terminal: false
});

rd.on('line', function(line) {
    console.log(line);
});