function reverseString(str) {
  // return str;
  var arr = [];
  for(var i = 0; i < str.length; i++) {
    arr = str.split("");
    arr.reverse();
  }
  return arr.join("");
}

reverseString("hello");