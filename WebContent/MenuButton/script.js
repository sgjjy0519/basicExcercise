const btn = document.getElementById('btn'); // btn객체 
const nav = document.getElementById('nav'); // nav객체

btn.addEventListener("click",function(){
	nav.classList.toggle('active');
	btn.classList.toggle('active');
})