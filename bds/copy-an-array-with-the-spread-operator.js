function copyMachine(arr, num) {
  let newArr = [];
  while (num >= 1) {
    // change code below this line
    newArr.push([...arr]);
    // change code above this line
    num--;
  }
  return newArr;
}

// change code here to test different cases:
console.log(copyMachine([true, false, true], 2));
console.log(copyMachine([1, 2, 3], 5)); // should return [[1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3]]
console.log(copyMachine([true, true, null], 1)); // should return [[true, true, null]]
console.log(copyMachine(["it works"], 3)); // should return [["it works"], ["it works"], ["it works"]]