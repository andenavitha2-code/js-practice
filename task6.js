// 1. Students Attedance System:
let presentStudents = ["Navi", "Vini", "Arun"];
let absentStudents = ["Anu", "Kavya",];
let allStudents = [...presentStudents, ...absentStudents];
allStudents.push("priya");
console.log(allStudents);

// 2. E-Commerce Cart:
let mobile = {
    brand: "Vivo",
    model: "Y73",
    price: 21000
};
let charger = {
    type: "Fast Charger",
    watt: "45W"
};
let productDetails = {
    ...mobile, ...charger, deliveryDate: "22-May-2026"
};
console.log(productDetails);

// 3.Food Delivery APP:
function orderFood(...items){
    console.log("Total items ordered:", items.length);
    console.log("First item:", items[0]);
    console.log("Last item:", items[items.length - 1]);
}
orderFood("Pizza", "Burger", "Biryani", "Ice Cream");

// 4.Employee Salary Filter:
let employees = [
    {
        name: "Priya",
        salary: 45000
    },
    {
        name: "Kiran",
        salary: 40000
    },
    {
        name: "Vini",
        salary: 75000
    },
    {
        name: "kavya",
        salary: 55000
    }
];
let highSalaryEmployees = employees.filter(employee => employee.salary > 50000 );
console.log(highSalaryEmployees);

// 5. Online Game Score Board:
let scores = [100,200,150,200,350];
let totalScore = scores.reduce((total, score) => {
    return total + score;
}, 0);
console.log("Total Score:", totalScore);
