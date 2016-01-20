// Question 1

function maxOfTwoNumbers(x,y) {
 if (x === y) {
  return x;
 }
 else if (x > y) {
  return x;
 }
 else {
  return y;
 }
}

maxOfTwoNumbers(0,1);
maxOfTwoNumbers(1,0);
maxOfTwoNumbers(1,1);



// Question 2

function maxOfThree(x,y,z) {
    if (x >= y && x >= z) {
        return x;
    }
    else if (y >= x && y >= z) {
        return y;
    }
    else if (z >= x && z >= y) {
        return z;
    }
}

maxOfThree(0,0,1);
maxOfThree(0,1,0);
maxOfThree(0,1,1);
maxOfThree(1,0,0);
maxOfThree(1,0,1);
maxOfThree(1,1,0);
maxOfThree(1,1,1);



// Question 3

function isCharacterAVowel(x) {
    if(x === "a" || x === "A" || x === "e" || x === "E" || x === "i" || x === "I" || x === "o" || x === "O" || x === "u" || x === "U") {
      return true;
    }
    else {
      return false;
    }
}

isCharacterAVowel("e");
isCharacterAVowel("n");



// Question 4

function sumArray(array) {
  var total = 0;
  for (i = 0; i < array.length; i++) {
    total = total + array[i];
  }
  return total;
}

sumArray([1,2,3,4]);



// Question 4

function multiplyArray(array) {
    var total = 1;
    for (i = 0; i < array.length; i++) {
       total = total * array[i];
    }
    return total;
}

multiplyArray([1,2,3,4]);



// Question 5

var reverseString = function(string){
    var newString = "";
    for (var i = string.length - 1; i >= 0; i--)  {
        newString = newString + string[i];
    }
    return newString;
};

reverseString("jag testar");



// Question 6

function findLongestWord(array) {
  var longest = "";
  for (var i = 0; i < array.length; i++) {
    if (longest.length < array[i].length) {
      longest = (array[i]);
    }
    else {
      longest = longest;
    }
  }
  return longest.length;
}

findLongestWord(["suzy","jules","amy","teagan","stewart"]);
findLongestWord(["stewart","suzy","jules","amy","teagan"]);
findLongestWord(["suzy","jules","stewart","amy","teagan"]);



// Question 7

function filterLongWords(array,i) {
  var qualifyWords = [];
  i = i;
    for(var j = 0; j < array.length; j++ ) {
      if (array[j].length > i) {
        qualifyWords.push(array[j]);
      }
    }
    return qualifyWords;
}

filterLongWords(["suzy","jules","amy","teagan","stewart"],3);



// Bonus 1
//??????


// Bonus 2
function charactersOccurencesCount(string) {
    for (var i = 0; i < string.length; i++) {
    var split = string[i].split(':');
    console.log(split);
}
//work in progress!!!!
}

// Bonus 3
var numberOfArguments = function(){

}
