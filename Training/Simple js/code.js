//WAP to demonstrate break statement where you loop from 1-10 and search for a number
/*let num=1;
while(num<=10){
    console.log('The number is : ',num);
    if(num==5){
        console.log("Congrats! Number found that you have been searching for");
        break;
    }
    num++;
}*/
// When to use for loop 
//1. When you know how many times you want to run a loop
//2. When you want to iterate over an array and objects 

// WAP to print the following pattern
// *
// **
// ***
// ****
// *****
// ******
// *******
// ******
// *****
// ****
// ***
// **
// *
/*
for(let i=1;i<=7;i++){
    for(let j=1;j<=i;j++){
        process.stdout.write("*");
    }
    console.log("");
}
for(let i=6;i>=1;i--){
    for(let j=1;j<=i;j++){
        process.stdout.write("*");
    }
    console.log("");
}

// Array is the collection of similar data types or items
let ages=[10,20,30,40,50];

for(let i=0;i<ages.length;i++){
    console.log(ages[i]);
}

//Sum of natural number from 1 to 50 
let sum=0;
for(let i=1;i<=50;i++){
    sum=sum+i;

}
console.log("Total Sum = ",sum); 

let sum=0;
let numbers=[1,2,3,4,5,6,7,8,9,10];
for (let i=0;i<numbers.length;i++){
    sum=sum+numbers[i];
}
console.log("Total Sum = ",sum);

// WAP to find the largest number in an array
let largest=numbers[0];
for(let i=1;i<numbers.length;i++){
    if(numbers[i]>largest){
        largest=numbers[i];
    }
}console.log("Largest Number = ",largest);      
//array methods and properties
let names=['John','Doe','Smith','Alex','John'];
console.log(names);
names.push('Raj');// To add an element at the end of the array
console.log(names);
//WAP to print fibonacci series
let n=10;
let a=0;
let b=1;
let c;
console.log(a);
console.log(b);
for(let i=2;i<n;i++){
    c=a+b;
    console.log(c);
    a=b;
    b=c;
}
*/
// To add new element the array we use push for example name.push(data to be added) and this data will get added at last
// To remove the last element from the array we use pop for example name.pop()
// To add new element at the beginning we use unshift for example name.unshift(data to be added)
// To remove the first element from the array we use shift for example name.shift()