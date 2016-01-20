// Question 1
function maxOfTwo(x, y) {
  if (x > y){
    return x;
  } else if (x < y) {
    return y;
  } else {
    return "same";
  }
}

// Question 2
function maxOfThree(x, y, z) {
  if (x > (y || z)) {
    return x;
  } else if (y > z) {
    return y;
  } else {
    return z;
  }
}

OR

function maxOfThree2(x, y, z) {
  return maxOfTwo(x, maxOfTwo(y, z));
}

// Question 3
function isCharacterAVowel(vwl) {
  var vowels = ['a', 'e,' 'i', 'o', 'u'];
  var vowelCheck = false;

  for (var i = 0; i < vowels.length; i++) {
    if (vwl == vowels[i]) {
      vowelCheck = true;
    }
  }
  console.log(vowelCheck)
}

// Question 4
function sumArray(arr) {
  var array = [4, 2, 1, 9, 7];
  var sum = 0;
  for(var i = 0; i<array.length; i++) {
    sum=sum+array[i];
  }
  comsole.log(sum);
}


// Question 4
function multiplyArray(arr) {
  var array = [4, 2, 1, 9, 7];
  var sum = 1;
  for(var i = 0; i<array.length; i++) {
    sum=sum*array[i];
  }
  console.log(sum);
}


// Question 5
function reverseString(str){
  var a = [];
    for (var i = str.length-1;  i>=0; i--) {
        a.push(str[i]);
    }
    return a;
}


// Question 6
function findLongestWord (z) {
  var c = 0;
  for (var i = 0; i < z.length; i++) {
      if (z[i].length > c) {
          c = z[i].length;
      }
  }
  console.log(c);
}


// Question 7
function filterLongWords (arg, i) {
  var result = [];
  for (var o = 0, o < arg.length - 1; o++) {
    if (arg[o].length>i) {
      result.push(arg[o]);
    }
  }
  console.log(result);
}


// Bonus 1
//??????


// Bonus 2
function charactersOccurencesCount(gaString) {
  var letters = {};
  // If string "General Assembly"
  for (i = 0; i < gaString.length; i++) {
    letters[string[i]] += 1;
  }
  console.log(letters);
}

// Bonus 3
var numberOfArguments = function(){

}
