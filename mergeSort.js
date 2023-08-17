function sortNums(nums) {
  function merge(inputArr) {
    // divide array in two parts
    let leftPart = new Array();
    let rightPart = new Array();

    let middleIndex = Math.floor(inputArr.length / 2);

    for (let i = 0; i <= middleIndex; i++) {
      leftPart[i] = inputArr[i];
    }

    for (let j = middleIndex + 1; j < inputArr.length; j++) {
      rightPart[j - middleIndex - 1] = inputArr[j];
    }

    //merge the arrays

    let lp = 0;
    let rp = 0;

    let retArr = [];
    let retPointer = 0;

    while (lp < leftPart.length || rp < rightPart.length) {
      if (rightPart[rp] == undefined) {
        retArr = [...retArr, ...leftPart.slice(lp, leftPart.length)];
        break;
      }
      if (leftPart[lp] == undefined) {
        retArr.concat(rightPart.slice(rp, rightPart.length));
        break;
      }
      if (leftPart[lp] < rightPart[rp]) {
        retArr[retPointer] = leftPart[lp];
        lp++;
      } else {
        retArr[retPointer] = rightPart[rp];
        rp++;
      }
      retPointer++;
    }
  }

  console.log(retArr);
}

sortNums([1, 5, 6, 4, 3, 2, 0]);

module.exports = mergeSort;
