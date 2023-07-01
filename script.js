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

changeGridButton.addEventListener('click', () => {
  // очищение
  if (n > 0) {
    var N = n;
    for ( let i = 0; i < N; i++ ){
        for ( let j = 0; j < N; j++ ){
            var gridCell = gridArray[i][j];
            parentElement.removeChild(gridCell);
        };
        n--;
    }
  }
  //произошло очищение грида

  //создание нового грида
  n = +prompt ('enter the number of squares (100 is maximum)');

    if (n<101) {
      parentElement.style.gridTemplateRows = `repeat(${n}, 1fr)`;  
      parentElement.style.gridTemplateColumns = `repeat(${n}, 1fr)`;
  
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
    } else {
      alert ("100 is maximum");
    }

});