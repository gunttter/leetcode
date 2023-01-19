function twoSum(nums: number[], target: number): number[] {
  let ans: number[] = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        ans.push(i, j);
        return ans;
      }
    }
  }
  return ans;
}
let a: number[] = [2, 7, 11, 15];
let b = 13;
twoSum(a, b);
