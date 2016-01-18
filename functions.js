// Question 1
function maxOfTwoNumbers(x,y) {
  if (x>=y) {
    return x;
  } else {
    return y;
  }
}

// Question 2
function maxOfThree(x,y,z) {
  if (maxOfTwoNumbers(x,y)<=z) {
    return z;
    } else if (maxOfTwoNumbers(x,z)<=y) {
        return y;
    } else {
    return x;
    }
}

function maxOfThree(x,y,z)
if (x>=y && x>=z) {
  return x;
} else if (y>=x && y>=z) {
  return y;
} else {
  return z;
}

function maxOfThree(x,y,z)
maxOfTwo

// Question 3
function isCharacterAVowel(x) {
  if ((x=="a") || (x=="e") || (x=="i") || (x=="o") || (x=="u")) {
    return "true";
  }
  else{
    return "false";
  }
}

// Question 4
myArray=[1,2,3,4];
function sumArray(array) {
 var a = array.reduce(function(x,y) {
  return x+y;
 }); return a;
}

function multiplyArray(array) {
 var a = array.reduce(function(x,y) {
  return x*y;
 }); return a;
}

// Question 5
var reverseString = function (x){
 var y = [];
 for (var i=0, i <= x.length; i++)
  o.push(s.charAt(x.length-i));
return o.join('')
};


// Question 6
function findLongestWord () {
  var a = array.reduce(function(x,y) {
    return a.length > b. length
  })
}
for ()


// Question 7
function filterLongWords () {

}


// Bonus 1
//??????


// Bonus 2
function charactersOccurencesCount() {

}

