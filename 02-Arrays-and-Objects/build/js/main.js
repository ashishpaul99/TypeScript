"use strict";
// 1. Arrays
let stringArr = ['one', 'Ashish', 'Hello'];
let guitar = ["yamaha", "cort", 5150];
let mixedData = ["India", 1947, true];
// 1. string array
// stringArr[0]=42; // numbers are not allowed.
// stringArr[0]="Paul"; //correct
// stringArr.push(42);  // Error -> ts didnt put  length of the array. but it accpts strings only
// stringArr.push("hi"); //correct
// 2. guitar array
// guitar array accepts strings and numbers
// guitar[0]=1999; //allows data types of are not locked here. it allows strings and numbers
// guitar[0]="Hello"; // correct -> its accepts srings
// guitar[0]=true //Error -> ti will not allow boolean
guitar[0] = 1980;
guitar.unshift(3, "hello"); // adding string and number at front
console.log(guitar); // [3, 'hello', 1980, 'cort', 5150]
guitar = stringArr; // works guitar array accepts strings
mixedData = stringArr; // works mixedData accepsts strings too
// guitar=mixedData; //error -> it accepts only strings num numbers not boolean. mixedData contains boolean too.
let test = []; // typescript infer as any type.
let bands = []; //specifying the types of elements allowed in this array;
bands[0] = "hello";
bands.push("hi");
console.log(bands); //['hello', 'hi']
// legth of the array and order of the types are not matter to typescript.
// 2. Tulips - In order to need a data structure with locaked length and specific type of elements then tulips are used.
// let mytuple:[string,number,boolean]=["Ashish",25,true];
// let mixedArr=['john',1,false] //it's union type
// mixedArr=mytuple; //mixed accepts string, number, boolean
// mytuple=mixedArr// TypeScript can’t guarantee that mixedArr has exactly those 3 values in that order — so it blocks the assignment.
// adding 4th element to tuple
// mytuple[3]=54;// tuple is fixed size
// mytuple[1]=54;//allowed to place in second position
// 4. Objects
// let myObj:object;
// myObj=[];//assigning array to object
// console.log(typeof myObj); //output: object
// console.log(myObj); //output : []
// myObj=bands; //assigning bands to myObj
// console.log(myObj)//output: ['hello', 'hi']
// myObj={}; //assigning object
// console.log(myObj); //o/p:{}
// const exampleObj={
//     prop1:'Dave',
//     prop2:true,
// };
// prop1 must be string
// prop2 must be boolean
// exampleObj.prop1="Hello";//allowed-it accepts strings only
// exampleObj.prop1=42 // not allowed
// 5. custom types
// type Guitarist={
//    name:string,
//    active:boolean,
//    albums:(string|number)[]
// };
// let evh: Guitarist={
//     name:"Ashish",
//     active:true,
//     albums:["love",777]
// };
// let jp:Guitarist={
//     name:"Paul",
//     active:true,
//     albums:["peace", 444]
// };
// evh=jp;
// making property optional by keeping quetion mark
// type Guitarist={
//    name:string,
//    active?:boolean, //(property) active?: boolean | undefined
//    albums:(string|number)[]
// };
// now we can remove active from object
// a guitar can exist with active proper or not
//  let jp:Guitarist={
//     name:"Paul",
//     albums:["peace", 444]
// };
// greeting guitarist
// const greetGuitarist=(guitarist:Guitarist)=>{
//     return `Hello ${guitarist.name}!`
// }
// console.log(greetGuitarist(jp));//o/p : Hello Paul!
// 6. Interface
// interface Guitarist{
//    name: string,
//    active: boolean,
//    albums: (string|number)[]
// };
// let evh: Guitarist={
//     name:"Ashish",
//     active:true,
//     albums:["love",777]
// };
// let jp:Guitarist={
//     name:"Paul",
//     active:true,
//     albums:["peace", 444]
// };
//6.1 make name optional
// type Guitarist={
//    name?:string,
//    active:boolean,
//    albums:(string|number)[]
// };
// let evh: Guitarist={
//     name:"Ashish",
//     active:true,
//     albums:["love",777]
// };
// let jp:Guitarist={
//     name:"Paul",
//     active:true,
//     albums:["peace", 444]
// };
// if there is name then it return hello guitarist  if ot says just hello
// const greetGuitarist=(guitarist:Guitarist)=>{
//     return `Hello ${guitarist.name?.toLocaleLowerCase}!`
// }
// console.log(greetGuitarist(jp));
// 7. enum
// "unlike most typecript features, enums are not a type level addition to javascript but something added to the language and runtime"
// eg-1:
// enum Grade{
//     U,
//     D,
//     C,
//     B,
//     A,
// }
// console.log(Grade.U); //o/p : 0
// console.log(Grade.D);//o/p : 1
// eg-2:
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 1] = "U";
    Grade[Grade["D"] = 2] = "D";
    Grade[Grade["C"] = 3] = "C";
    Grade[Grade["B"] = 4] = "B";
    Grade[Grade["A"] = 5] = "A";
})(Grade || (Grade = {}));
console.log(Grade.U); //o/p : 1
console.log(Grade.D); //o/p : 2
