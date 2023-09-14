"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InputHandler = void 0;
//import { writeMessage } from "../ui/services/messageWriter";
//import { IUiMessageWriter } from "../ui/interfaces/IUiMessageWriter";
const UtilityFunctions_1 = require("./UtilityFunctions");
const TurnResult_1 = require("./models/TurnResult");
const go_game_move_processor_1 = require("go-game-move-processor");
const TurnRepository_1 = __importDefault(require("../repositories/TurnRepository"));
const messageWriter_1 = __importDefault(require("../ui/services/messageWriter"));
class InputHandler {
    constructor() { }
    inputHandlerExit(input) {
        if (input.toLowerCase() == "exit") {
            messageWriter_1.default.writeMessage("exiting match");
            return new TurnResult_1.TurnResult(true, true);
        }
        return new TurnResult_1.TurnResult(false, false);
    }
    inputHandlerInvalid(input) {
        messageWriter_1.default.writeMessage("Invalid Input: " + input);
        return new TurnResult_1.TurnResult(false, false);
    }
    inputHandlerPass(input, turnDto) {
        const p = new Promise((resolve) => {
            if (input.toLowerCase() == "pass") {
                messageWriter_1.default.writeMessage("passing");
                const resultDto = JSON.parse(JSON.stringify(turnDto));
                resultDto.action.actionType = "pass";
                resultDto.action.location = [-1, -1];
                resultDto.turnPlayer = (0, UtilityFunctions_1.getStoneColorOfCurrentTurn)(turnDto);
                resultDto.turnNumber = turnDto.turnNumber + 1;
                resultDto.koCompareState = resultDto.initialState;
                resultDto.initialState = resultDto.resultState;
                resultDto.isValid = true;
                resultDto.isKo = false;
                resultDto.atari = false;
                resultDto.comments = "pass";
                resultDto.cratedAt = "";
                resultDto.updatedAt = "";
                TurnRepository_1.default.createTurn(resultDto).then(() => {
                    resolve(new TurnResult_1.TurnResult(true, false));
                    return p;
                });
            }
            else {
                resolve(new TurnResult_1.TurnResult(false, false));
                return p;
            }
            // resolve(new TurnResult(false, false));
        });
        return p;
    }
    inputHandlerStonePlay(input, turnDto) {
        const p = new Promise((resolve) => {
            const pattern = "^\\d+,\\d+$";
            if (!input.toLowerCase().match(pattern)) {
                resolve(new TurnResult_1.TurnResult(false, false));
                return p;
            }
            else {
                const stonePlay = getStonePlay(input);
                if (stonePlay.col > 18 || stonePlay.col < 0) {
                    messageWriter_1.default.writeMessage("invalid stone play, col out of range: " + stonePlay.col);
                    resolve(new TurnResult_1.TurnResult(false, false));
                    return p;
                }
                if (stonePlay.row > 18 || stonePlay.row < 0) {
                    messageWriter_1.default.writeMessage("invalid stone play, row out of range: " + stonePlay.row);
                    resolve(new TurnResult_1.TurnResult(false, false));
                    return p;
                }
                const submisssion = composeSubmission(turnDto, stonePlay);
                const evalResult = (0, go_game_move_processor_1.evaluateSubmission)(submisssion);
                // if (evalResult.isKo) {
                //   this.messageWriter.writeMessage(" Error: Ko rule violated ");
                //   resolve(new TurnResult(false, false));
                // }
                if (evalResult.isSuicide) {
                    messageWriter_1.default.writeMessage("Error: Suiside rule violated");
                    resolve(new TurnResult_1.TurnResult(false, false));
                    return p;
                }
                if (evalResult.isCollision) {
                    messageWriter_1.default.writeMessage("Error: " + evalResult.reasonSubmissionInvalid);
                    //this.messageWriter.writeMessage("Error: Collision rule violated");
                    resolve(new TurnResult_1.TurnResult(false, false));
                    return p;
                }
                if ((!evalResult.isValidSubmission) || (!evalResult.isLegalPlay)) {
                    messageWriter_1.default.writeMessage("Error: " + evalResult.reasonSubmissionInvalid);
                    resolve(new TurnResult_1.TurnResult(false, false));
                    return p;
                }
                messageWriter_1.default.writeMessage(`processed: stone play - stones captured: ${evalResult.capturedStones}`);
                const resultDto = this.composeTurnResultDto(turnDto, evalResult, stonePlay);
                TurnRepository_1.default.createTurn(resultDto).then(() => {
                    resolve(new TurnResult_1.TurnResult(true, false));
                    return p;
                });
                // resolve(new TurnResult(true, false));
            }
        });
        return p;
    }
    composeTurnResultDto(turnDto, evalResult, stonePlay) {
        const resultState = {
            board: (0, UtilityFunctions_1.boardArrayToString)(evalResult.newBoard),
            prisonersOfBlack: turnDto.turnPlayer == "w" ? evalResult.capturedStones : 0,
            prisonersOfWhite: turnDto.turnPlayer == "b" ? evalResult.capturedStones : 0,
        };
        const koCompareState = {
            board: turnDto.resultState.board,
            prisonersOfBlack: turnDto.resultState.prisonersOfBlack,
            prisonersOfWhite: turnDto.resultState.prisonersOfWhite,
        };
        const dateStamp = new Date().toISOString();
        const resultDto = JSON.parse(JSON.stringify(turnDto));
        resultDto.action.actionType = "play";
        resultDto.action.location = [stonePlay.row, stonePlay.col];
        resultDto.turnPlayer = (0, UtilityFunctions_1.getStoneColorOfCurrentTurn)(turnDto);
        resultDto.turnNumber = turnDto.turnNumber + 1;
        resultDto.resultState = resultState;
        resultDto.koCompareState = koCompareState;
        resultDto.initialState = resultDto.resultState;
        resultDto.isValid = true;
        resultDto.isKo = false;
        resultDto.atari = evalResult.isAtari;
        resultDto.comments = "stone play";
        resultDto.cratedAt = dateStamp;
        resultDto.updatedAt = dateStamp;
        return resultDto;
    }
}
exports.InputHandler = InputHandler;
function getStonePlay(input) {
    const stonePlayStringArray = input.split(',');
    const col = parseInt(stonePlayStringArray[0]);
    const row = parseInt(stonePlayStringArray[1]);
    return new go_game_move_processor_1.StonePlay(row, col);
}
function composeSubmission(turnDto, stonePlay) {
    const boardArray = (0, go_game_move_processor_1.stringBoardToArray)(turnDto.resultState.board);
    const previousBoardArray = (0, go_game_move_processor_1.stringBoardToArray)(turnDto.koCompareState.board);
    const submisssion = new go_game_move_processor_1.Submission(stonePlay, previousBoardArray, boardArray, "play", (0, UtilityFunctions_1.getStoneColorOfCurrentTurn)(turnDto));
    return submisssion;
}
//# sourceMappingURL=InputHandler.js.map