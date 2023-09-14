import { GameCycleState } from "../models/GameCycleState";
import consoleUserPrompter from "../../ui/services/consoleUserPrompter";
import provideUserId from "./provideUserId";

function handleNoUserId(gameCycleState: GameCycleState): Promise<GameCycleState> {
  const p: Promise<GameCycleState> = new Promise<GameCycleState>((resolve, reject) => {
    (async () => {
      try {
        let newGameCycleState = new GameCycleState(gameCycleState.userId, gameCycleState.matchId, gameCycleState.isExit);
        if (gameCycleState.userId) {
          resolve(newGameCycleState);// nothing to do here.
          return;
        }
        const userChoice = await consoleUserPrompter.promptUerForChoice("(N)ew Ueser or (R)eturning User or 'exit': ", ["r", "n", "exit"]);

        if (userChoice === 'exit') {
          newGameCycleState.isExit = true;
          resolve(newGameCycleState);
          return;
        }

        if (userChoice === 'r') {
          newGameCycleState = await provideUserId.chooseUserId(gameCycleState);
        }
        resolve(newGameCycleState);
        return;
      }
      catch (error) {
        reject(error);
        return;
      }
    })();
  });
  return p;
}

const inputHandlerUserId = {
  handleNoUserId
}

export default inputHandlerUserId;
