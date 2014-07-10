var prompt = require('sync-prompt').prompt;

console.log("I am about to tell you your age and astrological sign.");
console.log("All I need from you is your birthday in this format: mm/dd/yyyy");

var a = prompt("Please enter your birthday: ");
var birth = new Date(a);
var today = new Date();

var birthYear = birth.getYear();
birthYear = parseInt(birthYear);

var todayYear = today.getYear();
todayYear = parseInt(todayYear);

var birthMonth = birth.getMonth();
birthMonth = parseInt(birthMonth);

var todayMonth = today.getMonth();
todayMonth = parseInt(todayMonth);

var birthDay = birth.getUTCDate();
birthDay = parseInt(birthDay);

var todayDay = today.getUTCDate();
todayDay = parseInt(todayDay);

//Calculate Age

var age
var calc = (todayYear - birthYear);

if (birthMonth > todayMonth) {
  age = calc--;
} else if (birthMonth < todayMonth) {
  age = calc;
} else if (birthDay > todayDay) {
  age = calc--;
} else if (birthDay <= todayDay) {
  console.log("Happy Birthday!");
  age = calc;
}

//Calculate Astrological Sign use a switch conditional

var sign

switch (birthMonth) {
  case 0:
    if (birthDay < 20) {
      sign = 'Capricorn';
    }else{
      sign = 'Aquarius';
    }
    break;
  case 1:
    if (birthDay < 19) {
      sign = 'Aquarius';
    }else{
      sign = 'Pisces';
    }
    break;
  case 2:
    if (birthDay < 21) {
      sign = 'Pisces';
    }else{
      sign = 'Aries';
    }
    break;
  case 3:
    if (birthDay < 20) {
      sign = 'Aries';
    }else{
      sign = 'Taurus';
    }
    break;
  case 4:
    if (birthDay < 21) {
      sign = 'Taurus';
    }else{
      sign = 'Gemini';
    }
    break;
  case 5:
    if (birthDay < 21) {
      sign = 'Gemini';
    }else{
      sign = 'Cancer';
    }
    break;
  case 6:
    if (birthDay < 23) {
      sign = 'Cancer';
    }else{
      sign = 'Leo';
    }
    break;
  case 7:
    if (birthDay < 23) {
      sign = 'Leo';
    }else{
      sign = 'Virgo';
    }
    break;
  case 8:
    if (birthDay < 22) {
      sign = 'Virgo';
    }else{
      sign = 'Libra';
    }
    break;
  case 9:
    if (birthDay < 24) {
      sign = 'Libra';
    }else{
      sign = 'Scorpio';
    }
    break;
  case 10:
    if (birthDay < 22) {
      sign = 'Scorpio';
    }else{
      sign = 'Sagittarius';
    }
    break;
  case 11:
    if (birthDay < 22) {
      sign = 'Sagittarius';
    }else{
      sign = 'Capricorn';
    }
}

//Final Console Log

console.log("You are", age, "years old and your sign is", sign, ".");
