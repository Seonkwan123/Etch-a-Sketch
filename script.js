
// Function will create a size of the grid of the user input
function createGrid (rangeNum) {
    for (let i = 0; i < rangeNum; i++){
        let grid = document.createElement('div');
        grid.className = 'grid'
        document.querySelector('.grid-box').appendChild(grid)
    }
}

createGrid(10)