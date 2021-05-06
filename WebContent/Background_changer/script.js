const btn = document.getElementById("btn");

btn.addEventListener("click",function(){
	document.body.style.background = randomBg(); // 배경색변경
});

function randomBg() { // ??
    return `hsl(${Math.floor(Math.random() * 360)}, 100%, 50%)`;
}