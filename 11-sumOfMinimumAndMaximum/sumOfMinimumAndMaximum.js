function sumOfMinimumAndMaximum(nums) {
  // Insert code here;
  let min = nums[0];
  let max = nums[0];

  nums.forEach((values) => {
    if (values < min) {
      min = values;
    }
    if (values > max) {
      max = values;
    }
  });

  return min + max;
}

// Do not edit this line;
module.exports = sumOfMinimumAndMaximum;