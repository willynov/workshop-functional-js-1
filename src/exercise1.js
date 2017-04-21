const chalk = require('chalk');

console.log(chalk.cyan('\nEXERCISE 1 LOADED\n'));

const zip = (input) => {

  // Your future job begins here ...
  return input.reduce(function(acc1, value1) {
    value1.reduce(function(acc2, value2) {
      return acc2.push(value2);
    }, []);
    return acc1.push(value1);
  }, []);

}

module.exports = {
  zip: zip,
  run: zip
}