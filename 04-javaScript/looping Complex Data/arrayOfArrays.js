// Matrix - Multi Dimensional Array

// Table - Grid - co ordinates - Graphs

// rows - X
// Columns - Y

// const table = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],

// ];

// for (let row = 0; row < table.length; row++) {
//     //console.log(table[row]);

//     // access to individual item
//     for (let column = 0; column < table.length; column++) {
//         // console.log(table[row][column]);// each row
//         console.log(table[column][row]); // row =0

//     }
// }

// Simple noughts and crosses game
const grid = [
    // ["X", "0", "X"],
    // ["X", "0", "X"],
    // ["0", "X", "X"]

    ["X", "0", "X"],
    ["X", "0", "0"],
    ["X", "X", "X"]
];

for (let row = 0; row < grid.length; row++) {
    const rowString = grid[row].join(""); //"X0X"
    let columnString = "";
    for (let column = 0; column < grid.length; column++) {
        columnString += grid[column][row]; // "XX0"

    }

    console.log(row, rowString, columnString);
    if (rowString === "XXX" || columnString === "XXX") {
        console.log("x wins");
        break;
    }

}