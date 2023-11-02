
// Function will create a size of the grid of the user input
function createGrid (rangeNum) {
    for (let i = 0; i < (rangeNum ** 2); i++){
        let grid = document.createElement('div');
        grid.className = 'grid'
        let gridBox = document.querySelector('.grid-box')
        gridBox.appendChild(grid);
        gridBox.style.gridTemplateColumns = `repeat(${rangeNum}, 1fr)`
        gridBox.style.gridTemplateRows = `repeat(${rangeNum}, 1fr)`
    }
}
createGrid(10)