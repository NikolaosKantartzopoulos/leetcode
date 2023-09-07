// Failed

var largestRectangleInHistogram = function (heights) {
  let stack = [];
  let maxArea = heights[0];
  let memorizedArea = heights[0];

  for (let i = 0; i < heights.length; i++) {
    let tempStack = [...stack];
    let curHeight = heights[i];
    let initArea = curHeight;
    let minHeight = curHeight;

    let j = i - 1;
    while (tempStack.length && j >= 0) {
      let tempStackHeight = tempStack.pop();

      let width = i - j + 1;
      if (tempStackHeight < minHeight) minHeight = tempStackHeight;

      let newArea = minHeight * width;

      if (newArea > initArea) initArea = newArea;
      j--;
    }
    if (initArea > maxArea) {
      maxArea = initArea;
    }
    if (heights[i] < stack.at(-1)) {
      stack.pop();
      memorizedArea = (i + 1) * heights[i];
    }
    stack.push(heights[i]);
  }

  return maxArea;
};

// var largestRectangleInHistogram = function (heights) {
//   let stack = [];
//   let maxArea = heights[0];

//   for (let i = 0; i < heights.length; i++) {
//     let tempStack = [...stack];
//     let curHeight = heights[i];
//     let initArea = curHeight;
//     let minHeight = curHeight;

//     let j = i - 1;
//     while (tempStack.length && j >= 0) {
//       let tempStackHeight = tempStack.pop();

//       let width = i - j + 1;
//       if (tempStackHeight < minHeight) minHeight = tempStackHeight;

//       let newArea = minHeight * width;

//       if (newArea > initArea) initArea = newArea;
//       j--;
//     }
//     if (initArea > maxArea) {
//       maxArea = initArea;
//     }
//     stack.push(heights[i]);
//   }

//   return maxArea;
// };

largestRectangleInHistogram([2, 1, 5, 6, 2, 3]);

module.exports = largestRectangleInHistogram;
