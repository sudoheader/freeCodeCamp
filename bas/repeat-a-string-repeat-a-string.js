function repeatStringNumTimes(string, num) {
  var repeatString = "";
  while (num > 0) {
    repeatString += string;
    num--;
  }
  return repeatString;
}

repeatStringNumTimes("abc", 3);
repeatStringNumTimes("*", 3) // should return "***".
repeatStringNumTimes("abc", 4) // should return "abcabcabcabc".
repeatStringNumTimes("abc", 1) // should return "abc".
repeatStringNumTimes("*", 8) // should return "********".
repeatStringNumTimes("abc", -2) // should return "".