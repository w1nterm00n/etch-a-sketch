let parentElement = document.querySelector ('.container');
const changeGridButton = document.querySelector('.changeGridButton');
const randomColor = document.querySelector('.randomColor');
const darkening = document.querySelector('.darkening');

let n = 16;

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



randomColor.addEventListener('click', () => {

        var N = n;
        for ( let i = 0; i < N; i++ ){
            for ( let j = 0; j < N; j++ ){
                var gridCell = gridArray[i][j];
                parentElement.removeChild(gridCell);
            };
            n--;
        }
        n = N; 
      //произошло очищение грида
  
      //создаётся новый такой же грид, но рандом цветов
      for ( let i = 0; i < n; i++ ){
        gridArray[i] = [];
            for ( let j = 0; j < n; j++ ){
                var gridCell = document.createElement('div');  
                parentElement.appendChild(gridCell);
                gridCell.classList.add('whiteCell');
                gridArray[i][j] = gridCell;
  
                gridArray[i][j].addEventListener('click', () => {
                    gridArray[i][j].classList.add('blackCell');
                    var clr = generateRandomColor();
                    gridArray[i][j].style.backgroundColor = clr;
                  });
            }
    }
});


function generateRandomColor() {
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);

    var color = "rgb(" + red + ", " + green + ", " + blue + ")";
    return color;
}




darkening.addEventListener('click', () => {
  var N = n;
  for ( let i = 0; i < N; i++ ){
      for ( let j = 0; j < N; j++ ){
          var gridCell = gridArray[i][j];
          parentElement.removeChild(gridCell);
      };
      n--;
  }
  n = N; 
  //произошло очищение грида
  
      //создаётся новый такой же грид, но цвета затемняются
      for ( let i = 0; i < n; i++ ){
        gridArray[i] = [];
          for ( let j = 0; j < n; j++ ){
            var gridCell = document.createElement('div');  
            parentElement.appendChild(gridCell);
            gridCell.classList.add('whiteCell');
            gridArray[i][j] = gridCell;
  
            var darkCounter = 1;

            gridArray[i][j].addEventListener('click', () => {
              darkCounter = darkCounter-0.1;
              if (darkCounter < 0) darkCounter = 0.9;
                gridArray[i][j].classList.add('blackCell');
                var clr = darkeningColor(darkCounter);
                gridArray[i][j].style.backgroundColor = clr;
            });
          }
    }
})

function darkeningColor(darkCounter) {
  var red = Math.floor(darkCounter * 256);
  var green = Math.floor(darkCounter * 256);
  var blue = Math.floor(darkCounter * 256);

  var color = "rgb(" + red + ", " + green + ", " + blue + ")";
  return color;
}