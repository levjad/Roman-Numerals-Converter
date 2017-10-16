import { romanToArabic, arabicToRoman } from 'script.js';
import { assert } from 'chai';

describe("Roman numbers", function() {

  it("should return 1 for I", function() {
    assert.equal(romanToArabic('I'), 1);
  });

  it("should return 1234 for MCCXXXIV", function() {
    assert.equal(romanToArabic('MCCXXXIV'), 1234);
  });

});

describe("Arabic numbers", function() {

  it("should return I for 1", function() {
    assert.equal(arabicToRoman(1), 'I');
  });

  it("should return MCCXXXIV for 1234 ", function() {
    assert.equal(arabicToRoman(1234), 'MCCXXXIV');
  });

});
