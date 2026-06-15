const enter = document.getElementById("enter");
const card = document.querySelector(".card");
const music = document.getElementById("music");



let started=false;



enter.onclick=()=>{


if(started)return;

started=true;



enter.classList.add("hidden");


card.classList.add("show");



music.volume=0;

music.loop=true;

music.play();



let fade=setInterval(()=>{

if(music.volume<0.7){

music.volume+=0.02;

}

else{

clearInterval(fade);

}

},100);



};



/* particles */


const canvas=document.getElementById("stars");

const ctx=canvas.getContext("2d");


function resize(){

canvas.width=innerWidth;

canvas.height=innerHeight;

}

resize();

window.onresize=resize;



let stars=[];


for(let i=0;i<180;i++){

stars.push({

x:Math.random()*canvas.width,

y:Math.random()*canvas.height,

r:Math.random()*2,

s:Math.random()*0.5+0.1

});

}



function animate(){

ctx.clearRect(0,0,canvas.width,canvas.height);



stars.forEach(s=>{


ctx.beginPath();

ctx.arc(
s.x,
s.y,
s.r,
0,
Math.PI*2
);


ctx.fillStyle="white";

ctx.fill();



s.y+=s.s;


if(s.y>canvas.height){

s.y=0;

}


});



requestAnimationFrame(animate);

}


animate();
