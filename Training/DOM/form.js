/*alert("Hello")
const form=document.querySelector("form");
const btn=document.getElementById("btn");
const name=document.getElementById("name");
const age=document.getElementById("age");
const gender=document.getElementsByName("gender");
const displayOutput=document.getElementById("displayOutput");
form.addEventListener("submit",function(e){
    e.preventDefault();
    console.log(name.value);
    console.log(age.value);
    console.log(gender[0].checked);
    console.log(gender[1].checked);
    displayOutput.innerText=`Name: ${name.value}   Age: ${age.value}     Gender: ${gender[0].checked ? "Male" : "Female"}`;
});

const form=document.querySelector("form");
const btn=document.getElementById("btn");
const num1=document.getElementById("num1");
const num2=document.getElementById("num2");
disp=document.getElementById("displayOutput");
document.getElementById("addBtn").addEventListener("click", function() {
    const result = parseInt(num1.value) + parseInt(num2.value);
    disp.innerText = `Addition: ${result}`;
});

document.getElementById("subBtn").addEventListener("click", function() {
    const result = parseInt(num1.value) - parseInt(num2.value);
    disp.innerText = `Subtraction: ${result}`;
});

document.getElementById("mulBtn").addEventListener("click", function() {
    const result = parseInt(num1.value) * parseInt(num2.value);
    disp.innerText = `Multiplication: ${result}`;
});

document.getElementById("divBtn").addEventListener("click", function() {
    const result = parseInt(num1.value) / parseInt(num2.value);
    disp.innerText = `Division: ${result}`;
});


// TIME
const clock=document.getElementById("clock");
setInterval(function(){
    let date=new Date();
    console.log(date.toLocaleTimeString());
    clock.innerText=new Date().toLocaleTimeString();
},1000);

async function asyncFun(){
  console.log("Start");
  const response=await fetch("https://api.quotable.io");
  console.log(await response.json());
  console.log("End");
}
asyncFun();
*/
let btn = document.getElementById("btn");
let quote = document.getElementById("quote");

btn.addEventListener("click", async function() {
    try {
        const response = await fetch("https://api.quotable.io/random");
        const data = await response.json();
        quote.innerText = `"${data.content}" - ${data.author}`;
    } catch (error) {
        console.error("Error fetching quote:", error);
        quote.innerText = "Failed to fetch quote. Please try again.";
    }
});
