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


// <<<<<<<<<<< Arrow Function >>>>>>>>>

// 1. Adding two Numbers...........
const add =(a,b) => a+b;
console.log(add(5,3));
// output: 8

// 2.Squaring a Number.............
const square = x => x*x;
console.log(square(4));
// output: 16

// 3.Converting a String to Uppercase........
const toUpperCase = str => str.toUpperCase();
console.log(toUpperCase('hello'));
// output: HELLO

// 4.Doubling Each Element in an Array....
const doubleArray = arr => arr.map (x => x*2);
console.log(doubleArray([1,2,3,4]));
// output: [2, 4, 6, 8]

// 5.Checking if a number is even.........
const isEven = num => num % 2 === 0;
console.log(isEven(0));
console.log(isEven(2));
console.log(isEven(4));
console.log(isEven(6));
console.log(isEven(8));
console.log(isEven(10));
console.log(isEven(12));
console.log(isEven(52));
// output: true 
console.log(isEven());
console.log(isEven(1));
console.log(isEven(3));
console.log(isEven(5));
console.log(isEven(7));
console.log(isEven(9));
console.log(isEven(11));
console.log(isEven(111));
// output: false





