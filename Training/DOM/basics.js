let elem=document.getElementById("btn2");
elem.addEventListener("click",function(){
    document.body.style.backgroundColor="blue";
    document.body.style.color="white";
});
let btn2=document.getElementById("btn3");
btn2.addEventListener("click",function(){
    document.body.style.backgroundColor="white";
    document.body.style.color="blue";
});
let p=document.querySelector("p");
p.addEventListener("click",function(){
    p.style.color="blue";
    p.style.fontSize="30px";
    p.style.backgroundColor="yellow";
});
let btn=document.getElementById("btn");
let section= document.getElementById("section");
btn.addEventListener("click",function(){
    let createdElement=document.createElement("p");
    createdElement.innerText="This is a new paragraph";
    section.append(createdElement)
});
// Write code so that when button is clicked then new image is generated
let btn5 = document.getElementById("btn5");
let img = document.getElementById("section1");
btn5.addEventListener("click",function(){
    let newImg = document.createElement("img");
    newImg.src="https://t3.ftcdn.net/jpg/08/45/89/26/360_F_845892641_2m17p2d4pXXPTQ8biFum77hQrXrA9jOx.jpg";
    // newImg.src="";
    newImg.width = 300;
    img.append(newImg);
});
