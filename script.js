let display = document.getElementById("display");
let buttons = document.querySelectorAll(".btn");
let sound = document.getElementById("clickSound");
let toggle = document.getElementById("themeToggle");

let input = "";

/* LOAD SAVED THEME */

if(localStorage.getItem("theme") === "light"){
document.body.classList.add("light");
toggle.textContent = "🌙 Dark Mode";
}

/* BUTTON CLICK */

buttons.forEach(btn => {

btn.addEventListener("click", () => {

let value = btn.innerText;

/* SOUND */

if(sound){
sound.currentTime = 0;
sound.play();
}

/* VIBRATION */

if(navigator.vibrate){
navigator.vibrate(40);
}

/* CALCULATOR LOGIC */

if(value === "AC"){

input = "";
display.value = "";

}

else if(value === "="){

try{

input = eval(input).toString();
display.value = input;

}

catch{

display.value = "Error";
input = "";

}

}

else{

input += value;
display.value = input;

}

});

});


/* KEYBOARD SUPPORT */

document.addEventListener("keydown",(e)=>{

let key = e.key;

if(key === "Enter") key = "=";

if(key === "Backspace"){

input = input.slice(0,-1);
display.value = input;

return;

}

let allowed = "0123456789+-*/.%=";

if(allowed.includes(key)){

if(key === "="){

try{

input = eval(input).toString();
display.value = input;

}

catch{

display.value = "Error";
input = "";

}

}

else{

input += key;
display.value = input;

}

}

});


/* DARK LIGHT MODE TOGGLE */

toggle.addEventListener("click",()=>{

document.body.classList.toggle("light");

if(document.body.classList.contains("light")){

toggle.textContent = "🌙 Dark Mode";
localStorage.setItem("theme","light");

}
else{

toggle.textContent = "☀️ Light Mode";
localStorage.setItem("theme","dark");

}

});