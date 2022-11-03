

let myScores = [92, 98, 84, 76, 89, 99, 100];
let yourScores = [82, 98, 94, 88, 92, 100, 100];

let myScoresAverage = getAverage(myScores);
console.log("My Scores Average:" + myScoresAverage);

let yourScoresAverage = getAverage(yourScores);
console.log("Your Scores Average:" + yourScoresAverage);


//This will accept an array of scores, and then return a single value, the average score of the scores in the array.
function getAverage(scores){

    let result; //this should store the result number.
   
    let myScoresLength= myScores.length;
   
    // Compute total of all numbers
    let scoreTotal = 0;
    for(let i =0; i< myScoresLength; i++){
        scoreTotal += myScores[i];
    }

    // Compute average using total

    result = scoreTotal / myScoresLength;
       
    //return the result
    return result;
}

