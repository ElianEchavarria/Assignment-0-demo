function sumOfNumsWithinARange(nums, start, end) {
  // Insert code here;
  let count = 0;
  nums.forEach((values) => {
    if (values >= start && values <= end) {
      count++;
    }
  })
  return count;
}

// Do not edit this line;
module.exports = sumOfNumsWithinARange;