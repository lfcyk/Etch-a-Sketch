const grid = document.querySelector('#grid')



function makeGrid(squareNum) {
    for(let i=0; i < squareNum; i++) {
        for(let j=0; j < squareNum; j++) {
            let squareSize = 480/squareNum;
            const div = document.createElement('div');
            div.style.cssText = `height: ${squareSize}px; width: ${squareSize}px; border-color: black; background-color : white;`;
            div.addEventListener("mouseover", (e) => {
                let randomColor = Math.floor(Math.random()*16777215).toString(16);
                e.target.style.backgroundColor = "#" + randomColor;
            })
            grid.appendChild(div);
        }
    }
}

makeGrid(16);

const setGridButton = document.querySelector('#set-grid-button')
setGridButton.addEventListener('click', () => {
    let squareNum = window.prompt("how many number of squares per side do you want for the new grid?", 16);
    
    while (grid.hasChildNodes()) {
        grid.removeChild(grid.firstChild);
    }
    
    squareNum = squareNum > 100? 100 : squareNum;

    makeGrid(squareNum);
});



