let player = {
    name: "Praki" ,
    chips: 854
}

let cards = [ ]
let sum = 0

let hasBlackJack = false
let isAlive = false
let message = ""

let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")

playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard() {
    let randomnumber = Math.floor(Math.random()*13) + 1
    if (randomnumber > 10) {
        return 10
    } else if(randomnumber === 1){
        return 11
    } else{
        return randomnumber
    }
}

function startGame() {
    isAlive = true
    let firstCard = getRandomCard(), secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame() {

    cardsEl.textContent = "Cards : " 
    for (let i=0 ; i< cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }

    sumEl.textContent = "Sum is : " + sum

    if (sum < 21){
        message = "Do u want to draw another card?"
    } else if(sum === 21){
        message = "U got the blackjack"
        hasBlackJack = true
    } else {
        message= "U lost the game"
        isAlive = false 
    }
    
    messageEl.textContent = message

}

function newCard(){
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    }   
}
