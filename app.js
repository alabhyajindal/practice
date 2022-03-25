// function findLongestWordLength(str) {
//   const arr = str.split(" ");
//   console.log(arr[4].length);
//   let count = arr[0].length;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].length > count) {
//       count = arr[i].length;
//     }
//   }
//   return count;
// }

// findLongestWordLength("The quick brown fox jumped over the lazy dog");

// function largestOfFour(arr) {
//   const nums = [];
//   let largest = 0;
//   // First loop to iterate over the arrays
//   for (let i = 0; i < arr.length; i++) {
//     // Second loop to iterate over the sub arrays
//     largest = arr[i][0];
//     for (let j = 0; j < arr[i].length; j++) {
//       if (arr[i][j] > largest) {
//         largest = arr[i][j];
//       }
//     }
//     nums.push(largest);
//   }
//   return nums;
// }

// largestOfFour([
//   [4, 5, 1, 3],
//   [13, 27, 18, 26],
//   [32, 35, 37, 39],
//   [1000, 1001, 857, 1],
// ]);

function confirmEnding(str, target) {
  const len = -target.length;
  let modStr = str.slice(0, len);
  modStr += target;
  return modStr === str;
}

confirmEnding("Bastian", "n");
