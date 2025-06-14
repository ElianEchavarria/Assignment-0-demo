class MySolution {
  constructor() {
    this.flag = false; // this is optional to use;
  }

  binarySearch(nums, target, left = 0, right = nums.length - 1) {
    if (left > right) return false;

    const middle = Math.floor((left + right) / 2);

    if (nums[middle] === target) {
      return true;
    } else if (target < nums[middle]) {
      return this.binarySearch(nums, target, left, middle - 1);
    } else {
      return this.binarySearch(nums, target, middle + 1, right);
    }
  }
}

// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;