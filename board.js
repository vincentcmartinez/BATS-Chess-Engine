let gameStarted = false;
const board = document.querySelector("#myBoard");
const boardHeight = board.clientHeight;
let boardwidth = 8;
const CHARS = "ABCDEFGH"
let isWhite = true;
const coordNumberHolder = document.querySelector('.chess-container');
function populateBoard() {
    for (let i = isWhite ? 0 : (boardwidth * boardwidth)-1; isWhite ? i < boardwidth * boardwidth : i >= 0; isWhite ? i++ : i--) {
        let row;
        let offset;
        switch(true) {
            case i<8: {
                row = 8;
                offset=0;
                break;
            }
            case i<16: {
                row = 7;
                offset=1;
                break;
            }
            case i<24: {
                row = 6;
                offset=0;
                break;
            }
            case i<32: {
                row = 5;
                offset=1;
                break;
            }
            case i<40: {
                row = 4;
                offset=0;
                break;
            }
            case i<48: {
                row = 3;
                offset=1;
                break;
            }
            case i<56: {
                row = 2;
                offset=0;
                break;
            }
            case i<64: {
                row = 1;
                offset=1;
                break;
            }
        }
        let backgroundColor;
        if((i+offset)%2==0) {
            backgroundColor = "rgb(255,255,255)";
        }
        else {
            backgroundColor = "rgb(0,0,0)"
        }
        let letter = CHARS.charAt(i%8);
        let newDiv = document.createElement("div");
        newDiv.setAttribute("class", "blankSquare");
        newDiv.setAttribute("id", `${letter}${row}`);
        newDiv.style.backgroundColor = backgroundColor;
        newDiv.style.maxWidth = boardHeight/boardwidth + "px";
        newDiv.style.maxHeight = boardHeight/boardwidth + "px";
        newDiv.style.minWidth = boardHeight/boardwidth + "px";
        newDiv.style.minHeight = boardHeight/boardwidth + "px";
        newDiv.style.flex = 1;
        board.appendChild(newDiv);
        
        
    }
    /*fill in coordinate labels*/
    let coordNumbers = document.createElement("p");
    coordNumbers.style.writingMode = "vertical-lr";
    coordNumbers.style.textOrientation = "upright";
    coordNumbers.style.height = `${boardHeight}px`;
    coordNumbers.style.letterSpacing = `${boardHeight/8}px`;
    let activeNums = isWhite ? "87654321" : "12345678";
    coordNumbers.textContent = activeNums;
    coordNumberHolder.insertBefore(coordNumbers, board);
    /* let squares = document.querySelectorAll("div.blankSquare");
    for(let square of squares) {
            square.addEventListener("mouseover",function() 
            {
               draw(square);
            });
        } */
}
function repopulateBoard() {
    clear();
    let squares = document.querySelectorAll("div.blankSquare");
    for(let square of squares) {
        board.removeChild(square);
    }
    populateBoard();

}

function clear() {
    let squares = document.querySelectorAll("div.blankSquare");
    for(let square of squares) {
        square.style.backgroundColor = "rgb(255,255,255)";
    }
}

