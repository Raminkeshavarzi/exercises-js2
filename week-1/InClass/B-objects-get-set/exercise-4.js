/*
    Write code in the space provided so that the expected values output
*/

var dog = {
    name: 'Billy',
    wantsToPlay: false
};

// WRITE CODE HERE
const setNewValue = (obj, val1, val2) => {
    obj.name = val1, 
        obj.wantsToPlay = val2; 
} 
setNewValue(dog, 'Rex', 'true');

//DO NOT MODIFY BELOW
console.log(dog.name);
console.log(dog.wantsToPlay);

// it should output:
// Rex
// true