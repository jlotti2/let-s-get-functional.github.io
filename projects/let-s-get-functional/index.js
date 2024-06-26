// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('underbar');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./let-s-get-functional.github.io/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = function(array) {
    let males = _.filter(array, (customer) => customer.gender === 'male');
    return males.length;
};

var femaleCount = function(array) {
    let females = _.reduce(array, function(acc, current) {
        if (current.gender === 'female') {
            return acc + 1;
        } else {
            return acc;
        }
    }, 0);
    return females;
}

var oldestCustomer = function(array) {
    let oldest = _.reduce(array, function(acc, current){
        if (acc === null || current.age > acc.age) {
            return current;
        } else {
            return acc;
        }
    })
    return oldest.name;
}

var youngestCustomer = function(array) {
    let youngest = _.reduce(array, function(acc, current){
        if (acc === null || current.age < acc.age) {
            return current;
        } else {
            return acc;
        }
    })
    return youngest.name;
}

var averageBalance = function(array) {
    let sum = 0;
  for (let i = 0; i < array.length; i++) {
    // Remove $ and commas, then convert to a number
    let number = parseFloat(array[i].balance.replace(/[\$,]/g, ''));
    sum += number;
  }
  // Calculate average
  let average = sum / array.length;
  return average;
};

var firstLetterCount;

var friendFirstLetterCount;

var friendsCount;

var topThreeTags;

var genderCount;

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
