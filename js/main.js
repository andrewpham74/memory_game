// var cardOne = "queen";
// var cardTwo = "queen";
// var cardThree = "king";
// var cardFour = "king";

var cards = ["queen", "queen", "king", "king"];

var cardsInPlay = [];

var cardOne = cards[0];
// var cardTwo = cards[1];
var cardThree = cards[2];
// var cardFour = cards[3];

cardsInPlay.push(cardOne); //?
// cardsInPlay.push(cardTwo); //?
cardsInPlay.push(cardThree); //?
// cardsInPlay.push(cardFour); //?

console.log("User flipped " + cardOne);
// console.log("User flipped " + cardTwo);
console.log("User flipped " + cardThree);
// console.log("User flipped " + cardFour);

if (cardsInPlay.length === 2){

	if (cardsInPlay[0] === cardsInPlay[2]) { 
		alert("You found a match!");
	} 
	else {
        alert("Sorry, try again.");
	}


}
