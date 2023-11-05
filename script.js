const slider = document.querySelector("input[type='range'")
const sliderLabel = document.querySelector('label')
const gridBox = document.querySelector('.grid-box')
const colorSelector = document.querySelector('#color-selector');
let gridElements;

// Add inline style to change slider label text and gridbox size 
let sliderValue = slider.value
sliderLabel.innerText = `${sliderValue} x ${sliderValue}`
gridBox.style.gridTemplateColumns = `repeat(${sliderValue}, 1fr)`
gridBox.style.gridTemplateRows = `repeat(${sliderValue}, 1fr)`

// initially invoke function to generate div inside grid
createGrid();


let mouseDown = false;
document.body.onmousedown = () => {mouseDown = true;}
document.body.onmouseup = () => mouseDown = false;

// This eventListener changes grid slize and slider label when slider is used.
slider.addEventListener('input', createGrid)
// Function will create a size of the grid of the user input
function createGrid () {
sliderValue = slider.value
sliderLabel.innerText = `${sliderValue} x ${sliderValue}`
gridBox.style.gridTemplateColumns = `repeat(${sliderValue}, 1fr)`
gridBox.style.gridTemplateRows = `repeat(${sliderValue}, 1fr)`
for(let i = 0; i < (sliderValue ** 2); i++){
    let grid = document.createElement('div');
    grid.className = 'grid-element'
    gridBox.appendChild(grid);
    gridElements = document.querySelectorAll('.grid-element');
    grid.addEventListener('mouseover', draw)
    }
}

function draw (e) {
    if (mouseDown === true && e.type == 'mouseover') {
        e.target.style.backgroundColor = colorSelector.value;
        console.log(gridElements)
    }
}
