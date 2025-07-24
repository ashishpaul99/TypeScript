
// eg-1:
// interface TransactionObj{
//     Pizza:number,
//     Books:number,
//     coffee:number
// }


// const todaysTransaction:TransactionObj={
//     Pizza:10,
//     Books:20,
//     coffee:30
// }


// console.log(todaysTransaction.Pizza); //o/p : 10
// console.log(todaysTransaction['Pizza']);//o/p:10

// Accesing dynamically -> if we use index signature we can access it dynmically now it give error.
// let prop:string='Pizza';
// console.log(todaysTransaction[prop]);



// eg-2:
// ->transaction is inferred as a string (because object keys in JS are always strings).
// But your interface TransactionObj has specific known keys.
// TypeScript says:❌ "Hey! transaction is a general string, but transactions can only be indexed with keys like 'Pizza' | 'Books' | 'coffee'."

// interface TransactionObj{
//     Pizza:number,
//     Books:number,
//     coffee:number
// }

// const todaysTransaction:TransactionObj={
//     Pizza:10,
//     Books:20,
//     coffee:30
// }

// const todaysNet = (transactions:TransactionObj):number=>{
//     let total=0;
//     for(const transaction in transactions){
//         total+=transactions[transaction];
//     }
//     return total;
// }

// Eg-3:using index signature

//type of key cannot be boolean
//An index signature parameter type must be 'string', 'number', 'symbol', or a template literal type
// interface TransactionObj{
//     [index:string]:number 
// }

// const todaysTransaction:TransactionObj={
//     Pizza:10,
//     Books:20,
//     coffee:30
// }

// const todaysNet = (transactions:TransactionObj):number=>{
//     let total=0;
//     for(const transaction in transactions){
//         total+=transactions[transaction];
//     }
//     return total;
// }

// console.log(todaysNet(todaysTransaction)); //o/p:60

// const props:string='Pizza';
// console.log(todaysTransaction[props])// o/p:10

// ->editing the pizza tansaction net 
// todaysTransaction[props]=20
// console.log(todaysTransaction[props])//o/p:20

// ->it doesn't exist on the object
// console.log(todaysTransaction['Dave']); //undefinded

// eg-4:
// ->we can make index signature readoly so that no one could edit it
// ->it gives error if the index signature is readonly
// todaysTransaction[props]=20
// interface TransactionObj{
//     readonly [index:string]:number 
// }

// const todaysTransaction:TransactionObj={
//     Pizza:10,
//     Books:20,
//     coffee:30
// }

// const todaysNet = (transactions:TransactionObj):number=>{
//     let total=0;
//     for(const transaction in transactions){
//         total+=transactions[transaction];
//     }
//     return total;
// }

// todaysTransaction.props=20 -> it gives error


// eg-5:
// interface Student{
//     [key:string]:string|number|number[]|undefined
//     name:string,
//     cgpa:number,
//     classes?:number[]
// }

// creating object
// const student:Student={
//     name:"Ashish",
//     cgpa:10,
//     classes:[100,200]
// }

// Typescript thinks may be test was prestnt in student object
// console.log(student.text) //o/p:undefined

// for(const key in student){
//     console.log(`${key}:${student[key]}`);
// }
// Output:
// name:Ashish
// main.js:17 cgpa:10
// main.js:17 classes:100,200

// keyof
// eg-6: Iterate thorugh object that does not have index signature.

// interface Student{
//     name:string,
//     cgpa:number,
//     classes?:number[]
// }

// creating object
// const student:Student={
//     name:"Ashish",
//     cgpa:10,
//     classes:[100,200]
// }

// Typescript thinks may be test was prestnt in student object
// console.log(student.text) //o/p:undefined

// for(const key in student){
//     console.log(`${key}:${student[key as keyof Student]}`);
// }
// output:
// name:Ashish
// main.js:17 cgpa:10
// main.js:17 classes:100,200


// if we dont the type of object 
// Object.keys(student).map(key=>{
//     console.log(student[key as keyof typeof student]);
// })
// Output:
// Ashish
// main.js:25 10
// main.js:25 (2) [100, 200]

// const logStudetKey=(student:Student,key:keyof typeof student):void=>{
//     console.log(`${key}:${student[key]}`)
// }
// logStudetKey(student, "name");
// logStudetKey(student, "cgpa");
// logStudetKey(student, "classes");

//Output: Student cgpa: 10
// name:Ashish
// main.js:32 cgpa:10
// main.js:32 classes:100,200

// eg-7: using utility type record


// type Streams='salary' | 'bonus' | 'sidehustle'; //union types of streams
// type Incomes=Record<Streams,number | string>
// const monthlyIncomes:Incomes={
//     salary:500,
//     bonus:100,
//     sidehustle:250
// }

// for(const revenue in monthlyIncomes){
//     console.log(`${monthlyIncomes[revenue as keyof Incomes]}`)
// }

// Output:
// 500
// main.js:20 100
// main.js:20 250

// interface TransactionObj{
//     pizza:number,
//     books:number,
//     coffee:number

// }

