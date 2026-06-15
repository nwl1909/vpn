const enter=document.getElementById("enter");
const card=document.querySelector(".card");
const music=document.getElementById("music");


enter.onclick=()=>{


enter.classList.add("hidden");


card.classList.add("show");



music.volume=0;

music.loop=true;

music.play();



let fade=setInterval(()=>{


if(music.volume<0.8){

music.volume+=0.02;

}

else{

clearInterval(fade);

}


},100);


};
