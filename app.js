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

// function confirmEnding(str, target) {
//   const len = -target.length;
//   let modStr = str.slice(0, len);
//   modStr += target;
//   return modStr === str;
// }

// confirmEnding("Bastian", "n");

// function repeatStringNumTimes(str, num) {
//   let strArr = []
//   for (let i = 0; i < num; i++) {
//     strArr.push(str)
//   }
//   return strArr.join("")
// }

// repeatStringNumTimes("abc", 3);

// function truncateString(str, num) {
//   if (num < str.length) {
//     return str.slice(0, num) + "...";
//   } else {
//     return str;
//   }
// }

// truncateString(
//   "A-tisket a-tasket A green and yellow basket",
//   "A-tisket a-tasket A green and yellow basket".length
// );

// function findElement(arr, func) {
//   let num = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (func(arr[i])) {
//       return arr[i]
//     }
//   }
// }

// findElement([1, 2, 3, 4], num => num % 2 === 0);

// function booWho(bool) {
//   let result = true;
//   bool === true || bool === false ? (result = true) : (result = false);
//   return result;
// }

// booWho(null);

// function titleCase(str) {
//   let modStr = [...str];
//   // changing all characters to lowercase
//   for (let i = 0; i < modStr.length; i++) {
//     modStr[i] = modStr[i].toLowerCase();
//   }
//   modStr[0] = modStr[0].toUpperCase();
//   // modStr = modStr.join("")
//   let spaces = [];
//   for (let i = 0; i < modStr.length; i++) {
//     if (modStr[i] === " ") {
//       spaces.push(i);
//     }
//   }

//   for (let space of spaces) {
//     modStr[space + 1] = modStr[space + 1].toUpperCase();
//   }

//   return modStr.join("");
// }

// titleCase("sHoRt AnD sToUt");

function frankenSplice(arr1, arr2, n) {
  let modArr = [...arr2];
  modArr.splice(n, 0, ...arr1);

  return modArr;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);
