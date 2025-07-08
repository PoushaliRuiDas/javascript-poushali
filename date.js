/*JavaScript Date objects represent a single moment in time in a platform-independent format.
Date objects encapsulate an integral number that represents milliseconds since the midnight at the beginning of January 1, 1970, UTC */

//Dates

/* let myDate = new Date
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toDateString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());

console.log(typeof myDate);

let myCreateDate = new Date("03-05-2004")
console.log(myCreateDate.toLocaleString());

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCreateDate.getTime());

console.log(Math.floor(Date.now()/1000));   */

let newDate = new Date()
console.log(newDate.getDate());
console.log(newDate.getDay());
console.log(newDate.getMonth()+1);

//you can concatenate for projects

newDate.toLocaleString('default',{
    weekday: "long",
    
    //for using property click ctrl+space
})
