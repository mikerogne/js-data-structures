"use strict";
function findFirstRecurring(input) {
    const previous = {};
    for (let i = 0; i < input.length; i++) {
        if (previous[input[i]] !== undefined) {
            return input[i];
        }
        previous[input[i]] = input[i];
    }
    return undefined;
}
// Given an array = [2,5,1,2,3,5,1,2,4]:
// It should return 2
console.log(findFirstRecurring([2, 5, 1, 2, 3, 5, 1, 2, 4]));
// Given an array = [2,1,1,2,3,5,1,2,4]:
// It should return 1
console.log(findFirstRecurring([2, 1, 1, 2, 3, 5, 1, 2, 4]));
// Given an array = [2,3,4,5]:
// It should return undefined
console.log(findFirstRecurring([2, 3, 4, 5]));
// Bonus... What if we had this:
// [2,5,5,2,3,5,1,2,4]
// return 5 because the pairs are before 2,2
console.log(findFirstRecurring([2, 5, 5, 2, 3, 5, 1, 2, 4]));
