// Utilities
// typescript offers many utility types that are helpful for common type transformation.

// 1. Partial<T> -> Makes all properties of T optional
// Eg-1:
// ✅ Utility Type: Partial<T>
// -> Partial makes all properties of a type optional

// 1. Define the interface
// interface Assignment {
//     studentId: number;
//     title: string;
//     grade: number;
//     verified?: boolean;
// }

// 2. Create an assignment object
// const assign1: Assignment = {
//     studentId: 123,
//     title: "Final Project",
//     grade: 9,
//     verified: true
// };

// // 3. Function to update assignment
// const updateAssignment = (
//     assign: Assignment,
//     propsToUpdate: Partial<Assignment> // ⬅ only allows partial properties
// ): Assignment => {
//     return { ...assign, ...propsToUpdate };
// };

// // 4. Updating the grade property
// console.log(updateAssignment(assign1, { grade: 10 }));
// // ✅ Output: { studentId: 123, title: 'Final Project', grade: 10, verified: true }

// const assignGrade: Assignment = updateAssignment(assign1, { grade: 11 });
// console.log(assignGrade);
// ✅ Output: { studentId: 123, title: 'Final Project', grade: 11, verified: true }


// 2. Required and Readonly
// record the info of assignment into database
// ->Required<T> - Makes all properties of T required
// ->Readonly<T> - Makes all properties of T read-only
// interface Assignment {
//     studentId: number;
//     title: string;
//     grade: number;
//     verified?: boolean;
// }

// const assign1: Assignment = {
//     studentId: 123,
//     title: "Final Project",
//     grade: 9,
//     verified: true
// };

// // ✅ Update assignment and return a new object
// const updateAssignment = (
//     assign: Assignment,
//     propsToUpdate: Partial<Assignment>
// ): Assignment => {
//     return { ...assign, ...propsToUpdate };
// };

// // ✅ Update the grade
// const assignGrade: Assignment = updateAssignment(assign1, { grade: 11 });

// // ✅ 'Required' ensures all properties must be present
// const recordAssignment = (assign: Required<Assignment>): Assignment => {
//     // Simulate sending data to a database
//     return assign;
// };

// // ✅ 'Readonly' makes all fields immutable (can't be changed)
// const assignVerified: Readonly<Assignment> = {
//     ...assignGrade,
//     verified: true
// };

// // assignVerified.grade = 6; ❌ Error: Cannot assign to 'grade' because it is a read-only property

// // ✅ Record assignment (simulate DB call)
// console.log(recordAssignment({ ...assign1, verified: true }));

/*
Output:
{
  studentId: 123,
  title: 'Final Project',
  grade: 9,
  verified: true
}
*/


// 3. Record<K, T>	Constructs an object type with keys of type K and values of type T

// Eg-1:
// creating hex color map and telling keys and value will be string.
// const hexColorMap:Record<string,string>={
//     red:"FF0000",
//     green:"00FF00",
//     blue:"0000FF",
// }

// Eg-2:creating string literal types

// type Students ="Ashish" | "Paul" | "Bannu";
// type letterGrades = "A" | "B" | "C" |"D";

// const finalGrades:Record<Students,letterGrades>={
//     Ashish:"B",
//     Paul:"A",
//     Bannu:"C"
// }

// Eg-3:
// type Students ="Ashish" | "Paul" ;
// interface Grades{
//     assign1:number,
//     assign2:number,
// }

// const gradeData:Record<Students, Grades>={
//     Ashish:{assign1:90,assign2:95},
//     Paul:{assign1:69,assign2:80}
// }

// 5. Pick<T, K> and Omit<T, K>
// Pick<T, K>	Creates a new type by picking only specified keys K from type T 
// Omit<T, K>	Creates a new type by omitting specified keys K from type T

// interface Assignment {
//     studentId: number;
//     title: string;
//     grade: number;
//     verified?: boolean;
// }

// type AssignResult = Pick<Assignment, "studentId" | "title">;

// type assignPreview=Omit<Assignment,"grade" | "verified">

// const preview:assignPreview={
//     studentId:124,
//     title:"First Project"
//     // grade:9 //error it is ommited from Assigment
// }


// 5. Exclude and Extract
// -> wroking with string literal union types.
// type students="Ashish" | "Paul"
// type letterGrades = "A" | "B" | "C" | "U";
// type adjustGrades=Exclude<letterGrades,"U">
// type highGrades = Extract<letterGrades, "A" | "B">
// const assignGrades:Record<students,adjustGrades>={
//     Ashish:"A",
//     Paul:"B"
//     // Paul:"U";//Type '"U"' is not assignable to type 'adjustGrades'
// }
// console.log(assignGrades); // o/p:  {Ashish: 'A', Paul: 'B'}


// 6. non-nullable -  NonNullable<T> removes null and undefined from a type.
// type allStudents = 'Ashish'| 'Paul' | null | undefined;
// type NameOnly = NonNullable<allStudents>

//  7. ReturnType<T> 
// ReturnType<typeof function> is dynamic — auto-updates with function changes.
// Helps prevent mismatched or outdated types.
// Without using ReturnType (manual typing):
// This becomes outdated if the function return shape changes


// type newAssign = { title: string, points: number };

// Using ReturnType utility
// const createNewAssign = (title: string, points: number) => {
//     return { title, points };
// };

// functionType will always match whatever createNewAssign returns
// type functionType = ReturnType<typeof createNewAssign>;

// Creating an object using that return type
// const book: functionType = createNewAssign("best book", 10);

// console.log(book); // Output: { title: 'best book', points: 10 }



// 8. Parameters<T> extracts the parameter types of a function as a tuple

// const createNewAssign = (title: string, points: number) => {
//     return { title, points };
// };

// newAssign will be the return type of createNewAssign → { title: string, points: number }
// type newAssign = ReturnType<typeof createNewAssign>;

// // assignParams is a tuple of the parameters of createNewAssign → [string, number]
// type assignParams = Parameters<typeof createNewAssign>;

// // assignArgs must match the type [string, number]
// const assignArgs: assignParams = ["best Book", 10];

// // create a new assignment using spread parameters
// const tsAssign: newAssign = createNewAssign(...assignArgs);

// console.log(tsAssign); // o/p: { title: 'best Book', points: 10 }

// 8. Awaited<T>
// Awaited<T> is a utility type that unwraps the resolved type of a Promise.
// It's useful when you want to get the actual type a Promise returns after it's resolved.

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

// Function returning a Promise<User[]>
const fetchUsers = async (): Promise<User[]> => {
  const data = await fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .catch((err) => {
      if (err instanceof Error) {
        console.log(err.message);
      }
    });
  return data;
};

// Get the return type of fetchUsers
// type fetchUsersReturnType = ReturnType<typeof fetchUsers>; // -> Promise<User[]>

// We want the resolved type (i.e., the actual value returned after await)
type fetchUsersReturnType = Awaited<ReturnType<typeof fetchUsers>>; // -> User[]

// Fetch users and log them in the console
fetchUsers().then((users) => console.log(users));







