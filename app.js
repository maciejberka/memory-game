const card = document.querySelectorAll(".card")
let randomNumber;
let firstCard;
let secondCard;

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
  
  firstCard = undefined;
  secondCard = undefined;
  shuffle();
  icons = document.querySelectorAll(".icon");
}

const restartButton = document.querySelector(".reset-button");

restartButton.addEventListener("click", reset);


for(let i = 0; i < 16; i++){
  if(!card[i].classList.contains("already-matched")){
    card[i].addEventListener("click", ()=>{
      if(firstCard === undefined){
        firstCard = card[i];
      } else {
          secondCard = card[i];
        }

    card[i].firstChild.style.visibility = "visible";
    if(firstCard.firstChild.classList[1] === secondCard.firstChild.classList[1]){
      setTimeout(pair, 500);
    } else {
        setTimeout(noPair, 1000);
      }
    
    for(let a = 0; a < 16; a++){
      card[a].classList.add("unclickable");
    }  
    });
  }  
}

function noPair() {
  firstCard.firstChild.style.visibility = "hidden";
  secondCard.firstChild.style.visibility = "hidden";
  firstCard = undefined;
  secondCard = undefined;
      
  for(let a = 0; a < 16; a++){
    if(!card[a].classList.contains("already-matched")){
      card[a].classList.remove("unclickable");
    }
  }
}
    
function pair() {
  firstCard.classList.add("already-matched");
  secondCard.classList.add("already-matched");
  firstCard = undefined;
  secondCard = undefined;
  
  for(let a = 0; a < 16; a++){
    if(!card[a].classList.contains("already-matched")){
      card[a].classList.remove("unclickable");
    }   
  }
}












