//1. Type Aliases - this can apply for more than objects
// representing typescripts types with different 
// type Guitarist = {
//    name:string,
//    active:boolean,
//    albums:(string|number)[]
// };


// eg-1:
// type stringNumber=string | number;

// eg-2:
// type stringOrNumberArray=(string | number);
// type Guitarist={
//     name:"Ashish",
//     active:true,
//     albums:stringOrNumberArray;
// }

// userId may be string or number
// type userId=stringNumber; //now type of useId will string or number

// Difference between interface and type
// ->Interface - think them about them more as objects or classes if you will
// ->Type - thik it as alias or nay type of typscipt.

// 2. Literal types - it is used when we have varibale only certain value are expected.
// let myName:'Ashish'; //my is type Ashish
// In this example only possible value of myName is Ashish
// let username: 'harrier'| 'Paul' | 'Ashish';
// username='Ashish'; //username can be harrier, paul, ashish
// -> the variables of literal types accepts only specific values.


// 3. Functions
// ->add function takes two numberws and returns number
// ->const add: (a: number, b: number) => number

// eg-1:
// const add=(a:number, b:number):number=>{
//   return a+b;
// }


// eg-2:function does not have return 
// const logMsg: (message: any) => void 
// -> it is void type. it does not return anything.
// const logMsg=(message:any):void=>{
//     console.log(message); 
// } 

// console.log(add(10,20)); // o/p:30
// logMsg("Ashish"); //o/p : Ashish

// eg-2: Normal function
// let subtraction = function (c:number,d:number):number{
//     return c-d;
// }
// console.log(subtraction(10,5)); // o/p: 5

// eg-3:type allias function
// type mathFunction=(a:number,b:number)=>number;
// let multiply:mathFunction=function (c,d){
//     return c*d;
// }

// console.log(multiply(10,20));// o/p: 200
// logMsg(multiply(10,30)) //o/p: 300

// eg-4: interface for mathfunction
// type mathFunction=(a:number,b:number)=>number;
// interface mathFunction {
//      (a:number,b:number):number
// }
// let multiply:mathFunction=function (c,d){
//   return c*d;
// }

// console.log(multiply(10,4)) // o/p : 40

// 4. optional parameters
// -> we need to put type guard for optional parameter
// -> if there is optinal parameter it should  be last in the 
// eg-1:
// ->if type c is not equal to undefine then it returns a+b+c
// ->if type c is undefined it returns a+b
// const addAll = (a:number,b:number, c?:number)=>{
//     if(typeof c !== 'undefined'){
//         return a + b + c
//     }
//     return a+b
// }


// console.log(addAll(10,20)); //o/p:30
// console.log(addAll(10,20,30)); //o/p:60

// eg-2: 
// const sumAll =(a:number, b:number, c:number=2):number=>{
//      return a+b+c;
// }

// console.log(sumAll(10,20));//o/p:32

// eg-3:default parameter value
// ->giving a as default prameter
// ->In this case we have to explicitly say a undefined.
// ->Typescript doesnt like it because if number is given it will be assigned to first variable.
// ->In TypeScript, type aliases are for defining types—not for assigning default values.
// ->Default values are provided directly in function parameters, not in type aliases.
// ->Default values cannot be assigned using type aliases; they are set in function parameters directly.
// const sumAll =(a:number=10, b:number, c:number=2):number=>{
//      return a+b+c;
// }

// console.log(sumAll(undefined,3)); //o/p:10+3+2

// 5. Rest Parameters -> rest of the parameter
// ->rest operatot is used
// ->spead operator

// eg-1:
// const total = (...nums:number[]):number=>{
//     return nums.reduce((prev,curr)=>prev+curr);
// }
// console.log(total(10,20,30,40));//o/p:100

// eg-2: a is the number 
// const total = (a:number,...nums:number[]):number=>{
//     console.log(a);
//     return a+nums.reduce((prev,curr)=>prev+curr);
// }

// console.log(total(1,3,4));//o/p:100

// 5. Never type
// eg-1:
// const createError = (errMsg:string): never =>{
//     throw new Error(errMsg);
// }

// console.log(createError("throws error"))

// eg-2:
//-> it will also be a never type from function if that function has infinite and endless loop.
// const infinite=()=>{
//     let i:number=1;
//     while(true){
//         i++;
//         if(i>100) break;
//     };
// };

// eg-3:custom type card
// const isNumber=(value:any):boolean=>{
//    return typeof value==='number'?true:false;
// } 

// eg-4: use of never type
// const createError = (errMsg:string): never =>{
//     throw new Error(errMsg);
// }

// const numberOfString= (value:string | number):string=>{
//    if(typeof value==='string') return 'string'
//    if(typeof value==='number') return 'number'
//    return createError('This should never happen!')
// }

// console.log(numberOfString("hello")); //o/p :string
// console.log(numberOfString(50)); //o/p:number


const addAll=(...nums:number[]):number=>{
    return nums.reduce((prev,curr)=>prev+curr)
}

console.log(addAll(10,30));