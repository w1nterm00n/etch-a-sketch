let parentElement = document.querySelector ('.container');
const changeGridButton = document.querySelector('.changeGridButton');

var n = 16;

parentElement.style.gridTemplateRows = `repeat(${n}, 1fr)`;  
parentElement.style.gridTemplateColumns = `repeat(${n}, 1fr)`;

var gridArray = [];

for ( let i = 0; i < n; i++ ){

    gridArray[i] = []; 

        for ( let j = 0; j < n; j++ ){
            var gridCell = document.createElement('div');  
            parentElement.appendChild(gridCell);
            gridCell.classList.add('whiteCell');
            gridArray[i][j] = gridCell;

            gridArray[i][j].addEventListener('click', () => {
                gridArray[i][j].classList.add('blackCell');
              });

        }
}

