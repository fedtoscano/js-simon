const startBtn = document.querySelector("button")


startBtn.addEventListener('click', function(){
    startGame()
})

function startGame(){
    const numberDisplay = document.querySelector("#number-display")
    const guessedNumbers= []
    const generatedNumbers = []

    numberDisplay.innerHTML = ""
    for (let index = 0; index < 5; index++) {
        let newNum = makeRandomInt(1, 100);
        while(generatedNumbers.includes(newNum)){
            newNum = makeRandomInt(1, 100);
        }
        generatedNumbers.push(newNum)
    }
    numberDisplay.innerHTML = generatedNumbers.toString()


    // ! il doppio setTimeout serve per evitare che il prompt freezi lo schermo impedendo ai numeri di scomparire
    setTimeout(() => {
        numberDisplay.innerHTML=""
    }, 4500);

    setTimeout(() => {
        guess(numberDisplay, generatedNumbers, guessedNumbers)
    
    }, 5000);
}

function guess(displayEl, arr1, arr2){
    displayEl.innerHTML=""
    for(let i=0; i<5; i++){
        let guessedNum = Number.parseInt(prompt("Guess a number..."),10);
        arr2.push(guessedNum);
    }

    let gameOver
    arr2.forEach(num => {
        if(!(arr1.includes(num))){
            gameOver = true        
        }else{
            gameOver = false
        }
    })
    
    if(gameOver){
        displayEl.innerHTML = "Hai perso!"
    }else if(gameOver===false){
        displayEl.innerHTML = "Hai vinto!"
    };
}






function makeRandomInt(min, max){
    return Math.floor(Math.random() * ((max - min) +1) + min)
};
