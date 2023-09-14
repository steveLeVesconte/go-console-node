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
function promptUerForChoice(promptText, promptOptions) {
    const p = new Promise((resolve, reject) => {
        (() => __awaiter(this, void 0, void 0, function* () {
            try {
                let finished = false;
                let validatedText = "";
                let retries = 0;
                while ((!finished) && (retries < 10)) {
                    const inputText = yield textIoUtil_1.default.readLineAsync(promptText);
                    if (promptOptions.some(e => e === inputText.toLowerCase().trim())) {
                        finished = true;
                        validatedText = inputText.toLowerCase().trim();
                        resolve(validatedText);
                        return;
                    }
                    else {
                        textIoUtil_1.default.writeLine("Invalid Input: " + inputText);
                        retries++;
                    }
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
const consoleUserPrompter = {
    promptUerForChoice
};
exports.default = consoleUserPrompter;
//# sourceMappingURL=consoleUserPrompter.js.map