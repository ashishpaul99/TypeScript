// 1. Extending class
// class Coder {
//     secondLang!:string;
//     constructor(
//         public readonly name:string, 
//         public music:string, 
//         private age:number, 
//         protected lang:string ='Typescript'
//     ){
//         this.name=name;
//         this.music=music;
//         this.age=age;
//         this.lang=lang;
//     } 
//     public getAge(){
//         return `Hello I'm ${this.age}`;
//     } 
// }



// we have to assign the value of properties after super not before super.

// class webDev extends Coder{
//     constructor(
//         public computer:string,
//         name:string,
//         music:string,
//         age:number,
//     ){
//         super(name,music,age); // it recives everything we recivce from the parent class(Coder)
//         this.computer = computer;
//     }
//     public getLang(){
//         return `I write ${this.lang}`;
//     }
// }

// const Paul=new webDev("Mac","Paul","Keyboard",25);
// console.log(Paul.getLang()); //o/p: I write Typescript
// console.log(Paul.age);//age is still private
// console.log(Paul.lang) // it is protected which is accessed only in the class or sub class

// const Ashish = new Coder("Ashish","Guitar",25);
// Ashish.secondLang="English"

// console.log(Ashish.name) //o/p:Ashish
// console.log(Ashish.music) //o/p: Guitar

// Accessing age using public method inside the class
// console.log(Ashish.getAge()); //o/p: Hello I'm 25
// console.log(Ashish.age);  //❌ Error: Property 'age' is private and only accessible within class 'Coder'.

// 2. Implementing interface to a class
// An interface in TypeScript defines the shape of an object — specifying what properties and methods an object must have. It’s used mainly for type-checking and enforcing structure in classes, objects, and functions.

// ->A interface with two properties with one method.
// interface Musician {
//     name:string,
//     instrument:string,
//     play(action:string):string
// }

// class Guitarist implements Musician{
//          name:string
//          instrument: string

//          constructor(name:string, instrument:string){
//             this.name=name
//             this.instrument=instrument
//          }

//          play(action: string){
//             return `${this.name} ${action} the ${this.instrument}`
//          }
// }

// const Ashish = new Guitarist("Ashish","Guitar");
// console.log(Ashish.play("strums")) //o/p: Ashish strums the Guitar


// 3.  static kwyword 

//   static getCount(): number {
//     return Peeps.count;
//   }

//   public id: number;

//   constructor(public name: string) {
//     this.name = name;
//     this.id = ++Peeps.count; // increment count on every object creation
//   }
// }

// const Ashish=new Peeps("Ashish");
// const Paul=new Peeps("Paul");
// const Bannu=new Peeps("Bannu");
// console.log(Ashish.id) //o/p: 1
// console.log(Paul.id)   //o/p: 2
// console.log(Bannu.id)  //o/p: 3

// count is incremented after instantiate every object
// console.log(Peeps.count); //o/p=3
// console.log(Peeps.getCount()) //0/p=4

// 4. Getters and Setter
// -> get -> this keyword is used to get data.


class MyBands {
  private dataState: string[];

  constructor() {
    this.dataState = []; // initialize as empty array
  }

  // ✅ Getter: Allows read-only access to private data
  public get data(): string[] {
    return this.dataState;
  }

  // ✅ Setter: Allows safe update of private data with validation
  public set data(value: string[]) {
    if (Array.isArray(value) && value.every(el => typeof el === 'string')) {
      this.dataState = value;
    } else {
      throw new Error('Parameter is not a string array');
    }
  }
}


const bands = new MyBands();

console.log(bands.data); 
// Output: []

bands.data = ['Ashish', 'Paul']; // setter used
console.log(bands.data);         
// Output: ['Ashish', 'Paul']

bands.data = [...bands.data, 'Bannu']; // spread & setter
console.log(bands.data);         
// Output: ['Ashish', 'Paul', 'Bannu']














