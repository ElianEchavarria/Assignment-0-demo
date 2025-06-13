function titleCaseEdit(title) {
  // Insert code here;
  return title.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toUpperCase()
  )
    .join(' ');
}

// Do not edit this line;
module.exports = titleCaseEdit;