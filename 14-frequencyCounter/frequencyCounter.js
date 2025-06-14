function frequencyCounter(word) {
  const freq = {};

  for (let i = 0; i < word.length; i++) {
    const letter = word[i];

    if (freq[letter]) {
      freq[letter]++;
    } else {
      freq[letter] = 1;
    }
  }

  return freq;
}

// Do not edit this line;
module.exports = frequencyCounter;