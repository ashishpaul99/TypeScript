# TypeScript
## 1. What is typescript?
→ TypeScript is JavaScript with syntax for types.  
→ TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.  
→ TypeScript and c# created by Anders.  
→ TypeScript is Javascipt.  
→ it is used to write better js.  
→ ts extends js 

## Installing typescript in project
→ install node.js --> npm needed
→ install typescript --> npm i typescript -g
→ Add tsc to path -> environment varibables.

## Use Git Bash inside VS Code
→ Ctrl + Shift + P → type:Select Default Profile -> Git Bash

## Compile TypeScript to JavaScript
→ tsc main.ts && node main.js
→ This compiles and runs it in one line.
-> writing js code in ts file.
-> ts main.ts index.js(destination file)
-> if you don't need to change the file name then write tsc main.ts --> it created main.js file.

-> main.ts
let username="Ashish"
console.log(username);

->main.js
var username = "Ashish";
console.log(username);


## Why let becomes var in main.js?
-> By default, the TypeScript compiler targets older versions of JavaScript (like ES3 or ES5) to support older browsers.
-> hange the target to modern JavaScript (like ES6) by adding
-> tsc main.ts --target ES6

->index.html
  <script src="main.js" defer></script>
  defer -load the dom before loading js.

## Watch mode
->using watch mode -> tsc main.ts -w
->it woks for single file 

## file structure
project-root/  
├── src/         → Source code (TypeScript files: `.ts`)  
│   └── main.ts  
├── build/       → Compiled output (JavaScript, HTML, CSS)  
│   ├── index.html  
│   ├── style.css  
│   └── main.js   ← compiled from main.ts  
├── tsconfig.json  
└── README.md  







