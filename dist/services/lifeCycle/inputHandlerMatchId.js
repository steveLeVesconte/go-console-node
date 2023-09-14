"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const GameCycleState_1 = require("../models/GameCycleState");
const consoleUserPrompter_1 = __importDefault(require("../../ui/services/consoleUserPrompter"));
const provideMatchId_1 = __importDefault(require("./provideMatchId"));
function handleNoMatchId(gameCycleState) {
    const p = new Promise((resolve, reject) => {
        (() => __awaiter(this, void 0, void 0, function* () {
            try {
                let newGameCycleState = new GameCycleState_1.GameCycleState(gameCycleState.userId, gameCycleState.matchId, gameCycleState.isExit);
                if (gameCycleState.matchId) {
                    resolve(newGameCycleState); // nothing to do here.
                    return;
                }
                const userChoice = yield consoleUserPrompter_1.default.promptUerForChoice("(N)ew Match or (C)ontinuing Match or 'exit' or 'back': ", ["n", "c", "exit", 'back']);
                if (userChoice === 'exit') {
                    console.log("match handler user choice exit");
                    newGameCycleState.isExit = true;
                    resolve(newGameCycleState);
                    return;
                }
                if (userChoice === 'c') {
                    console.log("match handler user choice ccccccccccccccc");
                    newGameCycleState = yield provideMatchId_1.default.chooseMatchId(gameCycleState);
                    console.log("match handler user choice ccccccccccccccc got matchId: ", newGameCycleState);
                }
                resolve(newGameCycleState);
                return;
            }
            catch (error) {
                reject(error);
                return;
            }
        }))();
    });
    return p;
}
const inputHandlerMatchId = {
    handleNoMatchId
};
exports.default = inputHandlerMatchId;
//# sourceMappingURL=inputHandlerMatchId.js.map