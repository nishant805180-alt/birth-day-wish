// ===============================
// COUNTDOWN
// ===============================

const countdownTarget = new Date("July 11, 2026 00:00:00").getTime();

const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

function updateCountdown() {

    const now = new Date().getTime();

    const distance = countdownTarget - now;

    if(distance <= 0){

        days.textContent = "00";
        hours.textContent = "00";
        minutes.textContent = "00";
        seconds.textContent = "00";

        return;
    }

    days.textContent = Math.floor(distance / (1000 * 60 * 60 * 24));

    hours.textContent = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    minutes.textContent = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    seconds.textContent = Math.floor((distance % (1000 * 60)) / 1000);

}

updateCountdown();

setInterval(updateCountdown,1000);


// ===============================
// MUSIC
// ===============================

const music = document.getElementById("bgMusic");

const musicBtn = document.getElementById("musicBtn");

let playing = false;

musicBtn.onclick = function(){

    if(playing){

        music.pause();

        musicBtn.innerHTML = "🎵 Play Music";

    }else{

        music.play();

        musicBtn.innerHTML = "⏸ Pause Music";

    }

    playing = !playing;

}


// ===============================
// PHOTO SLIDER
// ===============================

const photos=[

"surant\p1.jpeg",

"surant\p2.jpeg",

"surant\p3.jpeg",

"surant\p4.jpeg",

"surant\p5.jpeg",

"surant\p6.jpeg",

"surant\p7.jpeg",

"surant\p8.jpeg",

"surant\p9.jpeg",

"surant\p10.jpeg",

"surant\p11.jpeg",

"surant\p12.jpeg",

"surant\p13.jpeg",

"surant\p14.jpeg",

];

let current=0;

const heroImage=document.querySelector(".hero-img");

/* setInterval(()=>{

current++;

if(current>=photos.length){

current=0;

}

heroImage.src=photos[current];

},3000); */


// ===============================
// SURPRISE POPUP
// ===============================

function surprise(){

document.getElementById("birthdayPopup").style.display="flex";

confettiEffect();

}

function closePopup(){

document.getElementById("birthdayPopup").style.display="none";

}

window.onclick=function(e){

const popup=document.getElementById("birthdayPopup");

if(e.target===popup){

popup.style.display="none";

}

}


// ===============================
// FLOATING HEARTS
// ===============================

const heartContainer=document.getElementById("hearts");

function createHeart(){

const heart=document.createElement("div");

heart.className="heart";

heart.innerHTML="❤️";

heart.style.left=Math.random()*100+"%";

heart.style.animationDuration=(4+Math.random()*5)+"s";

heart.style.fontSize=(15+Math.random()*30)+"px";

heartContainer.appendChild(heart);

setTimeout(()=>{

heart.remove();

},9000);

}

setInterval(createHeart,350);


// ===============================
// FALLING PETALS
// ===============================

function createPetal(){

const petal=document.createElement("div");

petal.className="petal";

petal.innerHTML="🌸";

petal.style.left=Math.random()*100+"%";

petal.style.animationDuration=(5+Math.random()*5)+"s";

petal.style.fontSize=(18+Math.random()*15)+"px";

document.body.appendChild(petal);

setTimeout(()=>{

petal.remove();

},10000);

}

setInterval(createPetal,900);


// ===============================
// BALLOONS
// ===============================

const colors=["red","blue","yellow","purple"];

function createBalloon(){

const balloon=document.createElement("div");

balloon.classList.add("balloon");

balloon.classList.add(colors[Math.floor(Math.random()*colors.length)]);

balloon.style.left=Math.random()*100+"%";

balloon.style.animationDuration=(10+Math.random()*6)+"s";

document.body.appendChild(balloon);

setTimeout(()=>{

balloon.remove();

},17000);

}

setInterval(createBalloon,2500);


// ===============================
// SIMPLE CONFETTI
// ===============================

function confettiEffect(){

for(let i=0;i<120;i++){

let confetti=document.createElement("div");

confetti.style.position="fixed";

confetti.style.width="8px";

confetti.style.height="8px";

confetti.style.left=Math.random()*100+"vw";

confetti.style.top="-20px";

confetti.style.background=`hsl(${Math.random()*360},100%,60%)`;

confetti.style.zIndex="99999";

confetti.style.borderRadius="50%";

confetti.style.pointerEvents="none";

confetti.style.transition="4s linear";

document.body.appendChild(confetti);

setTimeout(()=>{

confetti.style.transform=`translateY(${window.innerHeight+100}px) rotate(720deg)`;

},50);

setTimeout(()=>{

confetti.remove();

},4500);

}

}


// ===============================
// AUTO PLAY MUSIC AFTER CLICK
// ===============================

document.body.addEventListener("click",function(){

if(!playing){

music.play();

playing=true;

musicBtn.innerHTML="⏸ Pause Music";

}

},{once:true});