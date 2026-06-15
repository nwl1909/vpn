const enter =
document.getElementById("enter");


const card =
document.querySelector(".card");


const music =
document.getElementById("music");



const volumeBox =
document.querySelector(".volume-box");



const volume =
document.getElementById("volume");


const volumeBtn =
document.getElementById("volumeBtn");






enter.onclick=()=>{



enter.classList.add("hidden");



card.classList.add("show");



volumeBox.classList.add("show");




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






volume.oninput=()=>{


music.volume=volume.value;



if(volume.value==0){


volumeBtn.innerHTML="🔇";


}

else{


volumeBtn.innerHTML="🔊";


}


};






volumeBtn.onclick=()=>{



if(music.volume>0){


music.volume=0;


volume.value=0;


volumeBtn.innerHTML="🔇";


}

else{


music.volume=.8;


volume.value=.8;


volumeBtn.innerHTML="🔊";


}


};
