
// Write a program that prints the numbers from 1 to 100. But for multiples of five (5, 10, 15, etc.) print "Chicken" instead of the number and for the multiples of seven (7, 14, 21, etc.) print "Monkey". For numbers which are multiples of both five and seven print "ChickenMonkey".


// for (let i = 1; i <= 100; i++) {
//   if (i % 5 === 0)
//   console.log(`${i} chicken`);
//   else if (i % 7 === 0)
//   console.log(`${i} monkey`);
//   else if (i % 35 === 0)
//   console.log(`${i} chickenmonkey`);
//   else
//   (console.log(i))
// }


// write a function that accepts any band name as an argument. The function will increment a global variable by one each time it is invoked, and return that number, and the band name concatenated together.

// let bandNumber = 1

// const takeNumber = function (band) {
// console.log(`${bandNumber}. ${band}`);
// bandNumber++
// }

// const hard = takeNumber("Constant Contact");
// const cure = takeNumber("The Cure");

// const scum = takeNumber("Galactic Scum")
// console.log(scum)  

// const under = takeNumber("Underdogs")
// console.log(under)  


// Your task is to iterate over the array of uncookedFood and invoke the function for each item so that the cookedFood array contains all of the items after they are cooked.

// const hamburger = {
// 	name: 'Hamburger',
// 	type: 'beef',
// 	cooked: false,
// }
// const zucchini = {
// 	name: 'Zucchini',
// 	type: 'vegetable',
// 	cooked: false,
// }
// const chickenBreast = {
// 	name: 'Chicken Breast',
// 	type: 'chicken',
// 	cooked: false,
// }
// const corn = {
// 	name: 'Corn',
// 	type: 'vegetable',
// 	cooked: false,
// }
// const steak = {
// 	name: 'Steak',
// 	type: 'beef',
// 	cooked: false,
// }

// const uncookedFood = [hamburger, zucchini, chickenBreast, corn, steak];

// const cookedFood = [];

// function grill2 (i) {
//   i.cooked = true;
//   cookedFood.push(i);
//   for (var j = 0; j <= uncookedFood.length; j++) {
//     if (uncookedFood[j] === i)
//       uncookedFood.splice(i,1);
//     }
//   }

// grill2(hamburger);


// Practice: Stacking Words

// Create an array that contains the words in the sentence
let sentence = ["The", "walrus", "danced", "through", "the", "trees", "in", "the", "light", "of", "the", "moon"];

/*
    The addExcitement function should be an impure function, and accept
    the array as the sole argument. It should iterate over the array
    and output the words to the browser console.
*/

// function addExcitement(theWordArray) {
//   let buildMeUp = ""   // Each time the for loop executes, you're going to add one more word to this string
//   for (let i = 0; i < theWordArray.length; i++) {
//     buildMeUp += `${theWordArray[i]} `;          // Concatenate the new word onto buildMeUp
//     console.log(buildMeUp);          // Print buildMeUp to the console
//   }
// }

// addExcitement(sentence);

// Practice: Some words are more exciting than others

// function addExcitement(theWordArray, j) {
//   let buildMeUp = ""   // Each time the for loop executes, you're going to add one more word to this string
//   for (let i = 0; i < theWordArray.length; i++) {
//     if (i === 0) {
//       buildMeUp += `${theWordArray[i]} `;      
//       console.log(buildMeUp);
//     } else if (i % 3 == 0) {
//     buildMeUp += `${theWordArray[i]}! `;          
//     console.log(buildMeUp);          
//     }
//     else {
//       buildMeUp += `${theWordArray[i]} `;      
//       console.log(buildMeUp);
//     }
//   }
// }

// Practice: Function Arguments

// function addExcitement(theWordArray, j) {
//   let buildMeUp = ""   // Each time the for loop executes, you're going to add one more word to this string
//   for (let i = 0; i < theWordArray.length; i++) {
//     if (i === 0) {
//       buildMeUp += `${theWordArray[i]} `;      
//       console.log(buildMeUp);
//     } else if (i % 3 == 0) {
//     buildMeUp += `${theWordArray[i]}${j} `;          
//     console.log(buildMeUp);          
//     }
//     else {
//       buildMeUp += `${theWordArray[i]} `;      
//       console.log(buildMeUp);
//     }
//   }
// }

// Challenge: Arrow Functions

let addExcitement = (theWordArray, j) => {
  let buildMeUp = "" ;
  for (let i = 0; i < theWordArray.length; i++) {
    if (i === 0) {
      buildMeUp += `${theWordArray[i]} `;      
      console.log(buildMeUp);
    } else if (i % 3 == 0) {
    buildMeUp += `${theWordArray[i]}${j} `;          
    console.log(buildMeUp);          
    }
    else {
      buildMeUp += `${theWordArray[i]} `;      
      console.log(buildMeUp);
    }
  }
}