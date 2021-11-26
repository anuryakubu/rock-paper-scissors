const select = document.getElementById('type');
const playButton = document.getElementById('play');
const resetButton = document.getElementById('reset');
const display = document.getElementById('display');
const displayRound = document.getElementById('displayRound');
const best5 = document.getElementById('best5');
const round5 = document.getElementById('round5');
const newPlayerImg = document.getElementById('src-id');
const newCompImg = document.getElementById('srcComp-id');
const tie = document.getElementById('tie');
const playerWin = document.getElementById('p-win');
const compWin = document.getElementById('comp-win');



let counter = 0;
let counter1 = 0;
let counter2 = 0;
let uniCounter = 0;
let tieCount = 1;

resetButton.disabled = true;
playButton.disabled = true;

function playGameBest5() {


if (select.value === 'rock' || select.value === 'paper' || select.value === 'scissors') {

    let randomNumber = Math.floor(Math.random() * 3);  
    uniCounter++   
    
    resetButton.disabled = true;

    if (randomNumber === 0) {
        const rock = 'rock';

        newCompImg.src = './img/Rock.png';
        newCompImg.style.width = '200px'; 

        if(select.value === rock) {
            display.innerHTML = `This is a tie... ${select.value[0].toUpperCase() + (select.value).substring(1)} for ${select.value[0].toUpperCase() + (select.value).substring(1)}`;
            counter++ 
            counterAlt()
            uniCount()

        } 
        
        if (select.value === 'scissors' && rock) {
            display.innerHTML = `Computer Wins... ${rock[0].toUpperCase() + rock.substring(1)} beats Scissors`;
            counter1++ 
            counterAlc()
            uniCount()

        }
        
        if (select.value === 'paper' && rock) {
            display.innerHTML = `You win... Paper beats ${rock[0].toUpperCase() + rock.substring(1)} `;
            counter2++ 
            counterAlp()
            uniCount()
        }

    }

    if (randomNumber === 1) {
        const paper = 'paper';
        
        newCompImg.src = './img/Paper.png';
        newCompImg.style.width = '200px'; 

        if(select.value === paper) {
            display.innerHTML = `This is a tie... ${select.value[0].toUpperCase() + (select.value).substring(1)} for ${select.value[0].toUpperCase() + (select.value).substring(1)}`;
            counter++ 
            counterAlt()
            uniCount()

        }
        
        if (select.value === 'rock' && paper) {
            display.innerHTML = `Computer Wins... ${paper[0].toUpperCase() + paper.substring(1)} beats Rock`;
            counter1++ 
            counterAlc()
            uniCount()

        } 
        
        if (select.value === 'scissors' && paper) {
            display.innerHTML = `You win... Scissors beats ${paper[0].toUpperCase() + paper.substring(1)}  `;
            counter2++ 
            counterAlp()
            uniCount()
        }

    }

    if (randomNumber === 2) {
        const scissors = 'scissors';

        newCompImg.src = './img/Scissors.png';
        newCompImg.style.width = '200px'; 
      
        if(select.value === scissors) {
            display.innerHTML = `This is a tie... ${select.value[0].toUpperCase() + (select.value).substring(1)} for ${select.value[0].toUpperCase() + (select.value).substring(1)}`;
            counter++ 
            counterAlt()
            uniCount()

        }
        
        if (select.value === 'paper' && scissors) {
            display.innerHTML = `Computer Wins... ${scissors[0].toUpperCase() + scissors.substring(1)} beats Paper`;
            counter1++ 
            counterAlc()
            uniCount()

        } 
        
        if (select.value === 'rock' && scissors) {
            display.innerHTML = `You win... Rock beats ${scissors[0].toUpperCase() + scissors.substring(1)}`;
            counter2++ ;
            counterAlp()
            uniCount()
        }
    }

    if(isGameOver()) {
        let win = counter2 > counter1 ? `You Win` : `You Lose`;
        display.innerHTML = `GAME OVER!!! ${win}`
        playButton.disabled = true;
        resetButton.disabled = false;
        select.value.disabled = true;
        resetButton.addEventListener('click', resets);
    }  

} 

    

}




function playGameRound5() {


    if (select.value === 'rock' || select.value === 'paper' || select.value === 'scissors') {

        let randomNumber = Math.floor(Math.random() * 3);  
        uniCounter++   
        
        resetButton.disabled = true;
        
    
        if (randomNumber === 0) {
            const rock = 'rock';
    
            newCompImg.src = './img/Rock.png';
            newCompImg.style.width = '200px'; 
    
            if(select.value === rock) {
                display.innerHTML = `This is a tie... ${select.value[0].toUpperCase() + (select.value).substring(1)} for ${select.value[0].toUpperCase() + (select.value).substring(1)}`;
                counter++ 
                counterAlt()
                uniCount()
    
            } 
            
            if (select.value === 'scissors' && rock) {
                display.innerHTML = `Computer Wins... ${rock[0].toUpperCase() + rock.substring(1)} beats Scissors`;
                counter1++ 
                counterAlc()
                uniCount()
    
            }
            
            if (select.value === 'paper' && rock) {
                display.innerHTML = `You win... Paper beats ${rock[0].toUpperCase() + rock.substring(1)} `;
                counter2++ 
                counterAlp()
                uniCount()
            }
    
        }
    
        if (randomNumber === 1) {
            const paper = 'paper';
            
            newCompImg.src = './img/Paper.png';
            newCompImg.style.width = '200px'; 
    
            if(select.value === paper) {
                display.innerHTML = `This is a tie... ${select.value[0].toUpperCase() + (select.value).substring(1)} for ${select.value[0].toUpperCase() + (select.value).substring(1)}`;
                counter++ 
                counterAlt()
                uniCount()
    
            }
            
            if (select.value === 'rock' && paper) {
                display.innerHTML = `Computer Wins... ${paper[0].toUpperCase() + paper.substring(1)} beats Rock`;
                counter1++ 
                counterAlc()
                uniCount()
    
            } 
            
            if (select.value === 'scissors' && paper) {
                display.innerHTML = `You win... Scissors beats ${paper[0].toUpperCase() + paper.substring(1)}  `;
                counter2++ 
                counterAlp()
                uniCount()
            }
    
        }
    
        if (randomNumber === 2) {
            const scissors = 'scissors';
    
            newCompImg.src = './img/Scissors.png';
            newCompImg.style.width = '200px'; 
          
            if(select.value === scissors) {
                display.innerHTML = `This is a tie... ${select.value[0].toUpperCase() + (select.value).substring(1)} for ${select.value[0].toUpperCase() + (select.value).substring(1)}`;
                counter++ 
                counterAlt()
                uniCount()
    
            }
            
            if (select.value === 'paper' && scissors) {
                display.innerHTML = `Computer Wins... ${scissors[0].toUpperCase() + scissors.substring(1)} beats Paper`;
                counter1++ 
                counterAlc()
                uniCount()
    
            } 
            
            if (select.value === 'rock' && scissors) {
                display.innerHTML = `You win... Rock beats ${scissors[0].toUpperCase() + scissors.substring(1)}`;
                counter2++ ;
                counterAlp()
                uniCount()
            }
        }

        if(isRound5()) {
    
            if (counter2 > counter1) {
                display.innerHTML = `GAME OVER!!! You Win`
                playButton.disabled = true;
                resetButton.disabled = false;
                select.value.disabled = true;
                resetButton.addEventListener('click', resets);
            } else if (counter1 > counter2) {
                display.innerHTML = `GAME OVER!!! You Lose`
                playButton.disabled = true;
                resetButton.disabled = false;
                select.value.disabled = true;
                resetButton.addEventListener('click', resets);
            } else {
                display.innerHTML = `It's a tie... Let's Play Tiebreaker`
            } 
        }
    
        
    
    if (uniCounter > 5) {
    
                if (counter2 === counter1) {
                    display.innerHTML = `It's a tie... Let's Play Tiebreaker ${tieCount}`
                    tieCount++
                    uniCounter++
                } else if (counter2 > counter1) {
                    display.innerHTML = `GAME OVER!!! You Win`
                    playButton.disabled = true;
                    resetButton.disabled = false;
                    select.value.disabled = true;
                    resetButton.addEventListener('click', resets);
                } else {
                    display.innerHTML = `GAME OVER!!! You Lose`
                    playButton.disabled = true;
                    resetButton.disabled = false;
                    select.value.disabled = true;
                    resetButton.addEventListener('click', resets);
                }
            } 

    } 
        
    }

function isGameOver() {
    return counter1 === 5 || counter2 === 5
}

function isRound5() {
    return uniCounter  === 5
}


/* if (resetButton.disabled || playButton.disabled ) {
    resetButton.style.background = "grey";
    resetButton.style.pointerEvents = "none";
    playButton.style.pointerEvents = "none";
    playButton.style.background = "grey";
}*/


function playBest5() {
    playButton.disabled = false;
    resetButton.disabled = false;
    round5.disabled = true;
    best5.disabled = true;
    playButton.addEventListener('click', playGameBest5);
}


function playRound5() {
    playButton.disabled = false;
    resetButton.disabled = false;
    best5.disabled = true;
    round5.disabled = true;
    playButton.addEventListener('click', playGameRound5);
}

function counterAlt() {
    tie.innerHTML = 'Tie: ' + counter;
}

function counterAlc() {
    compWin.innerHTML = 'Computer Wins: ' + counter1;
}

function counterAlp() {   
    playerWin.innerHTML = 'Player Wins: ' + counter2;
}

 function uniCount() {
    displayRound.innerHTML = 'Round: ' + uniCounter; 
 }

function resets() {
    playButton.disabled = true;
    resetButton.disabled = true;
    newPlayerImg.src = "./img/combo-all.png";
    newCompImg.src = "./img/combo-all.png";
    tie.innerHTML = 'Tie: 0';
    compWin.innerHTML = 'Computer Wins: 0';
    playerWin.innerHTML = 'Player Wins: 0';
    display.innerHTML = '';
    displayRound.innerHTML = 'Round: 0'; 
    select.value = "*Select here*";
    best5.disabled = false;
    round5.disabled = false;
    counter = 0;
    counter1 = 0;
    counter2 = 0;
    uniCounter = 0;
}

select.onchange = () => {

    if(select.value === 'rock') {
        
        newPlayerImg.src = './img/Rock.png';
        newPlayerImg.style.width = '200px'; 
        
    } 
    if (select.value === 'paper') {
        newPlayerImg.src = './img/Paper.png';
        newPlayerImg.style.width = '200px';
    } 
    
    if (select.value === 'scissors') {
        newPlayerImg.src = './img/Scissors.png';
        newPlayerImg.style.width = '200px';
    }
}

best5.addEventListener('click', playBest5);
round5.addEventListener('click', playRound5);





