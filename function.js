// Question 1
function maxOfTwoNumbers (firstNum, secondNum) {
  if (firstNum > secondNum) {
    return firstNum;
  }
  else if (secondNum > firstNum) {
    return secondNum;
  }
  return firstNum;
}

// Question 2
function maxOfThreeNumbers (first, second, third) {
  return maxOfTwoNumbers((maxOfTwoNumbers(first,second)),third);
}

// Question 3
function isCharacterAVowel (letter) {
  if ((letter==="a") || (letter==="e") || (letter==="i") || (letter==="o") || (letter==="u") || (letter==="A") || (letter==="E") || (letter==="I") || (letter==="O") || (letter==="U")) {
    return true;
  }
  else return false;
}

// Question 4
function sumArray (array) {
  var sum = 0;
  for (var i=0; i<array.length; i+=1) {
    sum = sum + array[i];
  }
  return sum;
}
function multiplyArray (array) {
  var product = 1;
  for (var i=0; i<array.length; i+=1) {
    product = product*array[i];
  }
  return product;
}

// Question 5
function reverseString (word) {
  var temp = "";
  for (var i=1; i<=word.length; i+=1) {
    temp = temp + word.charAt(word.length-i);
  }
  return temp;
}

// Question 6
function findLongestWord (words) {
  var answer="";
  for (var i=0; i<words.length; i+=1) {
    if (answer.length < words[i].length) {
      answer = words[i];
    }
  }
  return answer;
}

// Question 7
function filterLongWords (words, i) {
  var answer= [];
  for (var x=0; x<words.length; x+=1) {
    if (words[x].length > i) {
      answer.push(words[x]);
    }
  }
  return answer;
}

BONUS

// Question 1


// Question 2


// Question 3