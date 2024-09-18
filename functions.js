/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//const { animals } = require("./data");

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////


function search(animals, string) {
    // looping through animals array
    for (var i = 0; i < animals.length; i++) {
        // checking if
        if (animals[i].name === string) {
            return animals[i];
        }
    }
    return null;
}

//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

 function replace(animals, name, replacement) {
    // looping through the array of animals
    for (let i = 0; i < animals.length; i++) {
      // checking if the current animals name matches the search name
      if (animals[i].name === name) {
        // replacing the  object with the replacement object
        animals[i] = replacement;
        return; 
      }
    }

  }

//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/*
## Step 3 - Remove
 1. Write a function declaration called `remove` with a signature of `remove(animals, name)` that:
   - Takes 2 parameters, an Array of animals, and a name of an animal on which to perform a search.
   - If an animal with that name exists within the `animals` Array, remove it.
 2. Test that it works on the website.
 */

 function remove(animals, name) {
    // looping through animals array
    for (var i = 0; i < animals.length; i++) {
        // checking if name exists in animals array 
        if (animals[i].name === name) {
            // removing 
            animals.splice(i, 1);
            return;
        }
    }
 }


//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/*
## Step 4 - Add
 1. Write a function declaration called `add` with a signature of `add(animals, animal) { //... }` that:
   - Takes 2 parameter, an Array of animals, and an Object representing a new animal to be added.
   - Checks that the animal Object has a `name` property with a length > 0.
   - Checks that the animal Object has a `species` property with a length > 0.
   - Has a **unique** name, meaning no other animals have that name.
   - Adds this new Object to the `animals` Array, **only** if all the other conditions pass.
   - Make sure it works.
*/

function add(animals, animal) {
    // checking if animal obj has a name and species property with length > 0 
    if (animal.name && animal.name.length > 0 && animal.species && animal.species.length > 0) {
      // looping through animals array 
      for (var i = 0; i < animals.length; i++) {
        // if animal name is found
        if (animals[i].name === animal.name) {
          // return
          return;
        }

      }
      // adding new animal to animals array if all other conditions pass
      animals.push(animal);
    }
}
/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}