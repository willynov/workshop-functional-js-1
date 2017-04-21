const chalk = require('chalk');
const _ = require('lodash');

console.log(chalk.cyan('\nEXERCISE 4 LOADED\n'));

var promiseNumbers = new Promise(function (fulfill, reject) {
  setTimeout(fulfill, 200, [100 , 100, 200, 300, 500])
})

var promiseStrings = new Promise(function (fulfill, reject) {
  setTimeout(fulfill, 2000, ['1' , 'un', '2', '3', 'cinq'])
})

const asyncYolo = (input) => {
  
  // Your future job begins here ...
  'use strict';
  var tab1 = [];
  var tab2 = [];
  promiseNumbers.then(
    (item) => {
      tab1 = item
    }
  );
  promiseStrings.then(
    (item) => {
      tab2 = item
    }
  );
  //console.log('TAB 1', tab1);
  //console.log('TAB 2', tab2);
}

module.exports = {
  asyncYolo: asyncYolo,
  run: asyncYolo
}