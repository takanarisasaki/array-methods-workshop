//Q1: Print positive numbers using forEach
console.log("Question 1");
function isPositive(num) {
    if (num > 0) {
        console.log(num);
    }
}

function printPositives(numArray) {
    return numArray.forEach(isPositive);
}

var numArray = [1,2,3,-1,4,-9,-10,3,-1,0];
var positiveNumArray = printPositives(numArray);


//Question 2: Positive numbers using filter method
console.log("Question 2");
function isPositive2(num) {
    if (num > 0) {
        return true;
    }
    else {
        return false;
    }
}

function getPositives(inputArrayNum) {
    var filteredPositiveNum = inputArrayNum.filter(isPositive2);
    return filteredPositiveNum;
}

var numArray2 = [2,5,7,-1,-2,5,-2,0];
console.log(getPositives(numArray2));


//Q2B: Printing numbers from filtered array
console.log("Question 2B:");
function posNum(inputNumArray) {
    inputNumArray.filter(isPositive2).forEach(isPositive);
}

posNum(numArray2);



//Q3: Filtering truthy values
function filterArray(inputArray, filteringFunction) {
     return inputArray.filter(filteringFunction);
}


//Q4: Find longest word using reduce function
console.log("Question 4:");

function longestWord(inputString) {
    var arrayOfWords = inputString.split(" ");
    var longestWordOfString = arrayOfWords.reduce(function(initial,currentWord) {
        if (currentWord.length > initial.length) {
            return currentWord; //returns inside reduce in the variable initial
        }
        else {
            return initial;
        }
        
    }, ""); //Inside "" is the longest at the beginning
    
        return longestWordOfString;
}

console.log(longestWord("Hello I'm Takanari Bye"));


//Q5: Find the number of vowels in a String
console.log("Question 5:");
function countVowels(inputString) {
    var splitString = inputString.split("");
    var checkVowels = splitString.reduce(function(numVowels, currentLetter) {
        if (currentLetter === "a" || currentLetter === "e" || 
            currentLetter === "i" || currentLetter === "o" || 
            currentLetter === "u") {
                numVowels += 1;
        } 
        return numVowels;
        
    }, 0);
    return checkVowels;
}

console.log(countVowels("Hello im takanari"));