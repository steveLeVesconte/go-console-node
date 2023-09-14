import { TurnDto } from "../repositories/dtos/turnDto";

export function getStoneColorOfCurrentTurn(lastTurn: TurnDto): string {
  console.log(
    "turn current color set to: ",
    lastTurn.turnPlayer[0] == "w" ? "b" : "w"
  );
  return lastTurn.turnPlayer[0] == "w" ? "b" : "w";
}

export function boardArrayToString(boardArray: string[][]): string {
  let result = "";
  for (let i = 0; i < 19; i++) {
    let rowstring = "";
    const row = boardArray[i];
    for (let j = 0; j < 19; j++) {
      rowstring += row[j];
    }
    if (i < 18) rowstring += ",";
    result += rowstring;
  }
  return result;
}

export function stringBoardToArray(boardString: string): string[][] {

  const rows: string[] = boardString.split(' ').join('').split(',');
  const board: string[][] = [];
  for (let i = 0; i < rows.length; i++) {
    const row = rows[i];
    const cols = Array.from(row);
    const outputCol: string[] = [];
    for (let j = 0; j < row.length; j++) {
      outputCol.push(cols[j]);
    }
    board.push(outputCol);
  }
  return board;
}

