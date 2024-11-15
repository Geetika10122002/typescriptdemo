function add(a:number,b:number,c?:number):number {
       return c? a+b+c:a+b;
}
console.log(add(2,3));
console.log(add(2,3,5));

const sub=(a:number,b:number,c=10):number=>a-b-c;
console.log(sub(3,2));
console.log(sub(2,3,5));

const mul=function(a:number,b:number):number{
      return a*b;
}
console.log(mul(5,4));

function add2(a:number,b:number,...c:number[]):number{
      return a+b+c.reduce((a,b)=>a+b,0);
}
let numbers=[1,2,3,4,5];
console.log(add2(2,3,...[5,6,7]));

function getItems<T>(items:T[]):T[]{
      return new Array<T>().concat(items);
}
let concates=getItems([1,2,3,4,5]);
let concatstring=getItems(["a","b","c","d","e"]);
 

