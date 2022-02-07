function sumFor(nums) {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  return sum;
}

function sumWhile(nums) {
  let sum = 0;
  let i = 0;
  while (i < nums.length) {
    sum += nums[i];
    i++;
  }
  return sum;
}

function sumRecursion(nums, n) {
  if (n === 1) {
    return nums[n - 1];
  }
  return nums[n - 1] + sumRecursion(nums, n - 1);
}

function sumTheSimpleWay(nums) {
  return _.reduce(nums, function (num, memo) { return num + memo; }, 0);
}

const myList = [1, 2, 3, 4, 5];
console.log(sumFor(myList));
console.log(sumWhile(myList));
console.log(sumRecursion(myList, myList.length));
console.log(sumTheSimpleWay(myList));
