/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 * 
 * ## Step 1 - Object Creation
 1. [ ] Open up the file data.js.
 2. [ ] Create a variable named `animal` and assign it to an empty object.
 3. [ ] Using **dot notation** give `animal` a **property** named `species` with a value of any animal species.
 4. [ ] Using **bracket notation** give `animal` a **property** called `name` with a value of your animal`s name.
 5. [ ] Using either notation, give `animal` a **property** called `noises` with a value of empty array.
 6. [ ] Print your `animal` Object to the console by adding, `console.log(animal);`,
 7. [ ] Save your work (command-s || ctrl-s), switch back to the browser tab with your website running, and refresh your page to see what `animal` looks like.
 8. [ ] It should be something like: 
~~~JS
{ species: 'duck', name: 'Jennifer', noises: [] }
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// creating a variable named animal and assigning it to an empty object
var animal = {};

// adding species property to animal object using dot notation
animal.species = 'cat';

// adding name property to animal using bracket notation
animal['name'] = 'Buddy';

// creating noises property and assigning it to an empty array
animal.noises = [];

// logging animal object to console
console.log(animal);

//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/*
## Step 2 - Array Creation
 1. [ ] Create a variable named `noises` and assign it to an empty array.
 2. [ ] Using **bracket notation** give `noises` it's first element. A string representing a sound your animal might make.
 3. [ ] Using an array function add another noise to the end of `noises`.
 4. [ ] Go to the array documentation: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array?redirectlocale=en-US
 5. [ ] Look through the functions until you find the one that will place an element at the begining of the array.
 6. [ ] Add an element to `noises` using this function.
 7. [ ] Using **bracket syntax** again, add another element to the end of `noises`. Make sure that the way you do this step would work no matter how many elements `noises` had. In other words, don't hard code the position of the new element.
 8. [ ] `console.log` the length of `noises`
 9. [ ] `console.log` the last element in `noises` again without hard coding the index.
 10. [ ] `console.log` the whole array.
 11. [ ] Does it look right?
 */

 // initializing noises variable and assigning it to an empty array
 var noises = [];

 // adding an element to the noises array using bracket notation
 noises[0] = "meow";

 // using push method to add element to the end of noises array
 noises.push("purr");

 // using unshift method to add element to beginning of array
 noises.unshift("hiss"); 

 // adding an element to the end of noises 
 noises[noises.length] = "growl";

 // logging length of noises array to console
 console.log(noises.length - 1);

 // logging the last element of the noises array without hard coding the index
 console.log(noises[noises.length - 1]);

 // logging noises array to console
 console.log(noises);


//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

/*
## Step 3 - Combining Step 1 and 2
 1. [ ] Using **bracket syntax**, assign the `noises` property on `animal` to our new `noises` array.
 2. [ ] Using any syntax add another noise to the `noises` property on `animal`.
 3. [ ] `console.log` `animal`.
 4. [ ] Does it look right?
 */

 // assigning noises property on animal to noises array
 animal['noises'] = noises;

 // adding another noises to noises property on animal using push method
 animal.noises.push("purrrrr");

 // logging animal
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
/*
## Step 6 - A Collection of Animals
 1. [ ] Create a variable named `animals` and assign it to an empty array.
 2. [ ] `push` our `animal` that we created to `animals`. You should now see your first animal appear on your `index.html` page!
 3. [ ] `console.log` `animals`. What does it look like?
 4. [ ] Create a variable called `duck` and assign it to the data:
  - `{ species: 'duck', name: 'Jerome', noises: ['quack', 'honk', 'sneeze', 'woosh'] }`
 5. [ ] `push` `duck` to `animals`
 6. [ ] `console.log` `animals`. What does it look like?
 7. [ ] Create two more animal objects each with a species, a name, and at least two sounds sounds and add each one of them to `animals.
 8. [ ] `console.log` `animals`, and, `console.log` the length of `animals`. Is everything looking right?
 */

 // initializing animals variable and assigning it to an empty array
 var animals = [];

 // pushing animal to animals
 animals.push(animal);

 // logging animals
 console.log(animals);

 // creating variable called duck and assigning given data
 var duck = {
  species: 'duck',
  name: 'Jerome',
  noises: ['quack', 'honk', 'sneeze', 'woosh']
 };

 // pushing duck to animals array
 animals.push(duck);

 // logging animals
 console.log(animals);

 // creating an animal objects  with a species, name, and two sounds
 var cow = {
  species: 'cow',
  name: 'Bessie',
  noises: ['moo', 'moooo']
 };

 // pushing cow to animals array
 animals.push(cow);

 // creating an animal objects with a species, name, and two sounds
 var dog = {
  species: 'dog',
  name: 'Stilton',
  noises: ['bark', 'woof']
 };

 // pushing dog to animals array
 animals.push(dog);



//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/*
1. [ ] Choose a data structure for this **list** of friends.
 2. [ ] Write a comment in your code that explains why you chose this data structure.
 3. [ ] Create a variable called `friends` and assign it to the data structure that you chose.
 4. [ ] Take a look at the documentation for `Math.random` here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
 5. [ ] Write a function called `getRandom` that takes our `animals` array and returns  a random `index` of the input array, using `Math.random`
 6. [ ] Using a random index from this function that you just created, get a random animal and add its `name` to `friends`.
 7. [ ] `console.log` `friends`.
 8. [ ] Using **bracket notation**, add the `friends` list as a **property** also named `friends` on one of the animals in the `animals` array
 9. [ ] `console.log` your work.
 */

 // i chose an array because it is a list

 // creating friends variable and assigning it to an empty array
 var friends = []

 // creating a func called getRandom that takes in an animals parameter
 function getRandom(animals) {
  // returning a random index of the input array using Math.random
  return Math.floor(Math.random() * animals.length);

 }

  // initializing variable that stores random index
  var randomIndex = getRandom(animals);

  //pushing random animals name to friends array 
  friends.push(animals[randomIndex].name);

  // adding friend's 
  animals[0]['friends'] = friends;

  // logging animals array to console
  console.log(animals);






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