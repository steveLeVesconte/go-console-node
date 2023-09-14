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
const consoleUserPrompter_1 = __importDefault(require("./consoleUserPrompter"));
const textIoUtil_1 = __importDefault(require("./textIoUtil"));
describe("consoleUserPrompter", () => {
    test("when promptUerForChoice called, ReadLineAsync called with prompt text", () => __awaiter(void 0, void 0, void 0, function* () {
        const mockReadLineAsync = jest.spyOn(textIoUtil_1.default, 'readLineAsync')
            .mockImplementation(() => {
            return Promise.resolve('n');
        });
        const promtOptions = ["r", "n", "exit"];
        const userChoice = yield consoleUserPrompter_1.default.promptUerForChoice("(N)ew Ueser or (R)eturning User: ", promtOptions);
        expect(userChoice).toBe('n');
        expect(mockReadLineAsync).toBeCalledWith("(N)ew Ueser or (R)eturning User: ");
        expect(mockReadLineAsync).toBeCalled();
    }));
    test("when promptUerForChoice called, invalid input detected", () => __awaiter(void 0, void 0, void 0, function* () {
        const mockReadLineAsync = jest.spyOn(textIoUtil_1.default, 'readLineAsync')
            .mockImplementationOnce(() => {
            return Promise.resolve('xxx');
        })
            .mockImplementationOnce(() => {
            return Promise.resolve('r');
        });
        const mockWriteLine = jest.spyOn(textIoUtil_1.default, 'writeLine');
        const promtOptions = ["r", "n", "exit"];
        const userChoice = yield consoleUserPrompter_1.default.promptUerForChoice("(N)ew Ueser or (R)eturning User: ", promtOptions);
        expect(userChoice).toBe('r');
        expect(mockReadLineAsync).toBeCalledWith("(N)ew Ueser or (R)eturning User: ");
        expect(mockReadLineAsync).toBeCalled();
        expect(mockWriteLine).toBeCalled();
        expect(mockWriteLine).toBeCalledWith("Invalid Input: xxx");
    }));
});
//# sourceMappingURL=consoleUserPrompter.test.js.map