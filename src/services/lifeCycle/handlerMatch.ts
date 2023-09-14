import { GameCycleState } from "../models/GameCycleState";
import matchCycle from "./matchCycle";

function handleMatch(gameCycleState: GameCycleState): Promise<GameCycleState> {
  const p: Promise<GameCycleState> = new Promise<GameCycleState>((resolve, reject) => {
    (async () => {
      try {
        let newGameCycleState = new GameCycleState(gameCycleState.userId, gameCycleState.matchId, gameCycleState.isExit);
        if ((!gameCycleState.userId) || (!gameCycleState.matchId)) {
          resolve(gameCycleState);// nothing to do here.
          return;
        }
        console.log("handleMatch before runMatchCycle state: ", gameCycleState);

        newGameCycleState = await matchCycle.runMatchCycle(gameCycleState);
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

const handlerMatch = {
  handleMatch
}

export default handlerMatch;
