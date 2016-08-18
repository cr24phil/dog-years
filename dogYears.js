// Dog Years Project

// Create a variable named userAge, and set it equal to a prompt(),
// which asks how old they are. The answer inside this prompt will
// be assigned to the userAge variable.

var userAge = prompt("How old are you in human years?");

// The calculation for dog years is: the first two human years of a
// dog's life count as 10.5 dog years each; each human year following
// counts as 4 dog years.

// Let's start with the first part. Take 2 years, and multiply it by 10.5.
// Store this in a variable called firstYears.

var firstYears = 2 * 10.5;

// Now for the second calculation. Since we already accounted for the first
// two years, take your age variable, and subtract 2 from it. Then multiply
// it by 4. Store this in a variable named laterYears.

var laterYears = (userAge - 2) * 4;

// Add firstYears and laterYears together, and store that in a variable named
// userAgeInDogYears.

var userAgeInDogYears = firstYears + laterYears;

// Write a console.log() statement that will display their age in dog years.

console.log("You are " + userAgeInDogYears + " years old in dog years.");
