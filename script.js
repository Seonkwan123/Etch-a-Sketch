// Select square container
const squareContainer = document.querySelector('.square-container')
// Create element square and append it as a child of the container div
const square = document.createElement('div');
square.classList.add(square);

// Create a for-loop that will loop through and insert square into the square container
let i = 16;
let j = 16;
for (i; i > 0; i--) {
    for (j; j > 0; j-- ) {
        squareContainer.appendChild(square)
    }
}