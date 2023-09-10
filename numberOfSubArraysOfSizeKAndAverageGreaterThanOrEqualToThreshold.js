// Time: O(n) - Space: O(1)

var numberOfSubArraysOfSizeKAndAverageGreaterThanOrEqualToThreshold =
  function (arr, k, threshold) {
    let cnt = 0;
    let windowSize = 0;
    let curSum = 0;

    for (let i = 0; i <= arr.length; i++) {
      if (windowSize === k) {
        if (curSum / k >= threshold) cnt++;
        curSum -= arr[i - k];
        windowSize--;
      }
      curSum += arr[i];
      windowSize++;
    }

    return cnt;
  };

numberOfSubArraysOfSizeKAndAverageGreaterThanOrEqualToThreshold(
  [2, 2, 2, 2, 5, 5, 5, 8],
  3,
  4
);

module.exports =
  numberOfSubArraysOfSizeKAndAverageGreaterThanOrEqualToThreshold;

// O (n^2)

// var numberOfSubArraysOfSizeKAndAverageGreaterThanOrEqualToThreshold =
//   function (arr, k, threshold) {
//     let l = 0;
//     let r = 0;
//     let cnt = 0;

//     let curMap = new Map();

//     function getAvg() {
//       return (
//         [...curMap.entries()].reduce(
//           (acc, [key, value]) => acc + key * value,
//           0
//         ) / k
//       );
//     }

//     while (r < k) {
//       if (curMap.has(arr[r])) {
//         curMap.set(arr[r], curMap.get(arr[r]) + 1);
//       } else curMap.set(arr[r], 1);
//       r++;
//     }

//     while (r <= arr.length) {
//       let avg = getAvg();
//       if (avg >= threshold) {
//         cnt++;
//       }

//       if (curMap.has(arr[l])) {
//         curMap.set(arr[l], curMap.get(arr[l]) - 1);
//       }

//       if (curMap.has(arr[r])) {
//         curMap.set(arr[r], curMap.get(arr[r]) + 1);
//       } else {
//         curMap.set(arr[r], 1);
//       }
//       l++;
//       r++;
//     }

//     return cnt;
//   };
