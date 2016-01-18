// a function

//   pass in two variables
//   if first > second
//     return first
//   else if second > first
//     return second
//   else
//     return first
//   end




// Question 1
function maxOfTwoNumbers(x,y) {
  if (x >= y) {
    return x;
  } else if (y >= x) {
    return y;
  } else {
    return x;
  }
}

maxOfTwoNumbers(10, 20);


// Question 2
// Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.
function maxOfThree(x,y,z) {
  if ((x>=y)&&(x>=z)) {
    return x;
  } else if ((y>=x)&&(y>=z)) {
    return y;
  } else {
    return z;
    }
  }
maxOfThree(3,3,2);

// Question 3
// Write a function isCharacterAVowel that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
function isCharacterAVowel(x) {
  if ((x=="a")||(x=="e")||(x=="i")||(x=="o")||(x=="u")) {
    return true;
  } else {
      return false;
    }
}
isCharacterAVowel("a");

// Question 4
// Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.

// function sumArray (x) {
//   return [1,2,3,4].reduce(function(a,b) {
//   return a + b;
//   }, 0);
// }


var x = [1,2,3,4].reduce(function(a,b) {
  return a + b;
}, 0);

}
sumArray

// function sumArray(x) {
//    return sum = x.reduce(function(p,c) {
//       return p + c;
//    });
// }
// Question 4

var multiplyArray = [1,2,3,4].reduce(function(a,b) {
  return a * b;
}, 1);

multiplyArray

// Question 5

// Define a function reverseString that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".
// var reverseString = function (){

// };
var x = "";
function reverseString(f) {
  for (var i = f.length - 1; i >=0; i--)
    x +=  f[i];
  return x;
}

// Question 6
Write a function findLongestWord that takes an array of words and returns the length of the longest one.

function findLongestWord () {

}

var wordArray = [dog, bat, cat, fish];

for (var i = wordArray[0]; i <= wordArray.length - 1; i++)
  if i >

// Question 7
Write a function filterLongWords that takes an array of words and a number i and returns the array of words that are longer than i characters long.
function filterLongWords () {

}

var arrayOfWords = [dog, bat, cat, fish];
var i = 2;

//create a function filterLongWords:
function filterLongWords(i) {

}
// forEach element in the array:
(arrayOfWords).forEach

 // I want to return only elements that
 return (arrayOfWords.length > i)





// Bonus 1
//??????


// Bonus 2
function charactersOccurencesCount() {

}

// Bonus 3
var numberOfArguments = function(){

}
