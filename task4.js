//Task-1: Basic function
function welcomeuser(name) {
    console.log("Welcome" + " " + name);
}
welcomeuser("Navitha")

//Task-2: Parameter + Return
function squareNumber(num) {
    return num * num;
}
console.log(squareNumber(5));

//Task-3: object function
let employee ={
    name: "Rahul",
    salary: 50000
};
function employeeBonus(bonus) {
    console.log(employee.name);
    console.log(employee.salary + bonus);
}
employeeBonus(5000);

//Task-4: Scope Checking
function checkScope() {
    if(true){
        var a = 10;
        let b = 20;
        const c = 30;
    }
    console.log(a);
    //console.log(b);
    //console.log(c);
}
checkScope();

//Task-5: Arrow Function
const add = (a,b) => {
    console.log(a+b);
}
add(10,20);

//Task-6: callback function
function multiply(a,b) {
    return a * b;
}
function calculator(callback,x,y) {
    console.log(callback(x,y));
}
calculator(multiply,5,2);

//Tak-7: Generator function

function* offers(){
    yield "50% OFF";
    yield "Free Delivery";
    yield "Cashback";
}
let result = offers();
console.log(result.next());
console.log(result.next());
console.log(result.next());

//Task-8: Default parameter
function student(name, course = "JavaScript"){
    console.log("Student Name: " + name);
    console.log("Course: " + course);
}
student("Navitha");
student("Vini", "Python");

//Task-9: Currying
function multi(a){
    return function(b){
        return function(c){
            return a * b * c ;
        }
    }
}
console.log(multi(2)(3)(4));

//Task-10: Spread operator
let arr1 = [1,2,3];
let arr2 = [4,5,6];
let mergedArray = [...arr1, ...arr2];
console.log(mergedArray);

//Task-11: object spread
let obj1 = {
    name: "Navi"
};
let obj2 = {
    role: "Developer"
};
let mergedObject = {
    ...obj1,
    ...obj2,
};
console.log(mergedObject);

//Task-12: Rest operator
function numbers(...num){
    console.log(num);
    let sum = 0;
    for(let value of num){
        sum = sum + value;
    }
    console.log(sum);
}
numbers(1,2,3,4);

//Mini challenge:
let employees = [];
function addEmployee(name, ...salary){
    let employee = {
        name: name,
        salary: salary
    };
    employees.push(employee);
}
function totalSalary(salary){
    let total = 0;
    for(let value of salary){
        total = total + value;
    }
    return total;
}
function bonus(employeeData){
    let updatedEmployee = {
        ...employeeData,
        bonus: 5000
    };
     return updatedEmployee;
}
function printEmployees(callback){
    for(let employee of employees){
        console.log(employee.name);
        console.log(employee.salary);
        console.log(callback(employee.salary));
        console.log(bonus(employee));
        console.log("----------------");
    }
}
addEmployee("Navi",20000,30000);
addEmployee("Rahul",25000,35000);
printEmployees(totalSalary);

    



