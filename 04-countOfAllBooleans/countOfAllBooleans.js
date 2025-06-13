function countOfAllBooleans(arr) {
  // Insert code here;
  let count = 0;
  arr.map((values) => {
    if (typeof values === "boolean") {
      count++
    }
    return
  })

  return count
}

// Do not edit this line;
module.exports = countOfAllBooleans;