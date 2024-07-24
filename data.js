/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

var animal = {};
animal.species = 'cat';
animal['name'] = 'Buddy';
animal.noises = [];
console.log(animal);

//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// Initializing noises array
var noises = [];
// Adding noise
noises[0] = 'meow';
// Adding noise
noises.push('hiss');
// Adding noise
noises.unshift('screech');
// Adding noise
noises[noises.length] = 'howl';
// Logging length of noises
console.log(noises.length);
// Logging last element in noises
console.log(noises[noises.lenght - 1]);
// Logging noises array
console.log(noises);

//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
// Assigning 'noises' to noises array

animal['noises'] = noises;
// Adding noise
animal.noises.push('mew');
// Loggin noises array
console.log(animal);

/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 *
 * 2. What are the different ways of accessing elements on arrays?
 *
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */


//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////

// Creating animals array
var animals = [];
// Pushing 'animal' to animal array
animals.push(animal);
// Logging animals array
console.log(animals);

// Initializing duck variable
var duck = { species: 'duck', name: 'Jerome', noises: ['quack', 'honk', 'sneeze', 'woosh'] };

// Pushing duck to animals
animals.push(duck);

// Logging animals array
console.log(animals);

// Creating two more animal object with species, name and noise
var dog = { species: 'dog', name: 'Stilton', noises: ['bark', 'woof'] };
var horse = { species: 'horse', name: 'Ed', noises: ['neigh', 'grunt'] };

// Pushing dog and horse to animals
animals.push(dog);
animals.push(horse);

// Logging animals array
console.log(animals);

// Logging length of animals
console.log(animals.length);

//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////


// I chose an array because

// Initializing friends array
var friends = [];
// Function that takes animals array and returns a random index
function getRandom(animals) {
  return Math.floor(Math.random() * animals.length);
}
// Adding random animal 
var randomIndex = getRandom(animals);
friends.push(animals[randomIndex].name);
// Logging friends
console.log(friends);
// Adding friends to an animal in animals array
animals[0]['friends'] = friends;
// Logging animal
console.log(animals[0]);


/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}