function play(param) {

    let sortedOption = Math.floor((Math.random()*2)+1)
    console.log(sortedOption)
    if (sortedOption === 1) {        
        document.getElementById("coin").style.backgroundImage = "url(assets/heads.svg)"
    } else {
        document.getElementById("coin").style.backgroundImage = "url(assets/tails.svg)"
    }
    if (param === sortedOption) {
        document.getElementById("result").innerHTML = "You won"
    } else {
        document.getElementById("result").innerHTML = "The computer won"
    }
}


