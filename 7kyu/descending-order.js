// DESCRIPTION:
// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.


// SOLUTION:

function descendingOrder(n){
    let nToString = String(n);
    let array = nToString.split('');
    array = array.sort();
    array = array.reverse();
    array = array.join('');
    return +array;
}


function descendingOrder(n){
    return parseInt(String(n).split('').sort().reverse().join(''))
}