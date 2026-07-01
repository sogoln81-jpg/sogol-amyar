/* ===========================================
   OUR UNIVERSE
===========================================*/

const startDate = new Date("2020-07-29T22:40:00");

const counter = document.getElementById("counter");

function updateCounter(){

let now = new Date();

let diff = now - startDate;

let seconds = Math.floor(diff/1000);

let years = Math.floor(seconds/31557600);

seconds %= 31557600;

let months = Math.floor(seconds/2629800);

seconds %= 2629800;

let days = Math.floor(seconds/86400);

seconds %=86400;

let hours = Math.floor(seconds/3600);

seconds%=3600;

let minutes=Math.floor(seconds/60);

seconds%=60;

counter.innerHTML=

`
${years} Years ❤️<br>
${months} Months ❤️<br>
${days} Days ❤️<br>
${hours} Hours ❤️<br>
${minutes} Minutes ❤️<br>
${seconds} Seconds
`;

}

setInterval(updateCounter,1000);

updateCounter();



/* ========= Loader ========= */

window.onload=()=>{

setTimeout(()=>{

document.getElementById("loader").style.opacity="0";

setTimeout(()=>{

document.getElementById("loader").style.display="none";

},900);

},1800);

};



/* ========= Music ========= */

document.getElementById("music").onclick=()=>{

window.open(

"https://youtu.be/tt2k8PGm-TI",

"_blank"

);

};



/* ========= Typing ========= */

const story=

"On a quiet summer night beneath billions of stars, our hearts found each other. Since then, every sunrise has been more beautiful because of you.";

let index=0;

const target=document.getElementById("storyText");

target.innerHTML="";

function type(){

if(index<story.length){

target.innerHTML+=story.charAt(index);

index++;

setTimeout(type,35);

}

}

setTimeout(type,2500);/* ==========================================
        STARS + SHOOTING STAR
========================================== */

const canvas = document.getElementById("sky");
const ctx = canvas.getContext("2d");

let w, h;

function resize(){

w = canvas.width = window.innerWidth;

h = canvas.height = window.innerHeight;

}

resize();

window.addEventListener("resize",resize);

const stars=[];

for(let i=0;i<260;i++){

stars.push({

x:Math.random()*w,

y:Math.random()*h,

r:Math.random()*2,

a:Math.random(),

d:Math.random()*0.02

});

}

function drawSky(){

ctx.clearRect(0,0,w,h);

ctx.fillStyle="#050505";

ctx.fillRect(0,0,w,h);

for(let s of stars){

ctx.beginPath();

ctx.arc(s.x,s.y,s.r,0,Math.PI*2);

ctx.fillStyle="rgba(255,215,120,"+s.a+")";

ctx.fill();

s.a+=s.d;

if(s.a>1||s.a<0.2){

s.d=-s.d;

}

}

requestAnimationFrame(drawSky);

}

drawSky();



/* ==========================================
        SHOOTING STAR
========================================== */

function shootingStar(){

const star=document.createElement("div");

star.className="shooting-star";

star.style.left=(Math.random()*window.innerWidth)+"px";

star.style.top=(Math.random()*250)+"px";

document.body.appendChild(star);

setTimeout(()=>{

star.remove();

},1600);

}

setInterval(shootingStar,6500);



/* ==========================================
        FLOATING HEARTS
========================================== */

function heart(){

const h=document.createElement("div");

h.className="heartFloat";

h.innerHTML="❤️";

h.style.left=Math.random()*100+"vw";

h.style.fontSize=(18+Math.random()*20)+"px";

document.body.appendChild(h);

setTimeout(()=>{

h.remove();

},8000);

}

setInterval(heart,900);



/* ==========================================
        FADE ON SCROLL
========================================== */

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}

});

});

document.querySelectorAll(".glass").forEach(el=>{

observer.observe(el);

});/* ==========================================
          GOLDEN CURSOR LIGHT
========================================== */

const light=document.createElement("div");

light.style.position="fixed";
light.style.width="220px";
light.style.height="220px";
light.style.borderRadius="50%";
light.style.pointerEvents="none";
light.style.background="radial-gradient(circle,rgba(212,175,55,.18),transparent 70%)";
light.style.zIndex="-1";
light.style.transition="transform .08s linear";

document.body.appendChild(light);

document.addEventListener("mousemove",(e)=>{

light.style.transform=
`translate(${e.clientX-110}px,${e.clientY-110}px)`;

});

/* ==========================================
            PHOTO PARALLAX
========================================== */

const photo=document.querySelector(".mainPhoto");

document.addEventListener("mousemove",(e)=>{

const x=(e.clientX/window.innerWidth-.5)*18;

const y=(e.clientY/window.innerHeight-.5)*18;

photo.style.transform=
`rotateY(${x}deg) rotateX(${-y}deg) scale(1.04)`;

});

document.addEventListener("mouseleave",()=>{

photo.style.transform="rotateY(0) rotateX(0) scale(1)";

});


/* ==========================================
            WELCOME MESSAGE
========================================== */

setTimeout(()=>{

const msg=document.createElement("div");

msg.innerHTML=
"✨ Welcome to Our Universe ✨";

msg.style.position="fixed";
msg.style.top="30px";
msg.style.left="50%";
msg.style.transform="translateX(-50%)";
msg.style.padding="15px 35px";
msg.style.background="rgba(0,0,0,.75)";
msg.style.border="1px solid gold";
msg.style.borderRadius="40px";
msg.style.color="gold";
msg.style.backdropFilter="blur(12px)";
msg.style.zIndex="999";

document.body.appendChild(msg);

setTimeout(()=>{

msg.style.transition=".8s";
msg.style.opacity="0";

setTimeout(()=>{

msg.remove();

},900);

},4000);

},2500);


/* ==========================================
            GALLERY EFFECT
========================================== */

document.querySelectorAll(".photos img")
.forEach(img=>{

img.addEventListener("click",()=>{

img.style.transition=".5s";

if(img.style.transform=="scale(1.5)"){

img.style.transform="scale(1)";

img.style.zIndex="1";

}else{

img.style.transform="scale(1.5)";

img.style.zIndex="999";

}

});

});


/* ==========================================
            FINAL MESSAGE
========================================== */

console.log(
"%cMade with ❤️ for Sogol & Amyar",
"color:#d4af37;font-size:18px;"
);
