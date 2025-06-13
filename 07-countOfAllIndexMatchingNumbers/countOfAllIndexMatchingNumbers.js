function countOfAllIndexMatchingNumbers(nums) {
  // Insert code here;
  let count = 0;
  nums.forEach((nums, index) => {
    if (nums === index) {
      count++;
    }
  })
  return count;
}

// Do not edit this line;
module.exports = countOfAllIndexMatchingNumbers;