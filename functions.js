// Question 1
function maxOfTwoNumbers(a,b) {
  if (a >= b) {
    return a;
  } else {
    return b;
  }
}

// Question 2
function maxOfThree(a,b,c) {
  if (a>=b && a>=c) {
    return a;
  } else if (b>=a && b>=c) {
    return b;
  } else {
    return c;
  }
}

// Question 3
function isCharacterAVowel(character) {
  if (character=='a'||character=='o'||character=='e'||character=='i'||character=='u') {
    return true;
  } else {
    return false;
  }
}

// Question 4
function sumArray(array) {
 var total = array.reduce(function(a,b){
  return a+b;
 });
 return total;
}

// Question 4
function multiplyArray(array) {
  var total = array.reduce(function(a,b){
    return a*b;
  });
  return total;
}

// Question 5
var reverseString = function (x){
 return x.split('').reverse().join('');
};

reverseString("racecaR")

// Question 6
function findLongestWord (string) {
  var stringArray = string.split(' ');
  var longestCount = 0;
  for (var i = 0; i < stringArray.length; i++) {
    if (stringArray[i].length > longestCount) {
      longestCount = stringArray[i].length;
    }
  }
  return longestCount;
}

// Question 7
var x = ['hello','my','name','is','batman'];

function filterLongWords (array, i) {
  var p = [];
  var k = [];
  for (var j = 0; j < array.length; j++) {
    p.push(array[j].split(''));
  }
  for (var j = 0; j < array.length; j++) {
    if (p[j].length>=i) {
        k.push(p[j])
    }
  }
  for (var j = 0; j < k.length; j++){
      k[j].join('')
  }
  return k;
}


filterLongWords(x, 4)

// Bonus 1
//??????


// Bonus 2
function charactersOccurencesCount() {

}

// Bonus 3
var numberOfArguments = function(){

}
