function countOfAllBooleansAndStrings(arr) {
  // Insert code here;
  let count = 0;
  arr.forEach((values) => {
    if (typeof values === "boolean" || typeof values === "string") {
      count++;
    }
  });
  return count;
}

// Do not edit this line;
module.exports = countOfAllBooleansAndStrings;
