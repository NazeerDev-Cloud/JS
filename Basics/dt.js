// Dates

//  Date is Object
let dt = new Date()
// console.log(dt);
// console.log(dt.toString());
// console.log(dt.toLocaleString());
// console.log(dt.toDateString());
// console.log(dt.toJSON());
// console.log(typeof dt);


// let myCreationDate  = new Date (2023, 0 , 23 )
// console.log(myCreationDate.toDateString());

let myCt  = new Date ("01-14-2002" )
// console.log(myCt.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCt.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate.getDay()+1);
console.log(newDate.getMonth());
 newDate.toLocaleString('default',{
    timeZone: 'est',
    weekday: "long"
 })

