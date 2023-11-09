const slider = document.querySelector("input[type='range'")
const sliderLabel = document.querySelector('label')
const gridBox = document.querySelector('.grid-box')
const colorSelector = document.querySelector('#color-selector');
// initially invoke function to generate div inside grid
createGrid();


let mouseDown = false;
document.body.onmousedown = () => mouseDown = true;
document.body.onmouseup = () => mouseDown = false;
document.body.onmouseup = () => mouseDown = false;
document.body.onclick = (e) => {
    console.log(e);
    }


const colorButton = document.querySelector('.color-button');
const rainbowButton = document.querySelector('.rainbow-button');
const eraserButton = document.querySelector('.eraser-button');
const clearButton = document.querySelector('.clear-button');

colorButton.onclick = (e) => selectButton(e.target.className)
rainbowButton.onclick = (e) => selectButton(e.target.className)
eraserButton.onclick = (e) => selectButton(e.target.className)
clearButton.onclick = (e) => selectButton(e.target.className)

let defaultSelectedButton = colorButton.className;
let selectedButton = defaultSelectedButton;
colorButton.classList.add('active') //default to select color button. This was done after do make sure that selectedButton is class name without active.


function selectButton (className) {
    if (className === 'color-button') {
    selectedButton = className;
    addClassActive(className);
    }
    else if (className === 'rainbow-button') {
    selectedButton = className;
    addClassActive(className);
    } else if (className === 'clear-button') {
    clearGrid();
    } else if (className ==='eraser-button') {
    selectedButton = className;
    addClassActive(className);
    }
}

function addClassActive (className) {
    if (className === 'color-button') {
        colorButton.classList.add('active')
        rainbowButton.classList.remove('active')
        eraserButton.classList.remove('active')
    }
    else if (className === 'rainbow-button') {
        colorButton.classList.remove('active')
        rainbowButton.classList.add('active')
        eraserButton.classList.remove('active')
    } 
     else if (className ==='eraser-button') {
        colorButton.classList.remove('active')
        rainbowButton.classList.remove('active')
        eraserButton.classList.add('active')
    }
}

function clearGrid () {
    let gridElements = document.querySelectorAll('.grid-element');
    gridElements.forEach(element => {
        element.style.background = 'none';
    })
}

slider.onmousemove = () => updateSliderLabel();

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
    } else if (selectedButton === 'eraser-button') {
        e.target.style.background = 'none'; 
    }
}
