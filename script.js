const slider = document.querySelector("input[type='range'")
const sliderLabel = document.querySelector('label')
const gridBox = document.querySelector('.grid-box')
const colorSelector = document.querySelector('#color-selector');
// initially invoke function to generate div inside grid
createGrid();


let mouseDown = false;
document.body.onmousedown = () => {mouseDown = true;}
document.body.onmouseup = () => mouseDown = false;
slider.onmousemove = () => updateSliderLabel();

let defaultSelectedButton = document.querySelector('.color-button').className;
let selectedButton = defaultSelectedButton;
const buttons = document.querySelectorAll('button')
buttons.forEach(button => {
    button.addEventListener('click', e => {
    selectedButton = e.target.className;
    if (selectedButton === 'clear-button') {
        clearGrid();
        selectedButton = defaultSelectedButton;
    }
    })
})

function clearGrid () {
    let gridElements = document.querySelectorAll('.grid-element');
    gridElements.forEach(element => {
        element.style.background = 'none';
    })
}


function updateSliderLabel () {
    let sliderValue = slider.value;
    sliderLabel.innerText = `${sliderValue} x ${sliderValue}`;
}
// This eventListener changes grid slize and slider label when slider is used.
slider.addEventListener('change', createGrid)
// Function will create a size of the grid of the user input
function createGrid () {
clearGrid();
let sliderValue = slider.value
sliderLabel.innerText = `${sliderValue} x ${sliderValue}`
gridBox.style.gridTemplateColumns = `repeat(${sliderValue}, 1fr)`
gridBox.style.gridTemplateRows = `repeat(${sliderValue}, 1fr)`
for(let i = 0; i < (sliderValue ** 2); i++){
    let grid = document.createElement('div');
    grid.className = 'grid-element'
    gridBox.appendChild(grid);
    let gridElements = document.querySelectorAll('.grid-element');
    grid.addEventListener('mouseover', draw)
    }
}

function draw (e) {
    if (!mouseDown)  return;
    else if (selectedButton === 'color-button') {
        e.target.style.background = colorSelector.value;
    } else if(selectedButton === 'rainbow-button') {
        hexCode ='#' + Math.random().toString(16).substring(2,8);
        e.target.style.background = hexCode;
}
}
