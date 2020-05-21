const rollButton = document.querySelector("#roll-button")
const showRollsButton = document.querySelector("#show-rolls-button")
const resetButton = document.querySelector("#reset-button")
const inputBox = document.querySelector("#number-of-dice")
const sidesBox = document.querySelector("#sides-of-dice")

let dieRolls = []
let total = 0
let countspan = 0

rollButton.addEventListener("click", function() {
    let position = 0
    while (position < inputBox.value) {
        let numberFromDice = Math.floor(Math.random() * sidesBox.value) + 1
        dieRolls.push(numberFromDice)
        document.getElementById("countspan").innerHTML = total += numberFromDice
        console.log(numberFromDice)
        position += 1
    }
})

showRollsButton.addEventListener("click", function () {
    let position = 0
    while (position < dieRolls.length) {
        const newDiceString = '<li class="dice">' + dieRolls[position] + "</li>"
        document.getElementById("dice").innerHTML += newDiceString
        position += 1
    }
    dieRolls = []
})

resetButton.addEventListener("click", function() {
    inputBox.value = ""
    sidesBox.value = ""
    document.getElementById("countspan").innerHTML = ""
    document.getElementById("dice").innerHTML = ""
})
