"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const messageWriter_1 = __importDefault(require("./messageWriter"));
function writeBoard(board) {
    const stringOut = createBoardDispString(board);
    messageWriter_1.default.writeMessage(stringOut);
}
function createBoardDispString(board) {
    let result = "";
    result += "                       1 1 1 1 1 1 1 1 1 \n";
    result += "   0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 \n";
    for (let i = 0; i < 19; i++) {
        let rowstring = spacePad(i, 2) + " ";
        const row = board[i];
        for (let j = 0; j < 19; j++) {
            rowstring += row[j] + " ";
        }
        rowstring += spacePad(i, 2) + "\n";
        result += rowstring;
    }
    result += "   0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1 \n";
    result += "   0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 \n";
    return result;
}
const spacePad = (num, places) => String(num).padStart(places, ' ');
const boardWriter = {
    writeBoard,
    createBoardDispString
};
exports.default = boardWriter;
//# sourceMappingURL=boardWriter.js.map