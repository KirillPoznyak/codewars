// DESCRIPTION:
// Write a program to determine if a string contains only unique characters. Return true if it does and false otherwise.

// The string may contain any of the 128 ASCII characters. Characters are case-sensitive, e.g. 'a' and 'A' are considered different characters.


// SOLUTION:

function hasUniqueChars(str){
    const strArray = str.split('');
    let uniqueCharsArray = [];
    for (let i = 0; i < strArray.length; i++) {
        if (uniqueCharsArray.includes(strArray[i])) {
            return false;
        }
        uniqueCharsArray.push(strArray[i]);
    }
    return true;
}