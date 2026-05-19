// 1. API Task - User Names Uppercase:
fetch("https://jsonplaceholder.typicode.com/users")
.then((response) => response.json())
.then((users) => {
    let upperCaseUsers = users.map((user) => {
        return user.username.toUpperCase();
    });
    console.log(upperCaseUsers);
})
.catch((error) => {
    console.log("Error:", error);
});

// 2.API Task - Expensive Products:
fetch("https://fakestoreapi.com/products")
.then((response) => response.json())
.then((products) => {
    let expensiveProducts = products.filter((product) => {
        return product.price > 100;
    });
    console.log(expensiveProducts);
})
.catch((error) => {
    console.log("Error:", error);
});

// 3.Date Concept Task - Digital Clock:
let now = new Date();
console.log("Hours:", now.getHours());
console.log("Minutes:", now.getMinutes());
console.log("Seconds:", now.getSeconds());

// 4. String Concept Task - Username Checker
let userName = "   Naveen Kumar   "
let trimmedName = userName.trim();
let upperName = trimmedName.toUpperCase();
let check = upperName.includes("KUMAR");
console.log("Final Name:",upperName);
console.log("Includes KUMAR:",check);

// 5. Array Concept Task - Student Rank System
let marks = [450, 300, 700, 200, 900];
marks.sort((a,b) => b - a);
let topMarks = marks.slice(0,3);
console.log("Top 3 Marks:", topMarks);







