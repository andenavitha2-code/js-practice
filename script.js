// Section-1: Variables

var a=10;
a=15;
console.log(a); //o/p: 15

//let b=20;
//let b=30; //syntax error : let doesnot allow redeclaration

const c=50;
console.log(c);// o/p: 50

//const x=10;
//x=20; //const values cannot be reassined

var p=5;
var p=10;
console.log(p); //o/p: 10

let q=25;
q=q+10;
console.log(q); //o/p: 35

const r=7;
console.log(r+3); //o/p: 10

//fill correct keyword
//let a=10;

//Section-2: Console Methods

// 9.console.log()
//10.console.warn()
//11.console.error()
//12.It clears all previous messages from the console

//Section-3: Data types

let a1= "hello";
console.log(typeof a1); //o/p: string

let b=100;
console.log(typeof b); //o/p: number

let c1=false;
console.log(typeof c1); //o/p: boolean

let d;
console.log(d); //o/p: undefined

//what is type of null?-it shows object 

//"25"
let num=Number("25")
console.log(num);

//section-4: Arrays

let fruit=["apple","mango","kiwi"];
console.log(fruit);

let arr=["a","b","c"];
console.log(arr[1]); // o/p: "b"

let arr1=["x","y","z"];
console.log(arr1[arr.length-1]); // o/p: "z"

//How to get first element? - arr[0]

let arr2=["apple","banana"];
console.log(arr2.length); // o/p: 2

//Add new element to array? - arr.push()

//section-5: objects

let person={
    name:"Navitha",
    age:22
};
console.log(person);

let obj={name:"Naveen"};
console.log(obj.name); // o/p: Naveen

let obj1={
    fruits:["apple","banana"]
};
console.log(obj1.fruits[1]); // o/p: "banana"

//How to access last element inside object array? - obj.fruits[obj.fruits.length-1]

//section-6: Arithmetic operations

console.log(5+3); // o/p: 8
console.log(10%3); // o/p: 1
console.log(2**3); // o/p: 8
console.log(10/2); // o/p: 5

//section-7: Increment/Decrement

let a3=5;
a3++;
console.log(a3); // o/p: 6

let b3=5;
let c3=b3++;
console.log(b3,c3); // o/p: b3=6 , c3=5

let x1=5;
let y1=++x1;
console.log(x1,y1); // o/p: x1=6,y1=6

let m=3;
let n=m--;
console.log(m,n); // o/p: m=2,n=3

// section-8: comparison & logical

console.log(5=="5"); // o/p: True
console.log(5==="5"); // o/p: false
console.log(true && false || true); // o/p: true

//section-9: Ternary

5>3?console.log("Yes"):console.log("No"); // o/p: Yes





















