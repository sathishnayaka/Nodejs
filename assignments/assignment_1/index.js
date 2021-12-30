function getNameFromCommandLine() {
    // Write you code here, name should be taken as args in process.argv
    var element=process.argv;
    return element[2];
}

function getNameFromEnv() {
    // Write your code here
    return process.env.name ;
}

function getNameFromReadLine() {
    // Write your code here
    const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
var name=readline();
    
}

module.exports = {
    getNameFromCommandLine,
    getNameFromEnv,
    getNameFromReadLine
}