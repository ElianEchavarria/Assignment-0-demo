function sumOfAllEvenNumbers(nums) {
  // Insert code here;
  let count = 0;

  nums.forEach((value) => {
    if (value % 2 === 0) {
      count++;
    }
  });

  return count;
}

// Do not edit this line;
module.exports = sumOfAllEvenNumbers;