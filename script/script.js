const startBtn = document.querySelector("button")
const generatedNumbers = []
const guessedNumbers= []


startBtn.addEventListener('click', function(){
    startGame(generatedNumbers)
})

function startGame(arr){
    const numberDisplay = document.querySelector("#number-display")
    numberDisplay.innerHTML = ""
    for (let index = 0; index < 5; index++) {
        let newNum = makeRandomInt(1, 100);
        console.log(newNum)
        while(arr.includes(newNum)){
            newNum = makeRandomInt(1, 100);
        }
        arr.push(newNum)
    }
    numberDisplay.innerHTML = arr.toString()


    // // setTimeout(() => {
    // //     numberDisplay.innerHTML=""
    // // }, 999);


    setTimeout(() => {
        guess(numberDisplay, generatedNumbers, guessedNumbers)
    
    }, 1000);
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
