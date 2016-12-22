'use strict';

var expect = require('chai').expect;
var yearProgress = require('../src/index');

describe('#yearProgressBar', () => {
    it('should return current year progress (%)', () => {
        let result = yearProgress.current();
        expect(result).to.be.a('number').and.not.to.be.NaN;
    });
    it('should return remain year left (%)', () => {
      let result = yearProgress.remain();
      expect(result).to.be.a('number').and.not.to.be.NaN;
    });
    it('should return fancy progress bar', () => {
      let result = yearProgress.fancy();
      expect(result).to.be.a('string');
    });
});
