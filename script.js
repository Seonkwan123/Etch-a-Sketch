let slider = document.querySelector("input[type='range'")
slider.addEventListener('input', createGrid)
// Function will create a size of the grid of the user input
function createGrid () {
    let sliderValue = slider.value
    console.log(sliderValue)
    for (let i = 0; i < (sliderValue ** 2); i++){
        let grid = document.createElement('div');
        grid.className = 'grid'
        let gridBox = document.querySelector('.grid-box')
        gridBox.appendChild(grid);
        gridBox.style.gridTemplateColumns = `repeat(${sliderValue}, 1fr)`
        gridBox.style.gridTemplateRows = `repeat(${sliderValue}, 1fr)`
    }
}