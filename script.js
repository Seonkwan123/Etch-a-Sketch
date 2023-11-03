let slider = document.querySelector("input[type='range'")
let sliderValue = slider.value
slider.addEventListener('input', createGrid)
let sliderLabel = document.querySelector('label')
sliderLabel.innerText = `${sliderValue} x ${sliderValue}`
// Function will create a size of the grid of the user input
function createGrid () {
        sliderValue = slider.value
    for(let i = 0; i < (sliderValue ** 2); i++){
        let grid = document.createElement('div');
        grid.className = 'grid'
        let gridBox = document.querySelector('.grid-box')
        gridBox.appendChild(grid);
        sliderLabel.innerText = `${sliderValue} x ${sliderValue}`
        gridBox.style.gridTemplateColumns = `repeat(${sliderValue}, 1fr)`
        gridBox.style.gridTemplateRows = `repeat(${sliderValue}, 1fr)`
    }
}