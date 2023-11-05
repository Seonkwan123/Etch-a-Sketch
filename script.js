const slider = document.querySelector("input[type='range'")
const sliderLabel = document.querySelector('label')
const gridBox = document.querySelector('.grid-box')
const colorSelector = document.querySelector('#color-selector');
let gridElements;
let grid;

// Add inline style to change slider label text and gridbox size 
let sliderValue = slider.value
sliderLabel.innerText = `${sliderValue} x ${sliderValue}`
gridBox.style.gridTemplateColumns = `repeat(${sliderValue}, 1fr)`
gridBox.style.gridTemplateRows = `repeat(${sliderValue}, 1fr)`

// initially invoke function to generate div inside grid
createGrid();


let mouseDown = false;
document.body.addEventListener('mousedown',() => {
    mouseDown = true;
})
document.body.addEventListener('mouseup',() => {
    mouseDown = false;
})

// This eventListener changes grid slize and slider label when slider is used.
slider.addEventListener('input', createGrid)
// Function will create a size of the grid of the user input
function createGrid () {
sliderValue = slider.value
for(let i = 0; i < (sliderValue ** 2); i++){
    grid = document.createElement('div');
    grid.className = 'grid-element'
    gridBox.appendChild(grid);
    gridElements = document.querySelectorAll('.grid-element');
    sliderLabel.innerText = `${sliderValue} x ${sliderValue}`
    gridBox.style.gridTemplateColumns = `repeat(${sliderValue}, 1fr)`
    gridBox.style.gridTemplateRows = `repeat(${sliderValue}, 1fr)`
    }
}

gridElements.forEach(element => {
    element.addEventListener('mouseover',draw)
})

function draw (e) {
    if (mouseDown === true && e.type == 'mouseover') {
    }
}
