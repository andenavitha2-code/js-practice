//Looping Statements
//1.Print Numbers:
//print numbers from 1 to 20 using a for loop.
for( let i = 1; i <= 20; i++){
    console.log(i);
}

//2.odd Numbers:
//print all odd numbers from 1 to 50
for(let a = 1; a <= 50; a++){
    if(a % 2 != 0){
        console.log("odd:- ", a);
    }
}

//3.Multiplication Table:
//print the multiplication table of 7
let num = 7;
for(let p = 1; p <=10; p++){
    console.log(num + "x" + p + "=" + num * p);
}

//4.Reverse Counting:
//using while loop,print numbers from 20 to 1
let value = 20;
while(value >= 1){
    console.log(value);
    value--;
}

//5.Sum of Numbers:
//Find the total sum of numbers from 1 to 100
let sum = 0;
for(let i = 1; i <=100; i++){
    sum = sum + i;
}
console.log(sum);

//6.Array Loop:
//Loop through this array and print all values
let fruits = ["apple", "banana", "orange", "grapes"]
for (let fruit of fruits){
    console.log(fruit);
}

//7.count Even numbers:
//count how many even numbers are present between 1 to 50.
let count = 0;
for (let i = 1; i <= 50; i++){
    if(i % 2 == 0){
        count++;
    }
}
console.log(count);

//8.Star Pattern:
//print this pattern using loops
for(let i = 1; i <= 5; i++){
    console.log("*".repeat(i));
}

//Functions
//9.Simple function:
//create a function named welcome() that prints:
function welcome() {
    console.log("Welcome to JavaScript");
}
welcome();

//10.Function with parameter:
//crerate a function that accepts a name and prints
function greet(name){
    console.log("Hello" +" " + name);
}
greet("Navitha");

//11.Add Two Numbers:
//create a function that takes 2 numbers and returns the addition.
function add(a,b) {
    return a + b;
}
console.log(add(10,20));

//12.Salary bonus:
//create a function that adds bonus to employee salary.
function salaryBonus(salary,bonus) {
    return salary + bonus;
}
console.log(salaryBonus(50000,5000));

//13.object loop:
//print all keys and values using for in.
let student = {
    name: "Navitha",
    course: "JavaScript",
    marks: 95
};
for(let key in student){
    console.log(key + ":" + student[key]);
}

//14.Find largest number
//Create a function to find the largest number between two values.
function largest(a,b){
    if (a > b){
        console.log(a);
    } else {
        console.log(b);
    }
}
largest(10,50);

//15.Mini Employee Task:
//Create an employee object and print
let employee = {
    name: "Navitha",
    department: "IT",
    salary: 30000
};
function employeeDetails(emp,bonus) {
    console.log("Employee Name:", emp.name);
    console.log("Department:", emp.department);
    console.log("Salary:", emp.salary);
    console.log("Salary after bonus:", emp.salary + bonus);
}
employeeDetails(employee, 5000);





