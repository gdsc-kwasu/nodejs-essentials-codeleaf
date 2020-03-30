/* eslint-disable no-plusplus */
/**
 * Given an array of integers and an integer n, find all occurrences of n in the given array and return
 * another array containing all the index positions of n in the given array.If n is not in the given array, return an empty
 * array []. Assume that n and all values in the given array will always be integers.
 */

const testOccurrence = (arr, value) => {
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value) newArr.push(i);
        else newArr;
    }
    return newArr;
};


// eslint-disable-next-line no-console
console.log(testOccurrence([6, 9, 3, 4, 3, 82, 11, 3], 3)) // > [2, 4, 7]
