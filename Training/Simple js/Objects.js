// Objects in JavaScript are the key-valued pair
// Objects have properties and methods
// Objects consists of collection of different data types
/*
const person={
    name:"John",
    age:30,
    hobbies:["reading","coding","playing"]
}
console.log(person.hobbies[0]);

const twitter={
    name:"Elon Musk",
    username:"elonmusk",
    followers:214800000000,
    following:955,
    verified:true,
    position:"CEO of Tesla",
    increasefollowingCount:function(){
        this.following++;
    }
}
twitter.increasefollowingCount();
console.log(twitter.position);
console.log(twitter.following);

const windows={
    name:"Bill Gates",
    username:"billgates",
    followers:214800000000,
    following:955,
    verified:true,
    position:"CEO of Microsoft",
   deleteAccount:function(){
    this.name="";
    this.username="";
   }
}

windows.deleteAccount();
console.log(windows.username);
console.log(windows);

const Student={
    name:"Kushal",
    age:19,
    hobbies:["reading","coding","playing"],
}*/

//WAP to construct an objects which should have the following data types
// string,number,boolean,array,methods
/*
const userProfile={
    name:"Kushal",
    age:19,
    hobbies:["reading","coding","playing"],
    contractInfo:{
        email:"shresthakushal097@gmail.com",
        socialMedia:{
            facebook:"Kushal Shrestha",
        },
    isStudent:true,
    getAge:function(){
        this.age++;
    }
}};   
document.write(userProfile.name);
document.write(userProfile.age);
document.write(userProfile.hobbies[0]);
document.write(userProfile.contractInfo.email);
document.write(userProfile.contractInfo.socialMedia.facebook);
document.write(userProfile.isStudent);
userProfile.getAge();
document.write(userProfile.age);
console.log(userProfile);

fruits.forEach((fruit) => {
    console.log(fruit);
});
//forEach is used to iterate over the array
//forEach is a callback function's method
let nameList = ["King","Kushal","Kush"];
nameList.forEach((name, naam) => {
    console.log(name);
    console.log(naam);
});
let marks=[10,20,30]
let newMarks = marks.map((mark, index) => {
    return mark + 1;
});
console.log(marks);
console.log(newMarks);
// Use map method to convert to conver the names to uppercase
let names=["king","kushal"];
let newNames=names.map((name,index)=>{
    return name.toUpperCase();
});
console.log(names);
console.log(newNames);
// Filter method is used to  filter out some elements based on the condition
const maks=[10,20,30,40,50];
let newMaks=maks.filter((mark,index)=>{
    return mark>30;
});
console.log(maks)
console.log(newMaks);
// Question from the given array out filter out the number
const randomArray=[
    1,true,"a",[11,2,3],()=>{},
    {
        name:"Kushal",
    },8
];
let newArray=randomArray.filter((element,index)=>{
    return !isNaN(element) && typeof element==="number";
});
console.log(randomArray);
console.log(newArray);

// Destructring in JavaScript is the method to extract the values from the object or array
let obj = {
    name:"Kushal",
    age:19,
    hobbies:["reading","coding","playing"],
};
console.log(obj.hobbies[0]);

//reduce method is used to reduce the array to a single value
const products=[
    {titile:"Phone",price:100000, quantity:0},// out of stokes
    {titile:"Tablet",price:200000, quantity:3},
    {titile:"Laptop",price:300000, quantity:13},
];
const subTotal = products.reduce((acc, product) => {
    return product.quantity*product.price + acc;
},0);
console.log(subTotal);*/
