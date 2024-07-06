//alert("this is my first code");

// let money = 100;
// console.log(money);

// let money100 = 45;
// console.log(money100);
// money100 = money + 40;
// console.log(money100);

// console.log(".............................................")
// let noOfStudent = 40;
// console.log(noOfStudent)
// noOfStudent = noOfStudent+5;
// console.log(noOfStudent)

//use of const.............................................................................;
// let radius = 4;
// const pi = 3.14;
// let area = pi * radius;
// console.log(area)

// pi = 75;
// let perimeter= 2*pi*radius;
// console.log(perimeter);

//string...........................................................................;
// let str1 = "This is first str";
// console.log(str1);
// let str2 = 'This is second str';
// console.log(str2);
// noOfStr = 10000
// let str3 = `str3 use ${noOfStr} `;
// let str4 = 'str3 use'+ noOfStr;
// console.log(str3);
// console.log(str3);

//Boolean.....................................................;
// let isAdut = true;//this is boolean
// let isAdut2 = 'true';// this is string;
// console.log(isAdut);
// console.log(isAdut2);

// null and undefined ..............................................;
// null এর মধ্যে কোনো value define নেই । আর undefined এর মধ্যে ভেরিয়েবল থাকে কিন্তু কোনো value দেওয়া থাকে না .  
// var userName;

// console.log(`apnar ami jani na ${userName}`);
// userName = 'Abdullah';
// console.log(`apnar name ${userName}`);

//typeof operator..........................;

// console.log(typeof 4);
// console.log(`type of 4 is ${typeof 4}`);
// console.log(`type of hello is ${typeof 'hello'}`);
// console.log(`type of 4.5 is ${typeof 4.5}`);
// console.log(`type of true is ${typeof true}`);
// console.log(`type of false is ${typeof false}`);
// console.log(`type of null is ${typeof null}`);
// var userName;
// console.log(`type of userName is ${typeof undefined}`);

//Comarison Operator (==, ===, !=, !==, >, <, >=, <=)......................;
// console.log(4 == 4);
// console.log(4 == 4.0);
// console.log(4 === 4);
// console.log(4 === 4.0);
// console.log(4 !== 4);

// console.log('Hello' == "Hello")
// console.log('Hello' === "Hello")
// console.log("Hello" == "Hello")
// console.log('Hello' == "hello")
// console.log('Hello' === "hello")

// console.log(4 > 5);
// console.log(4 < 5);
// console.log(4 <= 5);
// console.log(4 >= 5);

// if ,else, else-if use................
// let age = 87;
// if (age >= 18){
//   console.log("You are an eligible Voter")
// } else {
//   console.log("You can provide moral support")
// };  // OUTPUT: You are an eligible Voter

// let age = 15;
// if (age >= 18){
//   console.log("You are an eligible Voter")
// } else {
//   console.log("You can provide moral support")
// };   // OUTPUT: You can provide moral support

// let age = 35;
// let isEligibleVoter = age >= 18;

// if (isEligibleVoter){
//   console.log("You are an eligible Voter")
// } else {
//   console.log("You can provide moral support")
// }  // OUTPUT: You are an eligible Voter

// let score = 85;
// if(score >= 90){
//   console.log("Grade: A")
// } else if (score >= 80){
//   console.log("Grade: B")
// } else if(score >= 70){
//   console.log("Grade: c")
// } else {
//   console.log("Grade: Fail")
// }  // OUTPUT: Grade: A

// let score = 55;
// if(score >= 90){
//   console.log("Grade: A")
// } else if (score >= 80){
//   console.log("Grade: B")
// } else if(score >= 70){
//   console.log("Grade: c")
// } else {
//   console.log("Grade: Fail")
// }  // OUTPUT: Grade: Fail

// let number = 10;
// if (number > 0){
//   if (number % 2 === 0){
//     console.log("The number is Positive and Even.");
//   } else {
//     console.log("The number is Positive and Odd.");
//   }
// } else if (number < 0){
//   console.log("The number is Negative.");
// } else {
//   console.log("This number is Zero.")
// };
// OUTPUT: The number is Positive and Even.

// let number = 7;
// if (number > 0){
//   if (number % 2 === 0){
//     console.log("The number is Positive and Even.");
//   } else {
//     console.log("The number is Positive and Odd.");
//   }
// } else if (number < 0){
//   console.log("The number is Negative.");
// } else {
//   console.log("This number is Zero.")
// };
// OUTPUT: The number is Positive and Odd.

// let number = -5;
// if (number > 0){
//   if (number % 2 === 0){
//     console.log("The number is Positive and Even.");
//   } else {
//     console.log("The number is Positive and Odd.");
//   }
// } else if (number < 0){
//   console.log("The number is Negative.");
// } else {
//   console.log("This number is Zero.")
// };
// OUTPUT: The number is Negative.

// LOGICAL OPERATORS(And '&&',Or '||',Not '!')..................
// < Use of && AND >
// let age = 25; 
// let hasDL = true;
// if (age >= 18 && hasDL){
//   console.log("You can drive.");
// } else {
//   console.log("You can't drive");
// } //OUTPUT: You can drive.

// let age = 15; 
// let hasDL = true;
// if (age >= 18 && hasDL){
//   console.log("You can drive.");
// } else {
//   console.log("You can't drive");
// } //OUTPUT: You can't drive.

// < Use of || OR >
// let day = "saturday";
// if (day === "saturday" || day === "sunday"){
//   console.log("It's a weekend!");
// } else {
//   console.log("Is's a weekday");
// }  // OUTPUT: It's a weekend!

// let day = "friday";
// if (day === "saturday" || day === "sunday"){
//   console.log("It's a weekend!");
// } else {
//   console.log("Is's a weekday");
// }  // OUTPUT: It's a weekday

// < Use of ! NOT >
// let isRaining = false;
// if(!isRaining){
//   console.log("You don't need an umbrella.")
// } else {
//   console.log("You need an umbrella.")
// }  // OUTPUT: You don't need an umbrella.

// let isRaining = true;
// if(!isRaining){
//   console.log("You don't need an umbrella.")
// } else {
//   console.log("You need an umbrella.")
// }  // OUTPUT: You need an umbrella.

