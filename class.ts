import {Login, User} from './interface';
interface Address {
    street:string;
    city:string;
    state:string;
    pin:string;
};
class Employee implements Login{
    #id: number;
    protected name: string;
    address:Address;
    get empId():number{
        return this.#id;
    }
    set empId(id:number){
        this.#id=id;
    }
    static getEmployeeCount():number{
        return 50;
    }
    constructor(id:number,name:string,address:Address){
        this.address=address;
        this.#id=id;
        this.name=name;
    }
    login(): User {
        return {name:'John',id:1,email:""};
    }
    getNameWithAddress():string{
        return `${this.name} stays at ${this.address}`;
    }

}
let jhon=new Employee(1,'Jhon',{
     street:"ABC",
     city:"Bangalore",
     state:"Karnataka",
     pin:"560076"
});
let address=jhon.getNameWithAddress();
console.log(address);
