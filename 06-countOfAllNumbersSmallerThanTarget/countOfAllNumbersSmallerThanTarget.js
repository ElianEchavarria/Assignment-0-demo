function countOfAllNumbersSmallerThanTarget(nums, target) {
  // Insert code here;
  let count = 0;
  nums.forEach((values) => {
    if (values < target) {
      count++;
    }
  })
  return count
}

// Do not edit this line;
module.exports = countOfAllNumbersSmallerThanTarget;