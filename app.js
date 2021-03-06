const card = document.querySelectorAll(".card")
let randomNumber;
let firstCard;
let secondCard;
let inTheGame = false;
let moves = 0;
let seconds = 0;
let pairs = 0;

const movesCounter = document.querySelector(".moves-counter");
const timeCounter = document.querySelector(".time");
const winWindow = document.querySelector(".win-window");
const secondStar = document.querySelectorAll(".second-star");
const thirdStar = document.querySelectorAll(".third-star");
const movesSummary = document.querySelector(".moves-summary");
const timeSummary = document.querySelector(".time-summary");
const playAgainButton = document.querySelector(".play-again-button");

function chooseRandomNumber() {
 //get random number from 0 to 15  
 randomNumber = Math.floor(Math.random() * (15 - 0 + 1)) + 0;
}

//function for randomly selecting pairs
function shuffle() {
  //invoke function to get the randomNumber
  chooseRandomNumber();
  //variable to counting to two
  let counter = 0;
  while(counter !== 2){
    //if card wansn't choosed previously
    if(!card[randomNumber].classList.contains("already-chosen")){
      //mark picked card as already-chosen
      card[randomNumber].classList.add("already-chosen");
      //add an icon
      card[randomNumber].innerHTML = "<i class='fab fa-android icon'></i>";
      counter = counter + 1;
      //if card was previously chosen
    } else {
        //repeat with new random number
        chooseRandomNumber();
    }  
  }
  
  //reset counter
  counter = 0;
  while(counter !== 2){
    if(!card[randomNumber].classList.contains("already-chosen")){
      card[randomNumber].classList.add("already-chosen");
      card[randomNumber].innerHTML = "<i class='fab fa-bitcoin icon'></i>";
      counter = counter + 1;
    } else {
        chooseRandomNumber();
    }  
  }
  
  counter = 0;
  while(counter !== 2){
    if(!card[randomNumber].classList.contains("already-chosen")){
      card[randomNumber].classList.add("already-chosen");
      card[randomNumber].innerHTML = "<i class='fab fa-apple icon'></i>";
      counter = counter + 1;
    } else {
        chooseRandomNumber();
    }  
  }
  
  counter = 0;
  while(counter !== 2){
    if(!card[randomNumber].classList.contains("already-chosen")){
      card[randomNumber].classList.add("already-chosen");
      card[randomNumber].innerHTML = "<i class='fab fa-chrome icon'></i>";
      counter = counter + 1;
    } else {
        chooseRandomNumber();
    }  
  }
  
  counter = 0;
  while(counter !== 2){
    if(!card[randomNumber].classList.contains("already-chosen")){
      card[randomNumber].classList.add("already-chosen");
      card[randomNumber].innerHTML = "<i class='fab fa-codepen icon'></i>";
      counter = counter + 1;
    } else {
        chooseRandomNumber();
    }  
  }
  
  counter = 0;
  while(counter !== 2){
    if(!card[randomNumber].classList.contains("already-chosen")){
      card[randomNumber].classList.add("already-chosen");
      card[randomNumber].innerHTML = "<i class='fab fa-firefox icon'></i>";
      counter = counter + 1;
    } else {
        chooseRandomNumber();
    }  
  }
  
  counter = 0;
  while(counter !== 2){
    if(!card[randomNumber].classList.contains("already-chosen")){
      card[randomNumber].classList.add("already-chosen");
      card[randomNumber].innerHTML = "<i class='fab fa-github icon'></i>";
      counter = counter + 1;
    } else {
        chooseRandomNumber();
    }  
  }
  
  counter = 0;
  while(counter !== 2){
    if(!card[randomNumber].classList.contains("already-chosen")){
      card[randomNumber].classList.add("already-chosen");
      card[randomNumber].innerHTML = "<i class='fab fa-internet-explorer icon'></i>";
      counter = counter + 1;
    } else {
        chooseRandomNumber();
    }
  }
  counter = 0;
}

shuffle();

let icons = document.querySelectorAll(".icon");

function reset() {
  for(let i = 0; i < card.length; i++){
    card[i].classList.remove("already-chosen");
    card[i].classList.remove("already-matched");
    card[i].classList.remove("unclickable");
  }
  
  pairs = 0;
  
  //make all starts visible again
  thirdStar[0].classList.remove("invisible");
  thirdStar[1].classList.remove("invisible");
  secondStar[0].classList.remove("invisible");
  secondStar[1].classList.remove("invisible");
  
  //reset moves things
  moves = 0;
  movesCounter.textContent = 0;
  
  //reset time things
  seconds = 0;
  inTheGame = false;
  timeCounter.textContent = 0;
  
  firstCard = undefined;
  secondCard = undefined;
  shuffle();
  //get icons to variable again
  icons = document.querySelectorAll(".icon");
}

const restartButton = document.querySelector(".reset-button");

restartButton.addEventListener("click", reset);

//function to showing cards and check if they are pair or not
for(let i = 0; i < 16; i++){
  //if card wasn't matched yet
  if(!card[i].classList.contains("already-matched")){
    card[i].addEventListener("click", ()=>{
      
      //get selected card to the right variable
      if(firstCard === undefined){
        
        inTheGame = true;
        
        //increment and display moves
        moves = moves + 1;
        movesCounter.textContent = moves;
        
        //hide stars after 15 and 30 moves
        if(moves > 15){
          thirdStar[0].classList.add("invisible");
          thirdStar[1].classList.add("invisible");
        } 
        
        if(moves > 30){
          secondStar[0].classList.add("invisible");
          secondStar[1].classList.add("invisible");
        }
        
        firstCard = card[i];
        firstCard.classList.add("unclickable");
      } else {
          secondCard = card[i];
          secondCard.classList.add("unclickable");
        }
      
    //show chosen cards
    card[i].firstChild.style.visibility = "visible";
      
    
    //if chosen cards is pair
    if(firstCard !== undefined && secondCard !== undefined){
      if(firstCard.firstChild.classList[1] === secondCard.firstChild.classList[1]){
        setTimeout(pair, 500);
      } else {
          setTimeout(noPair, 1000);
        }
      
      //block showing cards
      for(let a = 0; a < 16; a++){
        card[a].classList.add("unclickable");
      }  
     }  
    
     
    });
  }  
}

function noPair() {
  //hide both cards
  firstCard.firstChild.style.visibility = "hidden";
  secondCard.firstChild.style.visibility = "hidden";
  //reset variables
  firstCard = undefined;
  secondCard = undefined;
  
  //for each card
  for(let a = 0; a < 16; a++){
    //if card wasn't matched yet
    if(!card[a].classList.contains("already-matched")){
      //allow to click at card
      card[a].classList.remove("unclickable");
    }
    
  }
}
    
function pair() {
  pairs = pairs + 1;
  if(pairs === 8){
    inTheGame = false;
    movesSummary.textContent = moves;
    timeSummary.textContent = seconds;
    
    winWindow.style.display = "flex";
  }
  
  //mark cards as already-matched
  firstCard.classList.add("already-matched");
  secondCard.classList.add("already-matched");
  //reset variables
  firstCard = undefined;
  secondCard = undefined;
  
  for(let a = 0; a < 16; a++){
    if(!card[a].classList.contains("already-matched")){
      card[a].classList.remove("unclickable");
    }   
  }
}

//function to count the time
function time(){
  //if game is started
  if(inTheGame){
    seconds = seconds + 1;
    timeCounter.textContent = seconds;
  }
}

setInterval(time, 1000);

playAgainButton.addEventListener("click", ()=>{
  winWindow.style.display = "none";
  reset();
});








