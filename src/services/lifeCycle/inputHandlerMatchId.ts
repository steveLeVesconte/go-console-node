import { GameCycleState } from "../models/GameCycleState";
import consoleUserPrompter from "../../ui/services/consoleUserPrompter";
import provideMatchId from "./provideMatchId";

function handleNoMatchId(gameCycleState: GameCycleState): Promise<GameCycleState> {
  const p: Promise<GameCycleState> = new Promise<GameCycleState>((resolve, reject) => {
    (async () => {

      try {
        let newGameCycleState = new GameCycleState(gameCycleState.userId, gameCycleState.matchId, gameCycleState.isExit);

        if (gameCycleState.matchId) {
          resolve(newGameCycleState);// nothing to do here.
          return;
        }

        const userChoice = await consoleUserPrompter.promptUerForChoice("(N)ew Match or (C)ontinuing Match or 'exit' or 'back': ", ["n", "c", "exit", 'back']);

        if (userChoice === 'exit') {
          console.log("match handler user choice exit");
          newGameCycleState.isExit = true;
          resolve(newGameCycleState);
          return;
        }

        if (userChoice === 'c') {
          console.log("match handler user choice ccccccccccccccc");
          newGameCycleState = await provideMatchId.chooseMatchId(gameCycleState);
          console.log("match handler user choice ccccccccccccccc got matchId: ", newGameCycleState);
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

const inputHandlerMatchId = {
  handleNoMatchId
}

export default inputHandlerMatchId;
