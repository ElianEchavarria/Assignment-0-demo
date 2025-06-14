function sumOfMinimumAndMaximum(nums) {
  // Insert code here;
  let min = nums[0];
  let max = nums[0];
  nums.forEach((values) => {
    if (value < min) {
      min = value;
    }
    if (value > max) {
      max = value;
    }
  })

  return min + max;
}

// Do not edit this line;
module.exports = sumOfMinimumAndMaximum;