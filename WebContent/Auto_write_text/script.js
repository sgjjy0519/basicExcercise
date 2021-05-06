const text = "나를 응원해주는 사람들은 언제나 최고야!";

let index = 0;

function writeText(){
	document.body.innerText = text.slice(0,index);
	
	index++;
	
	if(index > text.length - 1){
		index = 0;
	}
}

setInterval(writeText, 200);