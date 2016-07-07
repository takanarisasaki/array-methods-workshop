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


/*
//Q3: Filtering truthy values
function filter(inputArray) {
    var filteredArray = inputArray.filter()
    return filteredArray;
}

function filterArray(inputArray, inputFunction) {
    var filteredArray = inputArray.filter(inputFunction);
    return filteredArray;
}

var typeArray = [true, false, null, undefined, "","hello", 0, 1, 10];
console.log(filterArray(typeArray, filter));


*/