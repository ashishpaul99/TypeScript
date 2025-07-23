"use strict";
// Error
// const year =document.getElementById("year");//const year: HTMLElement | null
// const thisYear = new Date().getFullYear();// const thisYear: () => number
// year.setAttribute('dataTime',thisYear);//Argument of type '() => number' is not assignable to parameter of type 'string'
// year.textContent=thisYear;//Type '() => number' is not assignable to type 'string'.ts(2322)
// (property) Node.textContent: string | null
// 1st variation
// let year:HTMLElement | null;
// year=document.getElementById("year");
// let thisYear:string;
// thisYear= new Date().getFullYear().toString();
// putting type gaurd -> year may be null
// if(year){
//     year.setAttribute('dataTime',thisYear);
//     year.textContent=thisYear;
// }
// 2nd variation(do some assertions)
// -> we explicitly telling it is span element
let year = document.getElementById("year");
let thisYear = new Date().getFullYear().toString();
// ->we asserted year as HTMLspanElement so no need to typecard
year.setAttribute('dataTime', thisYear);
year.textContent = thisYear;
