// Create a myPetsArray array here
var myPetsArray = ["Dog", "Cat"];
// End of myPetsArray array
// Create a function below this line
function myArrayFunction(myNewPets) {
    var firstPet;
    var lastPet;
    myNewPets.push("Bird");
    myNewPets.push("Fish");
    // myNewPets.concat(["Birds", "Fish"]);

    firstPet = myNewPets[0];
    lastPet = myNewPets[1];

    myNewPets.unshift("Lion");
    
    myNewPets.splice(1,1);
    myNewPets.splice(3,1);
    return myNewPets;
};
console.log(myArrayFunction(myPetsArray));
// End of creating a function
module.exports = myArrayFunction(myPetsArray);