// For lookup
var arabic = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
var roman = ["M", "CM","D","CD","C", "XC", "L", "XL", "X","IX","V","IV","I"];

export function romanToArabic(romanNumber) {
  var result = 0;
  for (var i = 0; i <= arabic.length; i++) {
    while (romanNumber.indexOf(roman[i]) === 0){
      result += arabic[i];
      romanNumber = romanNumber.replace(roman[i],'');
    }
  }
  return result;
}

export function arabicToRoman(arabicNumber) {
  var result = '';
  for (var i = 0; i <= arabic.length; i++) {
    while (arabicNumber%arabic[i] < arabicNumber) {     
      result += roman[i];
      arabicNumber -= arabic[i];
    }
  }
  return result;
}
