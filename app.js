
let cards =[];
let sum = 0;
let isAlive = false;
let hasBlackjack = false;
let message ="";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
function getRandomCard(){
  let randomNumber = Math.floor(Math.random()*11 + 1);

  if (randomNumber > 10){
    return 10
  }
  else {
    return randomNumber
  }
};

function startGame() {
  let firstNumber = getRandomCard()
  let secondNumber = getRandomCard()
  cards = [firstNumber, secondNumber]
  sum = firstNumber + secondNumber

  renderGame()
};


function renderGame(){
  cardsEl.textContent = "Cards: "
for (let i = 0; i < cards.length; i++) {
  cardsEl.textContent += cards[i] + "  "
};

  sumEl.textContent = "Sum: " + sum;

if (sum < 21){
  message ="Would you like to draw another card?"
hasBlackjack = false
isAlive = true
} else if (sum > 21){
  message= "you lose"
  hasBlackjack = false
  isAlive = false
}else {
  message ="BLACKJACK!"
  hasBlackjack = true

};
messageEl.textContent = message;
console.log(hasBlackjack);
};



function newCard(){
if (isAlive === true && hasBlackjack === false){
let drawnCard = getRandomCard()
cards.push(drawnCard)
sum += drawnCard
renderGame();
}
}
