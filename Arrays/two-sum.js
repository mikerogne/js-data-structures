/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // Hash table that contains `NUMBER` => `INDEX FOR NUMBER` pairs.
    const previousValues = {};
    for (let i = 0; i < nums.length; i++) {
        const currentValue = nums[i];
        const complement = target - currentValue;

        if (previousValues[complement] !== undefined) {
            return [previousValues[complement], i];
        }

        previousValues[currentValue] = i;
    }
};

console.log(twoSum([2, 7, 11, 15], 9));
