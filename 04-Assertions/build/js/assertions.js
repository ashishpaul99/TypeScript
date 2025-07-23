"use strict";
// eg-1:convert to more or less specific
let a = 'hello'; //
let b = a; // less specific
let c = a; // more specific
a = "Ashish"; //a accepts only string
b = 45; // b accepts string or number
c = 'hello'; // c only acceptws hello literal as value
console.log(a); //o/p : Ashish
console.log(b); //o/p : 45
console.log(c); //o/p : hello
// eg-2:
let d = 'world'; //d is gone have value which is type string
let e = 'world'; //string is allowed
e = 45; // number is allowed
// e=true; // not allowed
console.log(e); //o/p:45
// eg-3:
const addOrConcat = (a, b, c) => {
    if (c === 'add')
        return a + b;
    return ' ' + a + b;
};
// Be careful! TS sees no problem- but a string is returned. it returns string
const add = addOrConcat(2, 2, 'add');
const concat = addOrConcat(2, 2, 'concat');
console.log(add);
console.log(concat);
// 2. fore casting or double casting
// Conversion of type 'number' to type 'string' may be a mistake because neither type sufficiently overlaps with the other. If this was intentional, convert the expression to 'unknown' first.
// 10 as string
// fore casting or double casting
10;
// unknown -> special type
// 10 is unknown and string. this also known as fore casting or double casting.
// it is not recommended it over rules the typescript
// 3. Assertions are very useful when working with the DOM.
// Eg-1:
// -> TypeScript doesn’t know the exact type returned by document.querySelector.
// -> For example, document.querySelector('img') returns HTMLElement | null.
// -> But we know it's an <img>, so we can assert its type to HTMLImageElement.
// -> 'img' is declared but its value is never read. ts(6133) — this is just a warning.
// -> TypeScript infers: const img: HTMLImageElement | null (✅ More specific because 'img' tag is known)
// const img=document.querySelector('img');//const img: HTMLImageElement | null --> more specific
// Eg-2
// -> TypeScript doesn't know the specific type of an element selected by ID.
// -> When using document.querySelector('#myId'), TypeScript infers the type as Element | null.
// -> This is because any ID selector could refer to any kind of HTML element (div, input, etc).
// -> TypeScript infers: const id: Element | null (❌ Less specific; could be any element type)
const id = document.querySelector('#myId'); // const id: Element | null --> less specific
// Eg-3: ts knows it is html element
// -> TypeScript infers: const myImg: HTMLElement | null (✅ More specific than Element, but less specific than HTMLImageElement)
//   const myImg = document.getElementById('#img') //const myImg: HTMLElement | null --> more specific
// ❗ Note:
// - querySelector returns Element | null or a more specific type if it can infer (like 'img' → HTMLImageElement).
// - getElementById always returns HTMLElement | null since it only uses an ID without tag context.
// - Use type assertions if you need more specific types:
// eg-4:asserttion
const img = document.querySelector('img');
// const myImg = document.getElementById('#img')!// non null assertion
// -> Accessing src property of 
img.src;
// myImg.src;//Property 'src' does not exist on type 'HTMLElement' error
// const myImg = document.getElementById('#img') as HTMLImageElement;
const nextImg = document.getElementById('#img'); //this will not work in tsk file for react.
nextImg.src;
