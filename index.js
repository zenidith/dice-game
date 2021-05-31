// Create variables for the game state
let player1Score = 0
let player2Score = 0
let player1Turn = true

// Create variables to store references to the necessary DOM nodes
const player1Dice = document.getElementById("player1Dice")
const player2Dice = document.getElementById("player2Dice")
const player1Scoreboard = document.getElementById("player1Scoreboard")
const player2Scoreboard = document.getElementById("player2Scoreboard")
const message = document.getElementById("message")
const rollBtn = document.getElementById("rollBtn")
const resetBtn = document.getElementById("resetBtn")

// logging out a random number between 1-6 when the rollBtn is clicked

rollBtn.addEventListener("click", function() {
    const randomNumber =  Math.floor(Math.random() * 6) + 1
    console.log(randomNumber)

if (player1Turn) {
    console.log("Player 1 rolled " + randomNumber)
} else {
    console.log("Player 2 rolled " + randomNumber)
}
player1Turn = !player1Turn

})
