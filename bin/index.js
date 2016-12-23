'use strict';

var chalk = require('chalk');

module.exports = {
  current: function current() {
    var initialDate = new Date(new Date().getFullYear(), 0, 1);
    return Math.floor((new Date() - initialDate) / (1000 * 60 * 60 * 24) * 100 / 365);
  },

  remain: function remain() {
    return 100 - parseInt(this.current());
  },

  fancy: function fancy() {
    var current = this.current();
    var yearBarInit = "[0%]-[";
    var yearBar = '';
    for (var i = 5; i <= 100; i += 5) {
      yearBar = i < current ? yearBar + '▓' : yearBar + '░';
    }
    return chalk.green(yearBarInit) + chalk.yellow(yearBar) + chalk.green(']-[' + current + '%]');
  }
};
