import { GameCycleState } from "../models/GameCycleState";
import userRepository from "../../repositories/UserRepository";
import promptUerForChoice from "../../ui/services/consoleUserPrompter";

function chooseUserId(gameCycleState: GameCycleState): Promise<GameCycleState> {
  const p: Promise<GameCycleState> = new Promise<GameCycleState>((resolve, reject) => {
    (async () => {
      try {
        const newGameCycleState = new GameCycleState(gameCycleState.userId, gameCycleState.matchId, gameCycleState.isExit);

        if (gameCycleState.userId) {
          resolve(newGameCycleState);// nothing to do here.
          return;
        }

        const promtOptions = [];
        const gameUserList = await userRepository.getGameUsers();

        for (let i = 0; i < gameUserList.length; i++) {
          promtOptions.push(i.toString());
          console.log(i.toString() + " - " + gameUserList[i]._id + " - " + gameUserList[i].name);
        }
        promtOptions.push("exit");
        promtOptions.push("back");

        const userChoice = await promptUerForChoice.promptUerForChoice("enter number of user or 'exit' or 'back': ", promtOptions);

        if (userChoice === 'exit') {
          newGameCycleState.isExit = true;
          resolve(newGameCycleState);
          return;
        }

        newGameCycleState.userId = gameUserList[Number(userChoice)]._id;
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

const provideUserId = {
  chooseUserId
}

export default provideUserId;