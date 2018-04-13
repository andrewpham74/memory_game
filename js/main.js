
var cards = [
{
rank: "queen",
suit: "hearts",
cardImage:"images/queen-of-hearts.png"
},

{
rank: "queen",
suit: "diamonds",
cardImage: "images/queen-of-diamonds.png"
},

{
rank: "king",
suit: "hearts",
cardImage: "images/king-of-hearts.png"
},

{
rank: "king",
suit: "diamonds",
cardImage: "images/king-of-diamonds.png"
},

];

var cardsInPlay = [];


// var flipcard = function () {

function flipCard() {
	var cardId = this.getAttribute('data-id');

	cardsInPlay.push(cards[cardId].rank);
	this.setAttribute("src", cards[cardId].cardImage);

	console.log("User flipped " + cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);

	checkForMatch();

}

// var createBoard = function (){
function createBoard() {
	var board = document.getElementById("game-board");
    
    for (var i = 0; i < cards.length; i++) {
    	
    	var cardElement = document.createElement('img');
    	
    	cardElement.setAttribute("src", "images/back.png");
    	cardElement.setAttribute('data-id', i);
    	cardElement.addEventListener("click", flipCard);
    	board.appendChild(cardElement);	
	}

}

// var checkForMatch = function (){
function checkForMatch(){

	// cardElement.setAttribute(cards[cardId].cardImage);
	// this.setAttribute("src", cards[cardId].cardImage);

	
	if (cardsInPlay.length === 2){

			if (cardsInPlay[0] === cardsInPlay[1]) { 
				alert("You found a match!");
			} 
			else {
		        alert("Sorry, try again.");
			}

	}

}


createBoard();

function resetGame() {
	cardsInPlay = [];

	var board = document.getElementById("game-board");

	while (board.hasChildNodes()) {
		board.removeChild(board.lastChild);
	}

	createBoard();
};

// resetGame();
// flipCard(0);
// flipCard(2);



// console.log("User flipped " + cardOne);
// console.log("User flipped " + cardTwo);
// console.log("User flipped " + cardThree);
// console.log("User flipped " + cardFour);




