/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let converterBtn = document.getElementById("convert-btn")
let inputEl = document.getElementById("input")
let lengthEl = document.getElementById("length")
let volumeEl = document.getElementById("volume")
let massEl = document.getElementById("mass")

const meterToFeet = 3.281
const literToGallon = 0.264
const kiloToPound = 2.204

converterBtn.addEventListener("click", function() {
    let inputValue = inputEl.value
    
    lengthEl.textContent = `${inputValue} meter = ${(inputValue * meterToFeet).toFixed(3)} feet`
    volumeEl.textContent = `${inputValue} liter =  ${(inputValue * literToGallon).toFixed(3)} gallon`
    massEl.textContent = `${inputValue} kilogram = ${(inputValue * kiloToPound).toFixed(3)} pound`
    
})

