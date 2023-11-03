// selection
let form = document.querySelector("form")
let guessNumber = document.querySelector("#input");
let submit = document.querySelector(".submit");
let resultText = document.querySelector(".resultText");
let remainAttempts = document.querySelector(".remainAttempts")
let winorloss = document.querySelector(".winorloss")

let win = 0;
let loss = 0;
let totalAttempts = 5;
let attempts = 0;

form.addEventListener("submit", (event) => {
    event.preventDefault();

    let value = guessNumber.value
    console.log(value)
    checkResult(value)

    guessNumber.value = "";

    attempts++

    if(attempts === 5){
        guessNumber.disabled = true;
        submit.disabled = true;
        submit.classList.remove("sub")
    }

    remainAttempts.innerHTML = `Remaining Attempts: ${totalAttempts - attempts
    }`
})

const checkResult = (guessNumber) => {
    let randomNumber1 = randomNumber(5)
    if(guessNumber == randomNumber1){
        resultText.innerHTML = "You win"
        win++
        winorloss.innerHTML = `Total win: ${win}; Total loss: ${loss}`
    }
    else{
        resultText.innerHTML = `You loss; Random number was: ${randomNumber1}`
        loss++
        winorloss.innerHTML = `Total win: ${win}; Total loss: ${loss}`
    }
}

const randomNumber = (limit) => {
    return Math.floor(Math.random() * limit ) + 1
}