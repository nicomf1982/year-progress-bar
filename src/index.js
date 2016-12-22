'use strict';

const chalk = require('chalk');

module.exports = {
  current: function () {
    const initialDate = new Date(new Date().getFullYear(), 0, 1);
    return Math.floor((((new Date() - initialDate) / (1000 * 60 * 60 * 24)) * 100) / 365);
  },

  remain: function () {
    return 100 - parseInt(this.current())
  },

  fancy: function () {
    let current = this.current();
    let yearBarInit = "[0%]-["
    let yearBar='';
      for(let i=5; i<=100; i+=5){
        yearBar = (i<current)?yearBar+'▓':yearBar+'░';
      }
    return chalk.green(yearBarInit)+chalk.yellow(yearBar)+chalk.green(`]-[${current}%]`)
  },
};
