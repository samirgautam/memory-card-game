const cards = document.querySelectorAll(".memory-card");
let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

function flipCard(){
    if(lockBoard) return; //so that no more than two cards are clicked
    if(this === firstCard)return; //so that no card is clicked twice

    this.classList.add("flip");
    if(!hasFlippedCard){
        hasFlippedCard = true;
        firstCard = this;
    }
    else{
   //     hasFlippedCard = false;
        secondCard = this;
    // do cards match
   checkForMatch();
}
}
function checkForMatch(){
    let isMatch = firstCard.dataset.hero === secondCard.dataset.hero 
    
    if(isMatch?disableCards(): unflipCards());
}

function disableCards(){
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click',flipCard);
    resetBoard();
}

function unflipCards(){
    lockBoard = true;
    setTimeout(()=>{
        //letting the cards to unflip
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
       // lockBoard = false;
       resetBoard();
    },1500);
  
}
function resetBoard(){
[hasFlippedCard,lockBoard] = [false,false];
[firstCard,secondCard] = [null,null];
}

(function shuffle(){
    cards.forEach(card=>{
        let randomPos = Math.floor(Math.random()*12);
        card.style.order = randomPos;
    })
})(); 

cards.forEach(card => card.addEventListener('click', flipCard))