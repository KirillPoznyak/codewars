// DESCRIPTION

// Your task is to add a new property usersAnswer to every object in the array questions. The value of usersAnswer should be set to null. The solution should work for array of any length.
// The questions array is already defined for you and is not the same as the one in the example.



// SOLUTION

function addNewProperty (questionsArray) {
        for (let i = 0; i < questionsArray.length; i++) {
            questionsArray[i].usersAnswer = null;
        }
        return questionsArray;
}

console.log(addNewProperty(questions));