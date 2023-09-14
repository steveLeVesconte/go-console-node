import textIoUtil from "./textIoUtil";
import { GameAction } from "../../services/models/GameAction";

function promptForGameAction() {
    const p: Promise<GameAction> = new Promise<GameAction>((resolve, reject) => {
        (async () => {
            try {
                let retries = 0;
                while ((retries < 10)) {
                    const inputText = await textIoUtil.readLineAsync("enter and action (n,n/pass/exit): ");
                    if ((inputText.toLocaleLowerCase() === "exit") || (inputText.toLocaleLowerCase() === "back")) {
                        const result = new GameAction(inputText, -1, -1);
                        resolve(result);
                        break;
                    }
                    if ((inputText.toLocaleLowerCase() === "pass")) {
                        const result = new GameAction(inputText, -1, -1);
                        resolve(result);
                        break;
                    }
                    const resultLocationArray = inputText.split(',');

                    if (resultLocationArray.length === 2) {
                        if (resultLocationArray[0] && resultLocationArray[1]) {
                            const p0 = parseInt(resultLocationArray[0]);
                            const p1 = parseInt(resultLocationArray[1]);
                            if (isNaN(p1) || isNaN(p1)) {
                                textIoUtil.writeLine("row or col was not a number: " + inputText);
                            }
                            if (p1 > 18 || p1 < 0 || p0 > 18 || p0 < 0) {
                                textIoUtil.writeLine("row or col was out of bounds: " + inputText);
                            }
                            resolve(new GameAction("play", p0, p1));
                            break;
                        }
                    }
                    textIoUtil.writeLine("Invalid Input: " + inputText);
                    retries++;
                }
            } catch (error) {
                reject(error);
                return;
            }
        })();
    });
    return p;
}

const gameActionPrompter = {
    promptForGameAction
}

export default gameActionPrompter;
