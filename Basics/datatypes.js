"use strict"
// console.log("Datatypes")


// Datatypes :
// A- Premitive Datatypes  (Call  for value):
// 1- BigInt
// 2- String  
// 3- Number
// 4- Null
// 5- Undefined
// 6-Boolean (True/ False)
// 7- Symbol

// B- Reference Type (Non-Premiticves Datatypes)
// 1- Arrays 
// 2- Objects
// 3- Functions 

let name = "Dummy";
const age  = null;


console.log(typeof age);
console.log(typeof (age));
let valueInNUmber = Number(age)
console.log(typeof valueInNUmber)
console.log(valueInNUmber) 
console.group("Type Script")
const isLoggedIn = false
const outSideTemp = null
let userEmail;
const id = Symbol('123')
const myId = Symbol('123')
console.log(id) 
console.log(myId)
console.log(id === myId)

const value = ["C1"," C2" , "C2"];
const myObj = {
    name : "nazeer",
    age : "23" ,
    id: 123

}
 const myFuntion = function(){
    console.log("TypeScript Java Script");
    
 }
 console.log(typeof myFuntion)


//  Types of Memories 
// Stack Memory and Heap Memory
// Stack Memory use in the premitive datatypes and heap memory is used as non-premitive value 

// example of the stack and heap memory

let myname = "Nazeer Ahmad "
let secondname  = myname
secondname = "Ahmad Nazeer"
console.log(myname);
console.log(secondname);


let userone = {
    name: "nazeer",
    userEmail: "bunny@gmail.com" ,
    id: 1001
}
 let usertwo = userone

//  usertwo = {
//     name: "Ahmad",
//     userEmail: "ahmad@gmail.com",
//     id: 1002
//  }
usertwo.userEmail = "ahmad@gmail.com";

 console.log(userone);
 console.log(usertwo);
 