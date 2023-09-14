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
const go_game_move_processor_1 = require("go-game-move-processor");
const TurnRepository_1 = __importDefault(require("../../repositories/TurnRepository"));
const GameCycleState_1 = require("../models/GameCycleState");
const boardWriter_1 = __importDefault(require("../../ui/services/boardWriter"));
const gameActionPrompter_1 = __importDefault(require("../../ui/services/gameActionPrompter"));
function runMatchCycle(gameCycleState) {
    const p = new Promise((resolve, reject) => {
        (() => __awaiter(this, void 0, void 0, function* () {
            console.log("in cycle - state: ", gameCycleState);
            try {
                if (!gameCycleState.matchId) {
                    console.log("in cycle, in no match id- state: ", gameCycleState);
                    resolve(gameCycleState); // nothing to do here.
                    return;
                }
                let finished = false;
                let retries = 0;
                while ((!finished) && (retries < 10)) {
                    const turn = yield TurnRepository_1.default.getLatestTurn(gameCycleState.matchId);
                    const boardArray = (0, go_game_move_processor_1.stringBoardToArray)(turn.resultState.board);
                    const previousBoardArray = (0, go_game_move_processor_1.stringBoardToArray)(turn.koCompareState.board);
                    boardWriter_1.default.writeBoard(boardArray);
                    const action = yield gameActionPrompter_1.default.promptForGameAction();
                    console.log('**** retries: ', retries);
                    console.log('**** action: ', action);
                    if (action.actionType === "exit") {
                        const newGameCycleState = new GameCycleState_1.GameCycleState(gameCycleState.userId, gameCycleState.matchId, true);
                        resolve(newGameCycleState);
                        return;
                    }
                    if (action.actionType === "back") {
                        const newGameCycleState = new GameCycleState_1.GameCycleState(gameCycleState.userId, "", false);
                        resolve(newGameCycleState);
                        return;
                    }
                    const submisssion = new go_game_move_processor_1.Submission(new go_game_move_processor_1.StonePlay(action.row, action.col), previousBoardArray, boardArray, action.actionType, getStoneColorOfCurrentPlayer(gameCycleState.userId, turn));
                    console.log('**** sub', submisssion);
                    const result = (0, go_game_move_processor_1.evaluateSubmission)(submisssion);
                    console.log("********** result: ", result);
                    finished = true;
                    retries++;
                }
            }
            catch (error) {
                console.log('in catch');
                reject(error);
                return;
            }
        }))();
    });
    return p;
}
function getStoneColorOfCurrentPlayer(userId, lastTurn) {
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
};
exports.default = matchCycle;
//# sourceMappingURL=matchCycle.js.map