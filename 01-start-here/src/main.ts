let myname:string="Ashish";
let age:number;
let isLoading:boolean;
let album: any;
album="Ashish"
album=42

myname="Paul";
age=25;
isLoading=true;


const sum=(a:number,b:string)=>{
    return a+b;
}

const x=sum(10,"hello");
console.log(x);

let username:string | number;
username="Ashish";
username=45;

let postId:string | number;
let isActive: number | boolean; // sometime true can be 1 and false can be 0

let isTrue: number|boolean|string

let re:RegExp;
re=/\w+/g;


const sentence = "Typescript is powerful!";
const words =sentence.match(/\b\w+\b/g)
console.log(words);




