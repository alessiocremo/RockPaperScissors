const userChoiceElement = document.getElementById('user-choice')
const computerChoiceElement = document.getElementById('computer-choice')
const roundWinnerElement = document.getElementById('round-winner')
const buttonElements = document.querySelectorAll('.possible-choices')
const buttonNumbers = buttonElements.length
const userScoreElement=document.getElementById("user-score")
const computerScoreElement=document.getElementById("computer-score")
const playAgainButton = document.getElementById("play-again")



let choices=[]     //array which contains name of all possible choices

for (let i=0; i<buttonNumbers; i++){
    choices[i]=buttonElements[i].getAttribute('id')
}

let userChoice
let computerChoice
let userScore = 0
let computerScore = 0

buttonElements.forEach(button => button.addEventListener('click', (e) => {
    if (userScore <5 && computerScore <5) {
    userChoice = e.target.id
    userChoiceElement.innerHTML = userChoice
    computerChoice = generateComputerChoice()
    computerChoiceElement.innerHTML = computerChoice
    playRound(userChoice, computerChoice)
    }

    if (userScore == 5 || computerScore==5){
        playAgainButton.disabled=false
        for (let i=0; i<buttonNumbers; i++)
            buttonElements[i].disabled=true
        playAgainButton.addEventListener('click', playAgain)
    }
    
}))



function playRound(uc, cc){
    let uccc = uc + cc
    console.log(uccc)
    let roundWinner

    switch(uccc) {
        case "rockrock":
            roundWinner = "Tie"
            break
        case "paperpaper":
            roundWinner = "Tie"
            break

        case "scissorsscissors":
            roundWinner = "Tie"
            break


        case "rockpaper": 
            computerScore++
            roundWinner = "Computer"
            break

        case "paperscissors":
            computerScore++
            roundWinner = "Computer"
            break

        case "scissorsrock":
            computerScore++
            roundWinner = "Computer"
            break

        case "rockscissors":
            userScore++
            roundWinner = "User"
            break

        case "scissorspaper":
            userScore++
            roundWinner = "User"
            break

        case "paperrock":
            userScore++
            roundWinner = "User"
            break

    }

    roundWinnerElement.innerHTML = roundWinner
    userScoreElement.innerHTML = userScore
    computerScoreElement.innerHTML = computerScore

}



function playAgain(){
    userChoiceElement.innerHTML=''
    computerChoiceElement.innerHTML=''
    roundWinnerElement.innerHTML=''
    userScoreElement.innerHTML=''
    computerScoreElement.innerHTML=''
    userScore=0
    computerScore=0
    for (let i=0; i<buttonNumbers; i++)
            buttonElements[i].disabled=false
    playAgainButton.disabled=true

}


function generateComputerChoice () {
    const randomNumber = Math.floor(Math.random() * buttonNumbers)  //generates random number between 1 and 3
    return choices[randomNumber]
}