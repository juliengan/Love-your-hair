const cards = document.querySelectorAll('.game-card');

let flippedCard = false;
let firstCard, secondCard;
let lockBoard = false;
var nbmatch =0;
var count=50;


function startGame() {
	document.getElementById("board").style.visibility="visible";
	document.getElementById("game-info").style.visibility="visible";
	var timing = setInterval(function function1(){ 
	document.getElementById("timer").innerHTML = count + "&nbsp" + "seconds";

	count--;
		if(count <= 0){	
		    clearInterval(timing);
			document.getElementById("timer").innerHTML = "Time is up!"
			alert("Too late !");
			location.reload();
	    }
	}, 1000);

}


function flipCard() {
	if (lockBoard===true)return;
	if (this === firstCard) return;
	this.classList.add('flip');

	if (!flippedCard) {
	//firstClick
	 flippedCard = true;
	 firstCard = this;
	 return;
	}

	//Second clicked
	secondCard = this;

	checkMatch();
}


function checkMatch(count){
	//do cards match ?
	if (firstCard.getAttribute('data-nb') === secondCard.getAttribute('data-nb')) {
		//it is a match
		match();
		nbmatch++;
	  	if (nbmatch === 6) {
	  		alert("Congratulations ! You have matched all the images");
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
	flippedCard = false;
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