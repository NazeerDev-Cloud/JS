let someNumber =  33
 let stringNumber = String(someNumber)
 console.log(stringNumber)
 console.log(typeof stringNumber)

 let value = 3
 let negvalue = -value
 console.log(negvalue)

 let gameCounter = 100;
 gameCounter++;
 console.log(gameCounter)

//  Another lecture on string methods

const name = "Nazeer"
const repoCount  = 10
 
console.log(name + repoCount +  "value");
console.log(`hello my name is  ${name} and my repo count is ${repoCount} and the value is 10 `);


// Methods of Strings 
 const gameName = new String('PUBG-Battle-Ground')
//  length
 console.log(gameName.length);
//  to lower case 
 console.log(gameName.toLowerCase()); 
//  charAt
 console.log(gameName.charAt(2));
//  indexof
 console.log(gameName.indexOf('G'));
//  substring
 const game = gameName.substring(0,3)
 console.log(game);
//  slice
 const oneGame = gameName.slice(-8,4)
 console.log(oneGame);
//  trim
const newStringOne = "     Bunny        "
console.log(newStringOne);
console.log(newStringOne.trim());


// replace

const url ="https://facebook.com"
console.log( url.replace('facebook', 'google')
);

 console.log(gameName.split('-'));
 
 