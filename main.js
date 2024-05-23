// Simple Arrow Function
var myFunc = function () {
    console.log("hello my arrow function");
};
myFunc();
// STEP 2 simple Arrow function
var arrowFunction = function () {
    var total = 2 + 2;
    return total;
};
var result = arrowFunction();
console.log("result:", result);
// Step 3  simple Arrow function  Direct return 
var newFun1 = function () { return 5 * 5; };
var answer = newFun1();
console.log("Answer:", answer);
