function findSecondSmallest(arr) {
  if (!Array.isArray(arr) || arr.length < 2) {
    throw new Error("Input should be an array with at least two elements.");
  }

  let smallest = Infinity;
  let secondSmallest = Infinity;

  for (let num of arr) {
    if (num < smallest) {
      secondSmallest = smallest;
      smallest = num;
    } else if (num < secondSmallest && num !== smallest) {
      secondSmallest = num;
    }
  }

  if (secondSmallest === Infinity) {
    throw new Error("There is no second smallest element in the array.");
  }

  return secondSmallest;
}

// Test cases
console.log(findSecondSmallest([3, 1, 4, 1, 5, 9, 2, 6, 5]));
console.log(findSecondSmallest([1, 1, 1, 1, 1]));
