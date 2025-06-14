function sumOfAllOddNumbers(nums) {
  // Insert code here;
  let sum = 0;
  nums.forEach((values) => {
    if (values % 2 !== 0) {
      sum += values
    }
  })
  return sum;
}

// Do not edit this line;
module.exports = sumOfAllOddNumbers;