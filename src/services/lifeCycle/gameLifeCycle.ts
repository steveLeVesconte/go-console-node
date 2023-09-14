import { GameCycleState } from "../models/GameCycleState";
import inputHandlerUserId from "./inputHandlerUserId";
import textIoUtil from "../../ui/services/textIoUtil";
import inputHandlerMatchId from "./inputHandlerMatchId";
import handlerMatch from "./handlerMatch";

let gameCycleState = new GameCycleState();//state!

const runGameCycle = async () => {
    let counter = 0;
    while (!gameCycleState.isExit) {
        try {
            gameCycleState = await inputHandlerUserId.handleNoUserId(gameCycleState);
            gameCycleState = await inputHandlerMatchId.handleNoMatchId(gameCycleState);
            gameCycleState = await handlerMatch.handleMatch(gameCycleState);

            if (counter > 3) {
                gameCycleState.isExit = true;
            }
            counter++;
        }
        catch (error) {
            console.log(error);
        }
    }
    textIoUtil.writeLine("exiting game");
    process.exit;
}

const gameLifeCycle = {
    runGameCycle
}

export default gameLifeCycle;
