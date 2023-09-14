import messageWriter from "./messageWriter";

function writeBoard(board: string[][]): void {
  const stringOut = createBoardDispString(board);
  messageWriter.writeMessage(stringOut);
}

function createBoardDispString(board: string[][]): string {
  let result = "";
  result += "                       1 1 1 1 1 1 1 1 1 \n"
  result += "   0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 \n"
  for (let i = 0; i < 19; i++) {
    let rowstring = spacePad(i, 2) + " ";
    const row = board[i];
    for (let j = 0; j < 19; j++) {
      rowstring += row[j] + " ";
    }
    rowstring += spacePad(i, 2) + "\n";
    result += rowstring;
  }
  result += "   0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1 \n"
  result += "   0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 \n"
  return result;
}

const spacePad = (num: number, places: number) => String(num).padStart(places, ' ');
const boardWriter = {
  writeBoard,
  createBoardDispString
}

export default boardWriter;