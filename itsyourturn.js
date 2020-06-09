const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let firstCard, secondCard;
let lockBoard = false;

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

function checkMatch(){
	//do cards match ?
	if (firstCard.dataset.framework === secondCard.dataset.framework) {
		//it is a match
		match();
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