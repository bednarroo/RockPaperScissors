//getting elements

const yourChoice = document.querySelector('.you')
const opponentChose = document.querySelector('.opponent')
const finishResult = document.querySelector('.result')
const moreStats = document.querySelector('.extraStats')
const popUp = document.querySelector('.popUp')
const lessStats = document.querySelector('.close')

//Objects

let Summary = {
    wins: 0,
    lost: 0,
    draws: 0,
    sum: 0,
}

const choice = {
    you: "",
    opponent: "",
}

const cases = [...document.querySelectorAll('.container> div')];

//select your choice
const select = function (e) {
    choice.you = this.dataset.option
    console.log(choice.you);
    cases.forEach(cas => cas.style.boxShadow = "");
    this.style.boxShadow = " 0 0 10px red"

}
cases.forEach(cas => cas.addEventListener('click', select))

//oponent choice
let AIChoice = function () {
    drawing = Math.floor(Math.random() * cases.length);
    const result = cases[drawing].dataset.option;
    return result;
}


// Comparison
const comparison = function (AI, YOU) {
    if (AI === YOU) {
        Summary.draws++
        Summary.sum++
        return "draw"

    } else if ((AI === "sci" && YOU === "roc") || (AI === "roc" && YOU === "pap") || (AI === "pap" && YOU === "sci")) {
        Summary.wins++
        Summary.sum++
        return "win"

    } else {
        Summary.lost++
        Summary.sum++;
        return "lose";
    }
}


// Publish Result 
const publishResult = function () {
    const result = comparison(choice.opponent, choice.you)
    yourChoice.innerHTML = "Your choice: " + choice.you + "."
    opponentChose.innerHTML = `Opponent's choice: ${choice.opponent}.`
    finishResult.innerHTML = "Result: " + result
    //More stats
    document.querySelector(".allWins").innerHTML = "All wins:" + Summary.wins
    document.querySelector(".allLoses").innerHTML = "All loses:" + Summary.lost
    document.querySelector(".allDraws").innerHTML = "All draws:" + Summary.draws
    document.querySelector(".allGames").innerHTML = "All games:" + Summary.sum

}

// END GAME

const endGame = function () {

    choice.you = "";
    cases.forEach(cas => cas.style.boxShadow = "")
}

// MAIN FUNCTION

const start = function () {
    if (!choice.you) {
        alert("Select one option")
        return;
    }
    choice.opponent = AIChoice();
    const result = comparison(choice.opponent, choice.you);
    publishResult(choice.you, choice.opponent, result);
    endGame();
}

document.querySelector('.send').addEventListener('click', start)


//Extra Statts

const poppingUp = function () {
    popUp.style.display = 'block';
    document.body.opacity = '0.5'
}

const closePop = function () {
    popUp.style.display = "none"
}

moreStats.addEventListener("click", poppingUp)
lessStats.addEventListener("click", closePop)



//przeźroczystość