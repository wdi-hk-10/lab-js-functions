// Question 1
function maxOfTwoNumbers(x,y) {
  if (x >= y) {
    return x;
  } else {
    return y;
  }
}

// Question 2
function maxOfThree(x,y,z) {
  if (x >= y && x >= z) {
    return x;
  } else if (y > z) {
    return y;
  } else {
    return z;
  }
}

// Question 3
var vowels = ['a','e','i','o','u','A','E','I','O','U'];

function isCharacterAVowel(x) {
    for (i = 0; i < vowels.length; i++) {
        if (x == vowels[i]) {
            return true;
        } else {
            return false;
        }
    }
}

// Question 4
function sumArray(x) {
    return sum = x.reduce(function(p,c) {
       return p + c;
    });
}

// Question 4
function multiplyArray(x) {
    return multiple = x.reduce(function(p,c) {
       return p * c;
    });
}


// Question 5
var reverseString = function (){

};

function reverse(x) {
  reverseString = '';
  for (var i = x.length - 1; i >= 0; i - 1)
    reverseString += x[i];
    return reverseString;
}

// Why does 'i --' in the for loop work, but 'i - 1' doesn't?
// How do I package a function in a variable and call it?


// Question 6
function findLongestWord () {
    var y = [];
    for (var i = 0; i <= x.length - 1; i++)
        y.push(x[i.length]);
        return y;
}

// How do I find the length of a string inside of an array?

// Question 7
function filterLongWords () {

}


// Bonus 1
//??????


// Bonus 2
function charactersOccurencesCount() {

}

// Bonus 3
var numberOfArguments = function(){

}
