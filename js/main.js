// var cardOne = "queen";
// var cardTwo = "queen";
// var cardThree = "king";
// var cardFour = "king";

var cards = ["queen", "queen", "king", "king"];

var cardsInPlay = [];

function checkForMatch(){
	
	if (cardsInPlay.length === 2){

			if (cardsInPlay[0] === cardsInPlay[1]) { 
				alert("You found a match!");
			} 
			else {
		        alert("Sorry, try again.");
			}

	}

}
// var cardOne = cards[0];
// var cardTwo = cards[1];
// var cardThree = cards[2];
// var cardFour = cards[3];

// cardsInPlay.push(cardOne); //?
// cardsInPlay.push(cardTwo); //?
// cardsInPlay.push(cardThree); //?
// cardsInPlay.push(cardFour); //?

function flipCard(cardId) {

	console.log("User flipped " + cards[cardId]);
	cardsInPlay.push(cards[cardId])
	checkForMatch();
}

flipCard(0);
flipCard(2);



// console.log("User flipped " + cardOne);
// console.log("User flipped " + cardTwo);
// console.log("User flipped " + cardThree);
// console.log("User flipped " + cardFour);




