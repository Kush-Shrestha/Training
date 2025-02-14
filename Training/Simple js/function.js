/*function Name(){
    console.log("Hello World");
}
Name();
//parameters and arguments 
function sum(a,b,c){
console.log("The sum of is ",a+b+c);
}

sum(10,20,30);//arguments

// WAP to make a function that takes array as argument and pribt the entire array in a loop
function printarray(array){
    for(let i=0;i<array.length;i++){
        console.log(array[i]);
    }
}
printarray([1,2,3,4,5,6,7,8,9,10]);*/

// Exampple of primitive and non primitive data type 
/*
let a=10;
function modify(a){
    a=10000000;
    console.log(a);
}
modify(a);

let arr=[1,2,3,4,5];
function modifyarray(arr){
    arr[0]=100;
    console.log(arr);
}
modifyarray(arr);
console.log(arr);

let myfirstArray=[1,2,3,4]
let mysecondArray=myfirstArray;
mysecondArray[2]=300;  // Changing the value in array also changes the value in the main array function
console.log(mysecondArray);
console.log(myfirstArray);


function passByvalue(){
    console.log("Hello World!");
    return "hello"
}
passByvalue();
let value = passByvalue();

let arr=[1,2,3,4,5]
function passbyreference(brr){
brr[0]=900
}
passbyreference(arr);
console.log(arr);

let arr=[1,2,3,4,5];
function myarray(array){
   for(let i=0;i<array.length;i++){
       if(array[i]==array){
        array.splice(i,1);
        console.log("This number was here in the array and got removed");
       }
    }
    console.log("This number is not here in the array");
   };
myarray(2);
console.log(array);
 
function greet(callback){
    console.log("Hello World");
    callback();
}
greet(greer2);
function greer2(){
    console.log("Hello World 2");
}
const arrowfunction=()=>{
    console.log("Hello World");
};
arrowfunction();*/
const arrowfunction2=(a,b)=>{
    console.log("The sum is ",a+b);
    return a+b;
};
arrowfunction2(10,20);

const square=(a)=>{
    // console.log("The square of the number is ",a*a);
    return a*a;
}
console.log(square(4));
square(5);
   
//objects