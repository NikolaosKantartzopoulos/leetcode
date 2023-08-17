function sortNums(nums) {
  function mergeSort(inputArr) {
    // Base case
    if (inputArr.length <= 1) return;

    let middleIndex = Math.floor(inputArr.length / 2);

    // Allocate space for left and right parts
    let leftPart = new Array(middleIndex);
    let rightPart = new Array(inputArr.length - middleIndex);

    // Copy to left array
    for (let i = 0; i < middleIndex; i++) {
      leftPart[i] = inputArr[i];
    }

    //Copy to right array
    for (let j = middleIndex; j < inputArr.length; j++) {
      rightPart[j - middleIndex] = inputArr[j];
    }

    // Recursive calls to left and right part, then merge
    mergeSort(leftPart);
    mergeSort(rightPart);
    merge(leftPart, rightPart, inputArr);
  }

  function merge(leftPart, rightPart, inputArr) {
    // Merge the arrays

    let lp = 0;
    let rp = 0;
    let retPointer = 0;

    while (lp < leftPart.length && rp < rightPart.length) {
      if (leftPart[lp] < rightPart[rp]) {
        inputArr[retPointer] = leftPart[lp];
        lp++;
      } else {
        inputArr[retPointer] = rightPart[rp];
        rp++;
      }
      retPointer++;
    }

    // Fill the rest of left part
    while (lp < leftPart.length) {
      inputArr[retPointer] = leftPart[lp];
      lp++;
      retPointer++;
    }

    // Fill the rest of right part
    while (rp < rightPart.length) {
      inputArr[retPointer] = rightPart[rp];
      rp++;
      retPointer++;
    }
  }

  mergeSort(nums);

  return nums;
}

module.exports = sortNums;
