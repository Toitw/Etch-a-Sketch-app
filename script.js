//Create a variable for the number of columns/lines. They will always
//Mantain proportion so it will be the same
let columnLineNumber = 16;
let totalSquareNumber = columnLineNumber*columnLineNumber

//Function that creates squares depending on the columnLineNumber
//variable. It will stop when reached it.
const whiteboardContainer = document.querySelector(".whiteboardContainer");
const square = document.createElement("div");
square.classList.add("square");
function createSquares () {
    for(let i = 0; i < totalSquareNumber; i++) {
        console.log(columnLineNumber);
        const square = document.createElement("div");
        square.classList.add("square");
        whiteboardContainer.appendChild(square);
    };
}