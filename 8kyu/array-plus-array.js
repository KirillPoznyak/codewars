// DESCRIPTION:
// I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.

// P.S. Each array includes only integer numbers. Output is a number too.


// SOLUTION:

function arrayPlusArray(arr1, arr2) {
    const concatArray = arr1.concat(arr2);
    let totalSum = 0;
    for (let i = 0; i < concatArray.length; i++) {
        totalSum += concatArray[i];
    }
    return totalSum;
}