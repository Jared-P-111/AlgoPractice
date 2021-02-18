'use-strict';

// Given a sequence of integers as an array, determine whether it is possible to obtain a strictly increasing sequence by removing no more than one element from the array.

// Note: sequence a0, a1, ..., an is considered to be a strictly increasing if a0 < a1 < ... < an. Sequence containing only one element is also considered to be strictly increasing.

// Example

//     For sequence = [1, 3, 2, 1], the output should be
//     almostIncreasingSequence(sequence) = false.

//     There is no one element in this array that can be removed in order to get a strictly increasing sequence.

//     For sequence = [1, 3, 2], the output should be
//     almostIncreasingSequence(sequence) = true.

//     You can remove 3 from the array to get the strictly increasing sequence [1, 2]. Alternately, you can remove 2 to get the strictly increasing sequence [1, 3].

const sequence1 = [1, 1, 2, 3, 4, 4]; //False
const sequence2 = [3, 6, 5, 8, 10, 20, 15]; //False
const sequence3 = [1, 3, 2]; //True

function almostIncreasingSequence(sequence) {
  let count = 0;

  for (let i = 0; i < sequence.length; i++) {
    if (sequence[i] <= sequence[i - 1]) {
      count++;
      if (sequence[i] <= sequence[i - 2] && sequence[i + 1] <= sequence[i - 1]) {
        return false;
      }
    }
  }
  return count <= 1;
}

console.log(almostIncreasingSequence(sequence1));
console.log(almostIncreasingSequence(sequence2));
console.log(almostIncreasingSequence(sequence3));
