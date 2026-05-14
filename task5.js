//Task-1: Student Registration form
let studentName = prompt("Enter Student Name:");
let department = prompt("Enter your department:");
let age = prompt("Enter your age:");
console.log(`Welcome ${studentName}`);
console.log(`Department: ${department}`);
console.log(`Age: ${age}`);

//Task-2: ATM Withdrawl System
let balance = 10000;
let amount = prompt("Enter withdrawl amount");
if (amount >= 100 && amount <= balance){
    console.log("Transaction Successful");
}
else if (amount < 100){
    console.log("Minimum withdrawl amount is 100");
}
else {
    console.log("Insufficient Balance");
}

//Task-3: Swiggy Discount Checker
let orderAmount = prompt("Enter Order Amount:");
let result = orderAmount > 499 ? "Free Delivery Available" : "Delivery Charges Applied";
console.log(result);

//Task-4: Instagram Login System
let username = prompt("Enter Username:");
if(username === "admin"){
    let password = prompt("Enter Password:");
    if(password === "1234"){
        console.log("Login Success");
    }else {
        console.log("Wrong Password");
    }
}else {
        console.log("Invalid Username");
    }

//Task-5: Traffic Signal System
let signal = prompt("Enter signal color:");
switch (signal) {
    case "red":
        console.log("STOP");
        break;
    case "yellow":
        console.log("READY");
        break;
    case "green":
        console.log("GO");
        break
    default:
        console.log("Invalid Signal");
}

//Task-6: Employee Salary Calculator
function salaryCalculation(basicSalary, bonus) {
    let totalSalary = basicSalary + bonus;
    return totalSalary;
}
console.log(salaryCalculation(25000,5000));

//Task-7 E-Commerce Cart Total
let prices = [100, 200, 300, 400];
let total = 0;
for (let i = 0; i < prices.length; i++){
    total = total + prices[i];
}
let average = total / prices.length;
console.log("Total Price:", total);
console.log("Average Price:", average);

//Task-8: WhatsApp Contact Book
let contact = {
    name: "Navi",
    phone: "9876543210",
    status: "online"
};
for(let key in contact){
    console.log(key + " : " + contact[key]);
}

//Task-9: Movie Ticket Booking
function payment() {
    console.log("Payment Successful");
}
function bookTicket(callback) {
    console.log("Ticket Booked Successfully");
    callback();
}
bookTicket(payment);

//Task-10: Food Delivery Time Tracker
function* orderstages() {
    yield "Order Confirmed";
    yield "Preparing Food";
    yield "Out for Delivery";
    yield "Delivered";
}
let order = orderstages();
console.log(order.next().value);
console.log(order.next().value);
console.log(order.next().value);
console.log(order.next().value);



    

