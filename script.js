// Set initial grid box size and slider label texts as default value
let slider = document.querySelector("input[type='range'")
let sliderValue = slider.value
let sliderLabel = document.querySelector('label')
let gridBox = document.querySelector('.grid-box')
let grid = document.createElement('div');
grid.className = 'grid'
// Add inline style to change slider label text and gridbox size 
sliderLabel.innerText = `${sliderValue} x ${sliderValue}`
gridBox.style.gridTemplateColumns = `repeat(${sliderValue}, 1fr)`
gridBox.style.gridTemplateRows = `repeat(${sliderValue}, 1fr)`
// This eventListener changes grid slize and slider label when slider is used.
slider.addEventListener('input', createGrid)
// Function will create a size of the grid of the user input
function createGrid () {
sliderValue = slider.value
for(let i = 0; i < (sliderValue ** 2); i++){
    gridBox.appendChild(grid);
    sliderLabel.innerText = `${sliderValue} x ${sliderValue}`
    gridBox.style.gridTemplateColumns = `repeat(${sliderValue}, 1fr)`
    gridBox.style.gridTemplateRows = `repeat(${sliderValue}, 1fr)`
    }
}

// Select color buttons
let colorSelector = document.querySelector('#color-selector');
let color = colorSelector.value;
// Write a function where selected color changes when clicked
function changeColor () {

}
// Write another function where when hold click, the grid changes from white to that color