const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let firstCard, secondCard;
let lockBoard = false;
var nbmatch =0;
var count=50;

var counter=setInterval(timer, 1000);
function timer()
{
 count=count-1;
 if (count <= 0)
 {
  return;
 }
 if (count === 50){
 	alert("You are too late");
 	location.remove();
 }

 document.getElementById("timer").innerHTML=count + " secs";
}




function flipCard() {
	if (lockBoard===true)return;
	if (this === firstCard) return;
	this.classList.add('flip');

	if (!hasFlippedCard) {
	//firstClick
	 hasFlippedCard = true;
	 firstCard = this;
	 return;
	}

	//Second clicked
	secondCard = this;

	checkMatch();
}

function checkMatch(count){
	//do cards match ?
	if (firstCard.dataset.framework === secondCard.dataset.framework) {
		//it is a match
		match();
		nbmatch++;
	  	if (nbmatch === 6) {
	  		alert("You have matched all the images");
	  		location.reload();
	  	}
	}
	else{
		//not a match
		notMatch();
	}
}

function match(){
	firstCard.removeEventListener('click', flipCard);
  	secondCard.removeEventListener('click', flipCard);

  	resetBoard();
}

function notMatch(){
	lockBoard = true;
	//the cards will be unfliped
	setTimeout(() =>{
	  	firstCard.classList.remove('flip');
	  	secondCard.classList.remove('flip');
	  	resetBoard();
  	}, 1300);
}

function resetBoard() {
	hasFlippedCard = false;
	lockBoard = false;
	firstCard=null;
	secondCard= null;
}

(function randomCards(){
	cards.forEach(card => {
		//get the random number
		let ramdomPos = Math.floor(Math.random() * 12);
		card.style.order = ramdomPos;
	});
})();


cards.forEach(card => card.addEventListener('click', flipCard));