 'use strict';   // Mode strict du JavaScript

/*************************************************************************************************/
/* ****************************************** DONNEES ****************************************** */
/*************************************************************************************************/


var slider =[
	{image:"img/1.jpg", p:"Street art" },
	{image:"img/2.jpg", p:"Fast lane"},
	{image:"img/3.jpg", p:"Colorful building"},
	{image:"img/4.jpg", p:"Night"},
	{image:"img/5.jpg", p:"Fast lane"},
	{image:"img/6.jpg", p:"Eiffel tower"},
]
var index = 0;
var intervalId;

const DROIT = 39 ;
const GAUCHE = 37;
const ESPACE = 32;
const RANDOM = 82;
/*************************************************************************************************/
/* ***************************************** FONCTIONS ***************************************** */
/*************************************************************************************************/
function onClicktodlbar(){
	var actionClick = document.querySelector('ul');
	actionClick.classList.toggle('todlbar');
}

function refreshSlider(){
	var img = document.querySelector('img');
	img.src = slider[index].image;
	var par = document.querySelector('p');
	par.textContent =slider[index].p;
}

function goToNext(){
	if (index == slider.length -1) {
		index = 0;
	}
	else{
		index ++;
	}
	refreshSlider()
}

function goToPrev(){
	if(index == 0){
		index = slider.length -1;
	}
	else{
		index--;
	}
	refreshSlider();
}

function goToPlay(){
		if(intervalId == null){
			intervalId = setInterval(goToNext,1000 );
		}
		else{
			clearInterval(intervalId);	
			intervalId = null;
		}
		var fa = document.querySelector('.slider-play i');
		fa.classList.toggle('fa-play');
		fa.classList.toggle('fa-pause');
}

function goToRandom(){
	var ran;
	do{
		ran = getRandomInterger();
	}
	while(ran == index)
		index = ran ;
		refreshSlider();
}

function eventKey(e){
	switch(e.keyCode){
		case DROIT:
		goToNext();
		break;

		case GAUCHE:
		goToPrev();
		break;
     
		case ESPACE:
		goToPlay();
		break; 

		case RANDOM:
		goToRandom();
		break;
	}

}


/*************************************************************************************************/
/* ************************************** CODE PRINCIPAL *************************************** */
/*************************************************************************************************/
document.addEventListener('DOMContentLoaded',function(){
refreshSlider();
instalEventHandler('.slider-previous','click',goToPrev);
instalEventHandler('.slider-next','click',goToNext);
instalEventHandler('.slider-play','click',goToPlay);
instalEventHandler('.slider-random','click',goToRandom);
instalEventHandler('#toogle-todlbar','click',onClicktodlbar);
document.addEventListener('keyup',eventKey);
});



