// Tasks : Type casting & Flow control
//Task-1: predict the output
//write the output and datatype for below :
console.log("10" + 5); // output: 105
console.log(typeof("10" + 5)); // Datatype: string

console.log(10 + true); // output: 11
console.log(typeof(10 + true)); // Datatype: Number

console.log(false + null); // output: 0
console.log(typeof(false + null)); // Datatype: Number

console.log("Hello" + undefined); // output: Helloundefined
console.log(typeof("Hello" + undefined)); // output: string

console.log([1,2] + 5); //output: 1,25
console.log(typeof([1,2] + 5)); //output: string

//Task-2: Implicit Type Casting
//create examples for:
//1. string+Number
let a = "hii" + 26;
console.log(a);
console.log(typeof(a));
//2.Boolean+Number
let b = true + 26;
console.log(b);
console.log(typeof(b));
//3.Array+string
let c = [1,2,3] + "javascript";
console.log(c);
console.log(typeof(c));
//4.object+Number
let d = {} + 10;
console.log(d);
console.log(typeof(d));
//5.Null+Number
let e = null + 5;
console.log(e);
console.log(typeof(e));

//Task-3: Explict Type casting
//convert the following into Number
//1."500"
console.log(Number("500")); // output: 500
//2.true
console.log(Number(true)); // output: 1
//3.false
console.log(Number(false)); // output: 0
//4.null
console.log(Number(null)); //output: 0
//5."abc"
console.log(Number("abc")); //output: NaN
//6.[100]
console.log(Number([100])); // output: 100

//Task-4: Boolean constructor
//1.""
console.log(Boolean("")); //output: false
//2."javascript"
console.log(Boolean("javascript")); //output: true
//3.0
console.log(Boolean(0)); //output: false
//4.1
console.log(Boolean(1)); //output: true
//5.null
console.log(Boolean(null)); //output: false
//6.undefined
console.log(Boolean(undefined)); //output: false
//7.[]
console.log(Boolean([])); //output: true
//8.{}
console.log(Boolean({})); //output: true

//Task-5: Student pass or fail
let mark = 45;
if(mark > 35)
{
    console.log("Pass");
}
else{
    console.log("Fail");
}

//Task-6: Voting Eligibility
let age = 20;
if(age >= 20)
{
    console.log("Eligible");
}
else{
    console.log("Not Eligible");
}

//Task-7: Greatest Number
let p = 50;
let q = 80;
let r = 30;
if(p > q && p > r)
{
    console.log("p is greatest");
}
else if(q > p && q > r)
{
    console.log("q is greatest");
}
else{
    console.log("r is greatest");
}

//Task-8: Traffic light system
let color = "red";
switch (color) {
    case "red":
        console.log("Stop");
        break;
    case "yellow":
        console.log("ready");
        break;
    case "green":
        console.log("go");
        break;
        default:
            console.log("invalid color");
}

//Task-9: login system
let username = "admin"
let password = "12345"
if(username === "admin")
{
    if(password === "12345")
{
    console.log("Login Success");
}
else
    {
    console.log("Invalid Login");
    }
}
else
{
    console.log("Invalid Login");
}
//Task-10: Session Finder
let hour = 14;
if(hour >= 1 && hour <= 12)
{
    console.log("Morning");
}
else if(hour >= 13 && hour <= 15)
{
    console.log("Afternoon");
}
else if(hour >= 16 && hour <= 19)
{
    console.log("Evening");
}
else if(hour >= 20 && hour <= 24)
{
    console.log("Night");
}
else{
    console.log("Invalid Hour");
}

// predict outputs without running
console.log(true + true); // output: 2
console.log("5" - 2); // output: 3
console.log("5" + 2); // output: 52
console.log(null + 1); // output: 1
console.log(undefined + 1); // output: NaN
console.log(Boolean(" ")); // output: true
console.log(Number(true)); //output: 1








    






































