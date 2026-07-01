const PASSWORD = "29072020";

function checkPassword() {
    const pass = document.getElementById("password").value;

    if (pass === PASSWORD) {
        document.getElementById("login").style.display = "none";
        document.getElementById("content").style.display = "block";

        updateCounter();
        setInterval(updateCounter, 1000);

        typeText();

        createHearts();

    } else {
        document.getElementById("error").innerHTML = "Wrong Password ❤️";
    }
}

const startDate = new Date("2020-07-29T22:40:00");

function updateCounter(){

const now = new Date();

let diff = now - startDate;

let days = Math.floor(diff/1000/60/60/24);

diff -= days*24*60*60*1000;

let hours=Math.floor(diff/1000/60/60);

diff-=hours*60*60*1000;

let minutes=Math.floor(diff/1000/60);

diff-=minutes*60*1000;

let seconds=Math.floor(diff/1000);

document.getElementById("counter").innerHTML=

`${days} Days<br>

${hours} Hours<br>

${minutes} Minutes<br>

${seconds} Seconds`;

}

const text="Among billions of stars, the best thing that ever happened to me was you. ❤️";

let i=0;

function typeText(){

if(i<text.length){

document.getElementById("loveText").innerHTML+=text.charAt(i);

i++;

setTimeout(typeText,70);

}

}

document.getElementById("musicBtn").onclick=function(){

document.getElementById("song").play();

}

function createHearts(){

setInterval(()=>{

const heart=document.createElement("div");

heart.innerHTML="❤️";

heart.style.position="fixed";

heart.style.left=Math.random()*100+"vw";

heart.style.top="100vh";

heart.style.fontSize=(20+Math.random()*20)+"px";

heart.style.animation="float 6s linear";

document.getElementById("hearts").appendChild(heart);

setTimeout(()=>heart.remove(),6000);

},500);

}

const style=document.createElement("style");

style.innerHTML=`

@keyframes float{

0%{

transform:translateY(0);

opacity:1;

}

100%{

transform:translateY(-110vh);

opacity:0;

}

}

`;

document.head.appendChild(style);
