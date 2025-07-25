"use strict";
// this function onlly works with string type
// const stringEcho=(arg:string):string => arg
// console.log(stringEcho("hello")); //o/p: hello
// eg-1: genric function
// <T> -> type paremeter or type variable
// const echo=<T>(args:T):T=>args;
// console.log(echo<number>(25));//o/p:25
// eg-2: checking is it object or not
// if type of arg is object and if it not an array and arg is null then it returns true.
// const isObj=<T>(arg:T):boolean=>{
//     return (typeof arg==='object' && !Array.isArray(arg) && arg!==null)
// }
// console.log(isObj(["Ashish","Paul"])); //o/p:false
// console.log(isObj("string")); //o/p:false
// console.log(isObj({name:"Ashish",cgpa:9})) //o/p:true
// console.log(isObj(null)); //o/p:false
// eg-3: function returning logic
// const isObj=<T>(arg:T):boolean=>{
//     return (typeof arg==='object' && !Array.isArray(arg) && arg!==null)
// }
// const isTrue=<T>(arg:T):{arg:T, is:boolean}=>{
//     if(Array.isArray(arg) && !arg.length){
//         return {arg, is:false}
//     }
//     if(isObj(arg) && !Object.keys(arg as keyof T).length){
//         return {arg, is:false}
//     }
//     return {arg, is: !!arg} // for strings, numbers and boolean
// }
// console.log(isTrue(false))
// console.log(isTrue(0))
// console.log(isTrue(true))
// console.log(isTrue(1))
// console.log(isTrue('Dave'))
// console.log(isTrue(''))
// console.log(isTrue(null))
// console.log(isTrue(undefined))
// console.log(isTrue({})) // modified
// console.log(isTrue({ name: 'Dave' }))
// console.log(isTrue([])) // modified
// console.log(isTrue([1, 2, 3]))
// console.log(isTrue(NaN))
// console.log(isTrue(-0))
// Output:
// {arg: false, is: false}
// {arg: 0, is: false}
// {arg: true, is: true}
// {arg: 1, is: true}
// {arg: 'Dave', is: true}
// {arg: '', is: false}
// {arg: null, is: false}
// {arg: undefined, is: false}
// {arg: {…}, is: false}
// {arg: {…}, is: true}
// {arg: Array(0), is: false}
// {arg: Array(3), is: true}
// {arg: NaN, is: false}
// {arg: -0, is: false}
// eg-4 : redoing above function with interface
// const isObj=<T>(arg:T):boolean=>{
//     return (typeof arg==='object' && !Array.isArray(arg) && arg!==null)
// }
// interface BoolCheck<T>{
//     value:T,
//     is:boolean
// }
// const isTrue=<T>(arg:T):BoolCheck<T>=>{
//     if(Array.isArray(arg) && !arg.length){
//         return {value:arg, is:false}
//     }
//     if(isObj(arg) && !Object.keys(arg as keyof T).length){
//         return {value:arg,is:false}
//     }
//     return {value:arg,is:!!arg}
// }
// console.log(isTrue("Hello"));
// console.log(isTrue(""));
// eg-5 : 
// Any object that implements HasId must have a property id of type number.
// interface HasId {
//   id:number
// }
// const processUser=<T extends HasId>(user:T):T=>{
//      return user
// }
// console.log(processUser({id:1234,name:"Ashish"}))//o/p:  {id: 1234, name: 'Ashish'}
// Object literal may only specify known properties, and 'name' does not exist in type 'HasId'
// console.log(processUser({name:"Ashish"}))//o/p:error
// eg-6: using generic in interface
// interface HasId{
//     id:number
// }
// const getUserProperty=<T extends HasId,K extends keyof T>(users:T[],key:K): T[K][]=>{
//     return users.map(user=>user[key]);
// }
// const users=[
//     {
//         "id":123,
//         "name":"Ashish"
//     },{
//         "id":456,
//         "name":"Paul"
//     }
// ];
// console.log(getUserProperty(users,"id")); //o/p: [123, 456]
// console.log(getUserProperty(users,"name")) //o/p:['Ashish', 'Paul']
// eg-7:using generic in class
class storeObj {
    constructor(value) {
        this.data = value;
    }
    get state() {
        return this.data;
    }
    set state(value) {
        this.data = value;
    }
}
// If we intialize class with string data we can get and set string type data only -> constructor storeObj<string>(value: string): storeObj<string>
// const storeString = new storeObj("kfc");
// console.log(store.state);  //o/p:kfc
// store.state="Burger King"
// store.state=123 // we will get error
// console.log(store.state)   //o/p:Burger King
// If we intialize class with number data we can get and set number type data only -> const store: storeObj<number>
// const storeNumber = new storeObj(123);
// console.log(store.state);  //o/p:123
// store.state=777
// console.log(store.state)   //o/p:777
// ->In this case it accepts string, number , boolean 
const myState = new storeObj([15]);
myState.state = (["kfc", true, 777]);
console.log(myState.state); //o/p:['kfc', true, 777]
