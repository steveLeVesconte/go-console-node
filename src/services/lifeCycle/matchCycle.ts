import { StonePlay, Submission, evaluateSubmission, stringBoardToArray } from "go-game-move-processor";
import turnRepository from "../../repositories/TurnRepository";
import { GameCycleState } from "../models/GameCycleState";
import boardWriter from "../../ui/services/boardWriter";
import gameActionPrompter from "../../ui/services/gameActionPrompter";
import { TurnDto } from "../../repositories/dtos/turnDto";

function runMatchCycle(gameCycleState: GameCycleState) {
  const p: Promise<GameCycleState> = new Promise<GameCycleState>((resolve, reject) => {
    (async () => {
      console.log("in cycle - state: ", gameCycleState)

      try {
        if (!gameCycleState.matchId) {
          console.log("in cycle, in no match id- state: ", gameCycleState)
          resolve(gameCycleState);// nothing to do here.
          return;
        }
        let finished = false;
        let retries = 0;
        while ((!finished) && (retries < 10)) {
          const turn = await turnRepository.getLatestTurn(gameCycleState.matchId);
          const boardArray = stringBoardToArray(turn.resultState.board);
          const previousBoardArray = stringBoardToArray(turn.koCompareState.board);
          boardWriter.writeBoard(boardArray);
          const action = await gameActionPrompter.promptForGameAction();
          console.log('**** retries: ', retries)
          console.log('**** action: ', action)
          if (action.actionType === "exit") {
            const newGameCycleState = new GameCycleState(gameCycleState.userId, gameCycleState.matchId, true);
            resolve(newGameCycleState);
            return;
          }
          if (action.actionType === "back") {
            const newGameCycleState = new GameCycleState(gameCycleState.userId, "", false);
            resolve(newGameCycleState);
            return;
          }

          const submisssion: Submission = new Submission(
            new StonePlay(action.row, action.col),
            previousBoardArray,
            boardArray,
            action.actionType,
            getStoneColorOfCurrentPlayer(gameCycleState.userId, turn)
          );
          console.log('**** sub', submisssion);
          const result = evaluateSubmission(submisssion);
          console.log("********** result: ", result);
          finished = true;
          retries++;
        }

      } catch (error) {
        console.log('in catch');
        reject(error);
        return;
      }
    })();
  });
  return p;
}
function getStoneColorOfCurrentPlayer(
  userId: string,
  lastTurn: TurnDto
): string {
  let lastTurnColor = "w";
  if (userId == lastTurn.playerBlackId) {
    lastTurnColor == "b";
    console.log("--this turn player color set to b");
    return "b";
  }
  console.log("--last this-player color set to w");
  return (lastTurnColor = "w");
}
const matchCycle = {

  runMatchCycle
}

export default matchCycle;
