function quickCheck(arr, elem) {
  // change code below this line
  if(arr.indexOf(elem) >= 0) return true;
  else return false;
  // change code above this line
}

// change code here to test different cases:
console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));
console.log(quickCheck(["squash", "onions", "shallots"], "onions")); // should return true
console.log(quickCheck([3, 5, 9, 125, 45, 2], 125)); // should return true
console.log(quickCheck([true, false, false], undefined)); // should return false