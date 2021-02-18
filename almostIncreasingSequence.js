'use-strict';
const sequence3 = [1, 3, 2];
const sequence1 = [1, 1, 2, 3, 4, 4];
const sequence2 = [3, 6, 5, 8, 10, 20, 15];

function almostIncreasingSequence(sequence) {
  let lowerNumber = 0;
  let maxChar = sequence[0];
  for (let i = 0; i < sequence.length; i++) {
    if (sequence[i] > maxChar) {
      maxChar = sequence[i];
    } else {
      lowerNumber++;
    }
    console.log(lowerNumber);
    if (lowerNumber >= 2 && sequence.length <= 3) {
      return false;
    }
  }
  return true;
}

console.log(almostIncreasingSequence(sequence3));
