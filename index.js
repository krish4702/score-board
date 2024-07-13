


let counter = document.getElementById("text")
let counterEl = document.getElementById("text2")
let count = 0
let countEl = 0

function plusOne(){
    count += 1
    counterEl.innerText = count
}

function plusTwo(){
    count += 2
    counterEl.innerText = count
}

function plusThree(){
    count += 3
    counterEl.innerText = count
}

function plusOe(){
    countEl += 1
    counter.innerText =  countEl
}

function plusTo(){
    countEl += 2
    counter.innerText = countEl
}

function plusThre(){
    countEl += 3
    counter.innerText = countEl
}