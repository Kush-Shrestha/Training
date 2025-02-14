/*function table(a){
    for(let i=1;i<=10;i++){
        console.log("%d*%d=%d",a,i,a*i);
    }
}
table(2)
function callAFn(callback){
callback();
}
function callBackFn(){
    console.log("This is a callback function");
}
callAFn(callBackFn);
function uppercase(name){
    return name.toUpperCase();
}
console.log(uppercase(" My name is Kushal"));

// passing function in function
function higherOrder(callback){
    // console.log("This is higher order function");
    callback();
}
function callback(){
    // console.log("This is a callback function");
    return "This is a callback function";
}
higherOrder(callback);


function mainfn(){
    printHello();
    console.log("this is a function");
   
}
function printHello(){
    console.log("Hello");
}
mainfn();
*/
/*
function callTime(time){
    time(2);
}
function time(callTime){
if (callTime < 4){
    console.log("Good Evneing");
}
else{
    console.log("Good Afternoon");
}
}
callTime(time);

function getDataFromDatabase(callback){
console.log("This is the data from database");

    let dataToProcess="random data";
    callback(dataToProcess); 
}
function processData(data){
    console.log("Processing the data: "+ data);
}
getDataFromDatabase(processData); */

let city=["Delhi","Mumbai","Kolkata","Chennai"];
// let sortedArray=city.sort();
city.sort();    
console.log(city);// They are both same
// console.log(sortedArray);
 
// //Array push
let city1=["Delhi","Mumbai","Kolkata","Chennai"];
// city1.push("Tamil Nadu");
// console.log(city1);
// city1.unshift("Bangalore");
// console.log(city1);
let a=city1.slice(1,3);
console.log(a);