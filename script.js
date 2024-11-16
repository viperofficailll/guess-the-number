const form = document.getElementById("form");
const input = document.getElementById("input");
const Message = document.getElementById("message");
const remguess = document.getElementById("remguess");
const prevguess = document.getElementById("prevguess");
const usermessage = document.getElementById("usermessage");
let Numguess = 0;
const prevGuess = [];
const p = document.createElement("p");



//displayguess
const displayguess = (guess) => {
    remguess.innerHTML = ` REMAINING GUESS::${10-Numguess} `
    prevguess.innerHTML = `PREVIOUS GUESS:: ${prevGuess.join(", ")}`;
};





//endgame
const endgame = () => {
    playgame = false;
    form.style.display = "none";
    Message.style.display = "block";
    p.classList.add("button")
     p.innerHTML = `<h1 id="newgame">NEWGAME</h1>`
     usermessage.appendChild(p)
    
    displaymessage(`GAME OVER THE NUMBER WAS ${randomNum}`);
    newgame();
};



//newgame
const newgame = () => {
    const newgame = document.getElementById("newgame")
    newgame.addEventListener("click", function () {
        location.reload();
    });
   
    console.log(p)
};



//genetating a ranfom number
let randomNum = Math.floor(Math.random() * 100) + 1;

///





let playgame = true;
if (playgame) {
  // taking user input value
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    let guess = parseInt(input.value);
    console.log(guess);
    validateGuess(guess);
    input.value = "";
  });
}


// validate user input
const validateGuess = (guess) => {
  if (isNaN(guess) || guess < 1 || guess > 100) {
    alert("Please enter a number between 1 and 100");
    return;
  } else {
    Numguess++;
    console.log(`number of guesses: ${Numguess}`);
    if (Numguess > 10) {
        displaymessage(`GAME OVER THE NUMBER WAS ${guess}`);

      endgame();
    } else {
      checkguess(guess);
      displayguess(guess);
    }
  }
};




// display messages
const displaymessage = (message) => {
  Message.innerHTML = message;
};



//chek guess
const checkguess = (guess) => {
  if (guess === randomNum) {
    displaymessage("congrats you won the game");
    
  } else if (guess < randomNum) {
    displaymessage(" guess higher");
  } else if (guess > randomNum) {
    displaymessage(" guesss lower");
  }
  prevGuess.push(guess);
};
