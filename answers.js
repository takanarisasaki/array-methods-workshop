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


//Q6: Find highest and lowerest number using reduce function and store them in an object
console.log("Question 6");
function highLow(inputArrayNum) {
    var highestAndLowestNum = inputArrayNum.reduce(function(initialNumObj, num) {
        if (num > initialNumObj.highestNum) {
            initialNumObj.highestNum = num;
        }
        if (num < initialNumObj.lowestNum) {
            initialNumObj.lowestNum = num;
        }
        return initialNumObj;
    },{highestNum: -Infinity, lowestNum: Infinity});
    
    return highestAndLowestNum;
}


console.log(highLow([1, -10, 20, 40, 5]));


//Q7: Finding Highest/Lowest and Second Highest/Lowest using reduce function
console.log("Question 7:");

function highLowTwo(inputArrayNum) {
    var twoHighestLowestNum = inputArrayNum.reduce(function(initialNumObj, currentNum) {
        if (currentNum > initialNumObj.highest) {
            initialNumObj.secondHighest = initialNumObj.highest;
            initialNumObj.highest = currentNum;
        }
        if (currentNum > initialNumObj.secondHighest && currentNum < initialNumObj.highest) {
            initialNumObj.secondHighest = currentNum;
        }
        if (currentNum < initialNumObj.lowest) {
            initialNumObj.secondLowest = initialNumObj.lowest;
            initialNumObj.lowest = currentNum;
        }
        if (currentNum < initialNumObj.secondLowest && currentNum > initialNumObj.lowest) {
            initialNumObj.secondLowest = currentNum;
        }
        return initialNumObj;
    }, {
        highest: -Infinity, 
        secondHighest: -Infinity, 
        lowest: Infinity, 
        secondLowest: Infinity
        
    });
    return twoHighestLowestNum;
}

console.log(highLowTwo([1, -10, 20, 40, 5]));


//Question 8: 
console.log("Question 8:");
function countChars(inputString) {
    var arrayOfLetter = inputString.split("");
    var numEachLetter = arrayOfLetter.reduce(function(objLetterNum, currentLetter) {
        if (objLetterNum[currentLetter]) {
            objLetterNum[currentLetter] += 1;
        }
        else {
            objLetterNum[currentLetter] = 1;
        }
        return objLetterNum;
        
    }, {});
    
    return numEachLetter;
}

console.log(countChars("hello world"));

/*
var x = {};
var name = 'hello'
    If the property name does not exist in the object x, it creates name with its value
x[name] = name;
console.log(x);
*/

//Question 9: Object that contains ID objects
console.log("Question 9:");

function peopleById(inputArrayOfPeople) {
    var idObject = inputArrayOfPeople.reduce(function(objectOfPeople, currentObject) {
        objectOfPeople[currentObject.id] = {

        "firstName": currentObject.firstName,
        "lastName": currentObject.lastName,
        "email": currentObject.email
        }
        return objectOfPeople;
    }, {});
    return idObject;
}

var identity = [
  {
    "id": "KeXoYg92is",
    "firstName": "John",
    "lastName": "Smith",
    "email": "john@smith.com"
  },
  {
    "id": "NkALmSWtUp",
    "firstName": "Donald",
    "lastName": "Duck",
    "email": "don@disney.com"
  },
  {
    "id": "m7LPbJYSUg",
    "firstName": "John",
    "lastName": "Vader",
    "email": "vader@darkside.com"
  }
];

console.log(peopleById(identity));


