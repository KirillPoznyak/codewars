// DESCRIPTION

// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

// Hint: Don't forget to check for bad values like null/undefined


// SOLUTION:

function countSheeps(sheep) {
    let trueSheeps = 0;
    for (let i = 0; i < sheep.length; i++) {
        if (sheep[i]) {
            trueSheeps += 1;
        } else if (sheep[i] === null || sheep[i] === undefined) {
            trueSheeps;
        } else {
            trueSheeps;
        }
    }
    return trueSheeps;
}