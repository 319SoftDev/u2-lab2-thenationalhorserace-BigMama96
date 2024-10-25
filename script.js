console.log("Script Running");



const changePosition = (horse, position) => (position <= 5 ? horse.style.setProperty('grid-column', position) : null);
//starting position
let blue_position = 1;
let pink_position = 1;
let brown_position = 1;

//:)

// Query Selectors Here

// Blue horse img & button to advance
const blueHorse = document.querySelector("#blue-horse"); 
const blueButton = document.querySelector("#blue-button"); 

// Pink horse img & button to advance
const pinkHorse = document.querySelector("#pink-horse"); 
const pinkButton = document.querySelector("#pink-button");

// Brown horse img & button to advance
const brownHorse = document.querySelector("#brown-horse"); 
const brownButton = document.querySelector("#brown-button"); 


// Div to display the winner message
const winnerDiv = document.querySelector("#winner"); 

// Reset button selector
const resetButton = document.querySelector("#reset-button");  

//:)

// OnClick Functions Here

//this code moves the blue, pink and brown horse on button press
const advanceBlue = (e) => {
  blue_position += 1;
  changePosition(blueHorse, blue_position);
  checkWinner(blue_position, "Blue");
};

const advancePink = (e) => {
  pink_position += 1;
  changePosition(pinkHorse, pink_position);
  checkWinner(pink_position, "Pink");
};

const advanceBrown = (e) => {
  brown_position += 1;
  changePosition(brownHorse, brown_position);
  // displays which horse won text
  checkWinner(brown_position, "Brown");
};


//:)

// Check for a winner
const checkWinner = (position, color) => {
    // Check if the horse's position is 5 or greater (finish line)
    if (position >= 5) {
      // This displays winner message
      winnerDiv.innerHTML = `${color} is the Winner!`; 
      // Disable all buttons cuz race is over
      blueButton.disabled = true;
      pinkButton.disabled = true;
      brownButton.disabled = true;
  }
};

//:)

// Reset function
const resetRace = () => {
  blue_position = 1;
  pink_position = 1;
  brown_position = 1;

  changePosition(blueHorse, blue_position);
  changePosition(pinkHorse, pink_position);
  changePosition(brownHorse, brown_position);

  winnerDiv.innerHTML = '';  // Clear the winner message

  // Re-enable buttons
  blueButton.disabled = false;
  pinkButton.disabled = false;
  brownButton.disabled = false;
};


//:)

// Event Listeners Here
// Attach click event to blue button
blueButton.addEventListener("click", advanceBlue); 
// Attach click event to pink button
pinkButton.addEventListener("click", advancePink); 
 // Attach click event to brown button
brownButton.addEventListener("click", advanceBrown);
//Attach click event to reset button
resetButton.addEventListener("click", resetRace);



















