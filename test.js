// // 1.Alert in JavaScript
// alert("Hello World!");

//  2.This is a comment in JavaScript
 alert("Hello World!");

 // 3.Using of Variables in JavaScript
 var myVariableMoiz;
 myVariableMoiz = 10;
 var myVar2 = "Hello";
 var customerAge = 32;
 var a = 67 // a contains 67
 console.log(a)
 a = "moiz"
 console.log(a)
// let 8moiz = 7 // Not allowed this will throw an error
// let var = 7

// var a = 45;
// var a = "p"
let b = "baby";
const author = "MOIZ"
author = 5 // Throws an error because constant cannot be changed
b = 4
const moiz = 0;
let c = null // Throws an error because let cannot be redeclared
let d  = undefined  
{
  let b = 'this'
  console.log(b)
}
console.log(b)

<hr>
{/* 4.Premitive data types and Objects */}
{/* nn bb ss u - Primitives in Js */}
let a = null;
let b = 345;
{/* let c = true;  can also be false */}
let d = BigInt("567") + BigInt("3")
let e = "Harry"
let f = Symbol("I am a nice symbol")
let g
console.log(a, b, c , d, e, f, g)
console.log(typeof c)

// Non Primitive Data Type - Objects in Js
const item = {
  "Harry": true,
  "Shubh": false,
  "Lovish": 67,
  "Rohan": undefined
}
console.log(item["Shubh"])

<hr>
{/* 6.Practicing Chap # 1 */}
// Chapter 1 - Q1
let a = "Harry"
let b = 6
console.log(a + b)

// Chapter 1 - Q2
console.log(typeof (a+b))

// Chapter 1 - Q3
const a1 = {
  name: "Harry",
  section: 1,
  isPrincipal: false
}
// a1 = 45
// a1 = {}

// Chapter 1 - Q4
a1['friend'] = "Shubham"  
a1['name'] = "Lovish"  
console.log(a1)

// Chapter 1 - Q5
const dict = {
  appreciate: "recognize the full worth of.",
  ataraxia: "a state of freedom from emotional disturbance and anxiety",
  yakka: "work, especially hard work."
}

console.log(dict['yakka'])





 {/* // 5.Multiplication Operation */}
  var myVar1 = 5;
 myVar1 = myVar1 + 15;
 myVar1 = myVar1 - 5;
 myVar1 = myVar1 * 15;
 myVar1 = myVar1 / 5;

 myVar1 += 5;
 myVar1 *= 80;
 myVar1 /= 5;
 myVar1 -= 20;

 // 5.Console and Document
 document.write(var names);
 console.log(Abdul Moiz);

 // 6.Booleans And Strings

 var iLikeMeat = "true";
 // This is String

 var iLikeMango = true;
 var iLikeFruits = false;
//  This is Boolean

//  7.if or else  Statement
 var iLikeMeat = "true";

 if (iLikeMeat) {

     document.write("iLikeMeat is true");

 }
 var myAge = 21;

 if (myAge > 30) {
     document.write("You are over 30!");   

 } else if (myAge > 20) {
     document.write("you are over 20!");

 } else if (myAge > 10) {
     document.write("you are over 10!");

 } else {
     document.write("you are not over 10");
 }

 // 8.Comparison
 if (x > 5){}
//  >
// <
// =>
// =<
//  ===
//  ==
//  !==
//  !===
//  In this Statement  these signs are Comparison

//  9.Logical operators
var myAge5 = 25;
 if (myAge5 >= 10 && myAge5 <= 30) {

}

//  In this statement && are Logical Operators

 {/* 10.LOOPS In JavaScript */}
{/* // i. While Loops */}
 var age = 5;

 while (age < 10){
    console.log("your age is less than 10"); 
 } 
     document.write("your are now over 10");

{/* // ii. Of Loops */}
var links = document.getElementsByTagName("a");

for (i = 1; i <= links.length; i++) {
    console.log("this is link number" + i); 
}
document.write("all links now looped");


{/* // 11. Break & Continue */}
for (i = 1; i < 10; i++) {
    if ( i == 5 || i === 3){
        continue;
    }
    console.log(i);


    if (i == 7){
        break;
    }

}
console.log("I have broken out of the loops");


{/* // 12. Fucntions */}
function getAverage  (a,b) {
    var average = (a + b) / 2;
    console.log(average);
}
function alert(string){
    //some code
}
getAverage(7,12);
alert("Hello World!");

{/* // 13.Local v/s Global */}
var foo = 20; //Global variable

function myFunction() {
    var bar = 10; //Local variable
}

{/* // 14. Numbers */}
var a = 5;
var b = 6;

console.log(a = b);
{/* //Note: "5" these are not numbers these are strings */}

{/* // 15.NAN (Not a Number) */}
var a = "apple";
var b = 6;

console.log(a * b);
// Note: a is not a number which is NaN.

{/* // 16.Strings */}
var myString = "I am a 'happy' new string";

console.log(myString);

{/* // 17.Slice and Split Strings. */}
{/* // i. Slice String */}
var str = "Hello, World!";
{/* //str="Hello, World" */}

var str2 = str.slice(2,9);
{/* //str2="llo, Wo"; */}

{/* //ii. Split String */}
var tags = "meat, ham, slami, prok, chicken, beef";
{/* // i. tags="meat, ham, slami, prok, chicken, beef". */}

var tagsArray = tags.split(",");
{/* // ii. tagsArray=["meat", "ham," "slami," "prok", "chicken," "beef"]. */}

{/* // 18. Arrays */}
var myArray = []
myArray[0] = 25;
myArray[1] = 635;
myArray[2] = true;
myArray[3] = "Hello";

{/* // myArray now = [25, 635, true, "Hello"]. */}

{/* // 19.Introduction to Ojects. */}
