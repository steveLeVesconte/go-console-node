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
const inputHandlerUserId_1 = __importDefault(require("./inputHandlerUserId"));
const textIoUtil_1 = __importDefault(require("../../ui/services/textIoUtil"));
const inputHandlerMatchId_1 = __importDefault(require("./inputHandlerMatchId"));
const handlerMatch_1 = __importDefault(require("./handlerMatch"));
let gameCycleState = new GameCycleState_1.GameCycleState(); //state!
const runGameCycle = () => __awaiter(void 0, void 0, void 0, function* () {
    let counter = 0;
    while (!gameCycleState.isExit) {
        try {
            gameCycleState = yield inputHandlerUserId_1.default.handleNoUserId(gameCycleState);
            gameCycleState = yield inputHandlerMatchId_1.default.handleNoMatchId(gameCycleState);
            gameCycleState = yield handlerMatch_1.default.handleMatch(gameCycleState);
            if (counter > 3) {
                gameCycleState.isExit = true;
            }
            counter++;
        }
        catch (error) {
            console.log(error);
        }
    }
    textIoUtil_1.default.writeLine("exiting game");
    process.exit;
});
const gameLifeCycle = {
    runGameCycle
};
exports.default = gameLifeCycle;
//# sourceMappingURL=gameLifeCycle.js.map