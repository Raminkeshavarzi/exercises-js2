/*
    Console.log the values of each property of "kitten"
*/

var kitten = {
    ageMonths: 3,
    isFemale: true,
    furColour: "brown"
};

// YOUR CODE HERE
const logKitten = obj => (`the kitten age is ${obj['ageMonths']}, And she's ${obj['isFemale'] === true ? 'female' : 'male'}, her color is ${obj['furColour']}.`);

console.log(logKitten(kitten))