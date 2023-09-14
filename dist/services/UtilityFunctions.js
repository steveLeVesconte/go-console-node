"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stringBoardToArray = exports.boardArrayToString = exports.getStoneColorOfCurrentTurn = void 0;
function getStoneColorOfCurrentTurn(lastTurn) {
    console.log("turn current color set to: ", lastTurn.turnPlayer[0] == "w" ? "b" : "w");
    return lastTurn.turnPlayer[0] == "w" ? "b" : "w";
}
exports.getStoneColorOfCurrentTurn = getStoneColorOfCurrentTurn;
function boardArrayToString(boardArray) {
    let result = "";
    for (let i = 0; i < 19; i++) {
        let rowstring = "";
        const row = boardArray[i];
        for (let j = 0; j < 19; j++) {
            rowstring += row[j];
        }
        if (i < 18)
            rowstring += ",";
        result += rowstring;
    }
    return result;
}
exports.boardArrayToString = boardArrayToString;
function stringBoardToArray(boardString) {
    const rows = boardString.split(' ').join('').split(',');
    const board = [];
    for (let i = 0; i < rows.length; i++) {
        const row = rows[i];
        const cols = Array.from(row);
        const outputCol = [];
        for (let j = 0; j < row.length; j++) {
            outputCol.push(cols[j]);
        }
        board.push(outputCol);
    }
    return board;
}
exports.stringBoardToArray = stringBoardToArray;
//# sourceMappingURL=UtilityFunctions.js.map