// Set initial grid box size and slider label texts as default value
let slider = document.querySelector("input[type='range'")
let sliderValue = slider.value
let sliderLabel = document.querySelector('label')
let gridBox = document.querySelector('.grid-box')
// initially invoke function to generate div inside grid
createGrid();
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
    let grid = document.createElement('div');
    grid.className = 'grid'
    gridBox.appendChild(grid);
    sliderLabel.innerText = `${sliderValue} x ${sliderValue}`
    gridBox.style.gridTemplateColumns = `repeat(${sliderValue}, 1fr)`
    gridBox.style.gridTemplateRows = `repeat(${sliderValue}, 1fr)`
    }
}


// Select color buttons
let colorSelector = document.querySelector('#color-selector');
grid.addEventListener('click', sketchColor)
function sketchColor () {
    grid.style.color = colorSelector.value;
}