export interface User{
    name:string;
    age?: number;
    id: number;
    email: string;
}
let {name:userName,email:userEmail} :User={name:'John',id:1,email:""};
// user.name;
// user.email;

interface Employees extends User{
    salary:number;
}
let employee:Employees ={name:"John",id:1,email:"",salary:1000};
export interface Login{
    login():User;
}
let [user1,user2]:User[]=[
    {name:'John',id:1,email:""},
    {name:'John1',id:2,email:""},
    {name:'John2',id:3,email:""},
];
console.log(user1);
console.log(user2);
 