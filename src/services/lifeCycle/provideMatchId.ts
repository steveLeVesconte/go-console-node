import { GameCycleState } from "../models/GameCycleState";
import matchRepository from "../../repositories/MatchRepository";
import promptUerForChoice from "../../ui/services/consoleUserPrompter";

function chooseMatchId(gameCycleState: GameCycleState): Promise<GameCycleState> {
  const p: Promise<GameCycleState> = new Promise<GameCycleState>((resolve, reject) => {
    (async () => {

      try {
        const newGameCycleState = new GameCycleState(gameCycleState.userId, gameCycleState.matchId, gameCycleState.isExit);
        const promtOptions = [];
        const matchList = await matchRepository.getMatchesByUserId(gameCycleState.userId);

        for (let i = 0; i < matchList.length; i++) {
          promtOptions.push(i.toString());
          console.log(i.toString() + " - " + matchList[i]._id + " - " + matchList[i].playerBlackName + " - " + matchList[i].playerWhiteName + " - " + matchList[i].status + " - " + matchList[i].createdAt);
        }
        promtOptions.push("exit");
        promtOptions.push("back");

        const userChoice = await promptUerForChoice.promptUerForChoice("enter number of user or 'exit' or 'back': ", promtOptions);


        if (userChoice === 'exit') {
          newGameCycleState.isExit = true;
          resolve(newGameCycleState);
          return;
        }

        newGameCycleState.matchId = matchList[Number(userChoice)]._id;
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

const provideMatchId = {
  chooseMatchId
}

export default provideMatchId;