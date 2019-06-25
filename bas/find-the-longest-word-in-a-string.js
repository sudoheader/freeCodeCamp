function findLongestWordLength(str) {
  var arr = str.split(" ");
  var max = 0;
  for(var i = 0; i < arr.length; i++) {
    if(arr[i].length > max) { max = arr[i].length; }
  }
  return max;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog"); // should return 6.
// findLongestWordLength("May the force be with you"); // should return 5.
// findLongestWordLength("Google do a barrel roll"); // should return 6.
// findLongestWordLength("What is the average airspeed velocity of an unladen swallow"); // should return 8.
// findLongestWordLength("What if we try a super-long word such as otorhinolaryngology"); // should return 19.