function instalEventHandler(selector,type,fonction){
	var event = document.querySelector(selector);
	event.addEventListener(type,fonction);
}

function getRandomInterger(){
	return Math.floor(Math.random() * ((slider.length-1) - 0 + 1)) + 0;
}