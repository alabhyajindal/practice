function findLongestWordLength(str) {
  const arr = str.split(" ");
  console.log(arr[4].length);
  let count = arr[0].length;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > count) {
      count = arr[i].length;
    }
  }
  return count;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
