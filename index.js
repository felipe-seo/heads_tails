function play(param) {
    document.getElementById("heads").style.display = "none"
    document.getElementById("tails").style.display = "none"
    document.getElementById("result").innerHTML = ""
    let sortedOption = Math.floor((Math.random()*2)+1)
    console.log(sortedOption)
    if (sortedOption === 1) {        
        document.getElementById("heads").style.display = "flex"
    } else {
        document.getElementById("tails").style.display = "flex"
    }
    if (param === sortedOption) {
        document.getElementById("result").innerHTML = "You won"
        console.log("Venceu")
    } else {
        document.getElementById("result").innerHTML = "The computer won"
        console.log("Perdeu")
    }
}


