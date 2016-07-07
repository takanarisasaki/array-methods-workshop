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

