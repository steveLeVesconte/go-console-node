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
const MatchRepository_1 = __importDefault(require("../../repositories/MatchRepository"));
const consoleUserPrompter_1 = __importDefault(require("../../ui/services/consoleUserPrompter"));
function chooseMatchId(gameCycleState) {
    const p = new Promise((resolve, reject) => {
        (() => __awaiter(this, void 0, void 0, function* () {
            try {
                const newGameCycleState = new GameCycleState_1.GameCycleState(gameCycleState.userId, gameCycleState.matchId, gameCycleState.isExit);
                const promtOptions = [];
                const matchList = yield MatchRepository_1.default.getMatchesByUserId(gameCycleState.userId);
                for (let i = 0; i < matchList.length; i++) {
                    promtOptions.push(i.toString());
                    console.log(i.toString() + " - " + matchList[i]._id + " - " + matchList[i].playerBlackName + " - " + matchList[i].playerWhiteName + " - " + matchList[i].status + " - " + matchList[i].createdAt);
                }
                promtOptions.push("exit");
                promtOptions.push("back");
                const userChoice = yield consoleUserPrompter_1.default.promptUerForChoice("enter number of user or 'exit' or 'back': ", promtOptions);
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
        }))();
    });
    return p;
}
const provideMatchId = {
    chooseMatchId
};
exports.default = provideMatchId;
//# sourceMappingURL=provideMatchId.js.map