// Question 1
 function GreaterOfTwo (x , y) {
  if (x > y) {
    return x;
  }
  else if (y > x) {
    return y;
  }
  else {
    return "The two are equal.";}
 }

// Question 2
function maxOfThree(x,y,z) {
  return GreaterOfTwo(x, GreaterOfTwo(y,z));
}

// Question 3
function isCharacterAVowel(x) {
  var vowel = ['a', 'e', 'i', 'o', 'u'];
  for (var i=0; i<vowel.length; i++) {
    if (x == vowel[i]) {
      return x + " is a vowel";
    }
  }
  return x + " is not a vowel";
}

    // Question 4
function sumArray(x) {
  for (var i = 0, total =0; i<x.length; i++) {
    total = total + x[i];
  }
  return total;
}


function multiplyArray(x) {
  for (var i = 0, mark = 1; i<x.length; i++) {
    mark = mark * x[i];
  }
  return mark;
}


// Question 5
function reverseString(x){
  var reverse = "";
  for (var i = 1; i <= x.length; i++) {
    reverse = reverse + x.charAt(x.length-i);
  }
  return reverse;
}

// Question 6

function findLGW(words) {
  var long = "";
  for (var i = 1; i <= words.length; i++) {
      if (words[words.length-i].length > long.length) {
          long = words[words.length-i];
      }
  }
  return long;
}

// Question 7
function findLCX(words, chrs){
  var count = 0;
  for (var i = 1; i<= words.length; i++) {
      if (words[words.length-i].length > chrs) {
          count++;
      }
  }
  return count;
}


// Bonus 1
//??????

var back = "General Assembly".revString()
console.log(back)


// Bonus 2
function charactersOccurencesCount() {

}

// Bonus 3
var numberOfArguments = function(){

}
