let lname : string;
lname="geetika";
let newname=lname.toUpperCase();
console.log(newname);

let age:number;
age=20;
age=21.5;
let dob="25";
let res=parseInt(dob);

let isvalid:boolean=false;
console.log(isvalid);

let emplist:string[];
emplist=["girish","bharath","prithick"];
let numlist:Array<number>;
numlist=[1,2,3,4,5];
let newnum=numlist[5];
let result=numlist.filter((num)=>num>2);
console.log(result);
let num=numlist.find((num)=>num===2);
let emp=emplist.find((emp)=>emp==="bharath");
let sum=numlist.reduce((a,b)=>a+b);
console.log(num);
console.log(emp);
console.log(sum);
// lname=10; 
const enum color {
    red,
    green,
    blue
}
let c:color=color.blue;
// color.blue;
console.log(c);

let swapnum:[number,number];
function swap(num1:number,num2:number) : [number,number]{
    return [num2,num1];
}
swapnum=swap(10,20);
swapnum[0];

let depart:any;
depart="ece";
depart=10;