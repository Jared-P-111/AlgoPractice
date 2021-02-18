'use-strict';

//Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.

const inputArray = [1, 2, 3, 0];

function adjacentElementsProduct(inputArray) {
  let currentHighest = inputArray[0] * inputArray[1];
  let currentProduct = 0;
  for (let i = 0; i < inputArray.length; i++) {
    currentProduct = inputArray[i] * inputArray[i + 1];
    if (currentProduct > currentHighest) {
      currentHighest = currentProduct;
    }
  }
  return currentHighest;
}

function adjacentElementsProduct2(arr) {
  return Math.max(...arr.slice(1).map((x, i) => [x * arr[i]]));
}

console.log(adjacentElementsProduct(inputArray));
console.log(adjacentElementsProduct2(inputArray));
