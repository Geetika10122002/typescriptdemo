"use strict";
let lname;
lname = "geetika";
let newname = lname.toUpperCase();
console.log(newname);
let age;
age = 20;
age = 21.5;
let dob = "25";
let res = parseInt(dob);
let isvalid = false;
console.log(isvalid);
let emplist;
emplist = ["girish", "bharath", "prithick"];
let numlist;
numlist = [1, 2, 3, 4, 5];
let newnum = numlist[5];
let result = numlist.filter((num) => num > 2);
console.log(result);
let num = numlist.find((num) => num === 2);
let emp = emplist.find((emp) => emp === "bharath");
let sum = numlist.reduce((a, b) => a + b);
console.log(num);
console.log(emp);
console.log(sum);
let c = 2 /* color.blue */;
// color.blue;
console.log(c);
let swapnum;
function swap(num1, num2) {
    return [num2, num1];
}
swapnum = swap(10, 20);
swapnum[0];
let depart;
depart = "ece";
depart = 10;
