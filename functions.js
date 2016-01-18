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
  if (maxOfTwoNumbers(x,y) <= z) {
     return z;
    } else if (maxOfTwoNumbers(x,z) <= y) {
      return y;
    } else {
      return x;
    }
}

// Question 3
function isCharacterAVowel(x) {
  if ((x == "a") || (x == "e") || (x == "i") || (x == "o") || (x == "u")) {
    return console.log("TRUE")
  } else {
    return console.log("I want a goddamn Vowel *****.")
  }
}

isCharacterAVowel("x")

// Question 4
var sum = [1, 2, 3, 4, 5].reduce(sumArray);

function sumArray(a, b) {
  return a + b;
}

console.log(sum);

// Question 4
var multi = [1, 2, 3, 4, 5].reduce(multiplyArray);

function multiplyArray(a, b) {
  return a * b;
}

console.log(multi);


// Question 5
var reverseString = function (x){
  return x.split('').reverse().join('');
};

reverseString("!namtaB potS")

// Question 6
function findLongestWord(string) {
    var str = string.split(" ");
    var longest = 0;
    var word = null;
    for (var i = 0; i < str.length; i++) {
        if (longest < str[i].length) {
            longest = str[i].length;
            word = str[i];
        }
    }
    return word;
}

findLongestWord("Hello, My name is Daryl. I like pancakes with maple syrup and Chocolate Ice-Cream")

// Question 7

function filterLongWords (){

}

filderLongWords("Hello, My name is Daryl. I like pancakes with maple syrup and Chocolate Ice-Cream")

// Bonus 1
//??????


// Bonus 2
function charactersOccurencesCount() {

}

