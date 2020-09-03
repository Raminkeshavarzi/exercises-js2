/*
Given the following house - follow the instructions below.

Make sure you run the file after and it outputs the correct results.
*/

let house = {
  address: "1 Kinning Park",
  previousOwners: ["Claire M.", "John A."],
  currentOwner: {
    firstName: "Margaret",
    lastName: "Conway",
  },
};

/*
  DO NOT EDIT ANYTHING ABOVE THIS LINE

  WRITE YOUR CODE BELOW
*/
const changeAdd = (obj, val) => obj.address = val;
changeAdd(house, '51 Berkley Road');

const changeOwner = (obj, arr) => obj.previousOwners = arr;
changeOwner(house, ["Brian M.", "Fiona S."]);

const changeLastName = (obj, val) => obj.currentOwner.lastName = val;
changeLastName(house, 'Montgomery')

// changeLastName(house);
// - change the last name of the current owner of "house" to "Montgomery"

/*
  DO NOT EDIT ANYTHING BELOW THIS LINE
*/

console.log(
  `Expected result: 51 Berkley Road. Actual result: ${house.address}`
);
console.log(
  `Expected result: Brian M., Fiona S. Actual result: ${house.previousOwners.toString()}`
);
console.log(
  `Expected result: Montgomery. Actual result: ${house.currentOwner.lastName}`
);