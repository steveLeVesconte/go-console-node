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
const textIoUtil_1 = __importDefault(require("./textIoUtil"));
const GameAction_1 = require("../../services/models/GameAction");
function promptForGameAction() {
    const p = new Promise((resolve, reject) => {
        (() => __awaiter(this, void 0, void 0, function* () {
            try {
                let retries = 0;
                while ((retries < 10)) {
                    const inputText = yield textIoUtil_1.default.readLineAsync("enter and action (n,n/pass/exit): ");
                    if ((inputText.toLocaleLowerCase() === "exit") || (inputText.toLocaleLowerCase() === "back")) {
                        const result = new GameAction_1.GameAction(inputText, -1, -1);
                        resolve(result);
                        break;
                    }
                    if ((inputText.toLocaleLowerCase() === "pass")) {
                        const result = new GameAction_1.GameAction(inputText, -1, -1);
                        resolve(result);
                        break;
                    }
                    const resultLocationArray = inputText.split(',');
                    if (resultLocationArray.length === 2) {
                        if (resultLocationArray[0] && resultLocationArray[1]) {
                            const p0 = parseInt(resultLocationArray[0]);
                            const p1 = parseInt(resultLocationArray[1]);
                            if (isNaN(p1) || isNaN(p1)) {
                                textIoUtil_1.default.writeLine("row or col was not a number: " + inputText);
                            }
                            if (p1 > 18 || p1 < 0 || p0 > 18 || p0 < 0) {
                                textIoUtil_1.default.writeLine("row or col was out of bounds: " + inputText);
                            }
                            resolve(new GameAction_1.GameAction("play", p0, p1));
                            break;
                        }
                    }
                    textIoUtil_1.default.writeLine("Invalid Input: " + inputText);
                    retries++;
                }
            }
            catch (error) {
                reject(error);
                return;
            }
        }))();
    });
    return p;
}
const gameActionPrompter = {
    promptForGameAction
};
exports.default = gameActionPrompter;
//# sourceMappingURL=gameActionPrompter.js.map