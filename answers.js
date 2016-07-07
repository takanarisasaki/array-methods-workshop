//Q1: Print positive numbers using forEach
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
return numArray2.filter(isPositive2).forEach(isPositive);