// DESCRIPTION

// Write a function partlist that gives all the ways to divide a list (an array) of at least two elements into two non-empty parts.

// Each two non empty parts will be in a pair (or an array for languages without tuples or a structin C - C: see Examples test Cases - )
// Each part will be in a string
// Elements of a pair must be in the same order as in the original array.


// SOLUTION:


function partlist(arr) {
    const result = [];
    
    // Проходим по массиву от первого до предпоследнего элемента
    for (let i = 1; i < arr.length; i++) {
        let leftPart = arr.slice(0, i).join(" ");
        let rightPart = arr.slice(i).join(" ");
        
        result.push([leftPart, rightPart]);
    }
    
    return result;
}