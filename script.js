//Start the grid from the beginning 16x16
let body = document.querySelector("body");
body.onload = createSquares;

//Create a variable for the number of columns/lines. They will always
//Maintain proportion so it will be the same
let columnLineNumber = 16;
let totalSquareNumber = columnLineNumber*columnLineNumber;
const squareWidth = 640/columnLineNumber;

//Function that creates squares depending on the columnLineNumber
//variable. It will stop when reached it.
const whiteboardContainer = document.querySelector(".whiteboardContainer");
function createSquares () {
    let totalSquareNumber = columnLineNumber*columnLineNumber;
    const squareWidth = 640/columnLineNumber;
    for(let i = 0; i < totalSquareNumber; i++) {
        console.log(columnLineNumber);
        const square = document.createElement("div");
        square.classList.add("square");
        square.style.margin = "0";
        square.style.width = `${squareWidth}` + "px";
        square.style.flexGrow = "1"; 
        square.style.flexShrink = "1";
        square.style.flexBasis = "initial";
        whiteboardContainer.appendChild(square);
        square.addEventListener("mouseover", function () {
            square.style.backgroundColor = "black";
        });
    };
}

//Reset the whiteboard
const resetButton = document.querySelector(".resetButton");
resetButton.addEventListener("click", function() {
    const squares = document.querySelectorAll(".square");
    squares.forEach(element => {
    element.style.backgroundColor = "white";
    });
});

//Multicolor Button
const multicolorButton = document.querySelector(".multicolorButton");
multicolorButton.addEventListener("click", multicolor);

//Multicolor function
function multicolor () {
    const multicolorSquares = document.querySelectorAll(".square");
    multicolorSquares.forEach(element => {
	element.addEventListener("mouseover", function() {
        //that backgroundColor is a formula to create random color
        element.style.backgroundColor = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
    });
    });
}

//Black button
const blackButton = document.querySelector(".blackButton");
blackButton.addEventListener("click", blackColor);

//Blackcolor function
function blackColor () {
    const blackSquares = document.querySelectorAll(".square");
    blackSquares.forEach(element => {
	element.addEventListener("mouseover", function() {
        element.style.backgroundColor = "black";
    });
    });
}

//Change size button
const changeSize = document.querySelector(".changeSize");
changeSize.addEventListener("click", enterRows);

//Change number of rows function
function enterRows () {
    const selectRows = prompt("Enter the number of rows", "Max 64 rows");
    columnLineNumber = selectRows;
    if(columnLineNumber > 64) {
        prompt("The maximum number of rows is 64. Please try again", "Max 64 rows");
    } else {
    removeSquares();
    createSquares();
    }
}

//Auxiliary function to remove grid before changing the size
function removeSquares () {
    const squares = document.querySelectorAll(".square");
    squares.forEach(element => {
        whiteboardContainer.removeChild(element);
    })
}
//Change the square background color to black when hovering over
function blackSquare () {
    square.style[background-color] = "black";
}
