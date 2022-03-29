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

// function frankenSplice(arr1, arr2, n) {
//   let modArr = [...arr2];
//   modArr.splice(n, 0, ...arr1);

//   return modArr;
// }

// frankenSplice([1, 2, 3], [4, 5, 6], 1);

// function bouncer(arr) {
//   let trueArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     Boolean(arr[i]) ? trueArr.push(arr[i]) : null;
//   }
//   return trueArr;
// }

// bouncer([7, "ate", "", false, 9]);

// function getIndexToIns(arr, num) {
//   let sortArr = [...arr];
//   sortArr.push(num);
//   sortArr = sortArr.sort((a, b) => {
//     return a - b;
//   });

//   return sortArr.indexOf(num);
// }

// getIndexToIns([2, 5, 10], 15);

function mutation(arr) {
  // Making a copy of the array and using it for internal operations
  let modArr = [...arr];
  // Looping over the array and making each array item lowecase
  for (let i = 0; i < modArr.length; i++) {
    modArr[i] = modArr[i].toLowerCase();
  }

  // Declaring a global count variable
  let count = 0;
  // Looping over the array. Appending 1 to count if the alphabet in arr[1] is present in arr[0]
  for (let i = 0; i < modArr[1].length; i++) {
    for (let j = 0; j < modArr[0].length; j++) {
      if (modArr[1][i] === modArr[0][j]) {
        count++;
        break;
      }
    }
  }

  // If count is equal to the length of arr[1] then it means that all the alphabets of arr[1] are present in arr[0]. Therefore we return true, in this case

  return count === modArr[1].length;
}

mutation(["floor", "for"]);
