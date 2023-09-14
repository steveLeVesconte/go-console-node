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
const inputHandlerUserId_1 = __importDefault(require("./inputHandlerUserId"));
const textIoUtil_1 = __importDefault(require("../../ui/services/textIoUtil"));
const GameCycleState_1 = require("../models/GameCycleState");
const gameLifeCycle_1 = __importDefault(require("./gameLifeCycle"));
const inputHandlerMatchId_1 = __importDefault(require("./inputHandlerMatchId"));
const handlerMatch_1 = __importDefault(require("./handlerMatch"));
describe("gameLifeCycle", () => {
    afterEach(() => {
        jest.clearAllMocks();
    });
    test("can exit on state 'isExiting'", () => __awaiter(void 0, void 0, void 0, function* () {
        const mockHandleNoUserId = jest.spyOn(inputHandlerUserId_1.default, 'handleNoUserId') //.mockResolvedValue("n");
            .mockImplementation(() => {
            const isExitingResult = new GameCycleState_1.GameCycleState("", "", true);
            return Promise.resolve(isExitingResult);
        });
        const mockHandleNoMatchId = jest.spyOn(inputHandlerMatchId_1.default, 'handleNoMatchId') //.mockResolvedValue("n");
            .mockImplementation(() => {
            const isExitingResult = new GameCycleState_1.GameCycleState("", "", true);
            return Promise.resolve(isExitingResult);
        });
        const mockHandlMatch = jest.spyOn(handlerMatch_1.default, 'handleMatch') //.mockResolvedValue("n");
            .mockImplementation(() => {
            const isExitingResult = new GameCycleState_1.GameCycleState("", "", true);
            return Promise.resolve(isExitingResult);
        });
        const mockWriteLine = jest.spyOn(textIoUtil_1.default, 'writeLine');
        yield gameLifeCycle_1.default.runGameCycle();
        expect(mockHandlMatch).toBeCalled();
        expect(mockHandleNoMatchId).toBeCalled();
        expect(mockWriteLine).toBeCalled();
        expect(mockWriteLine).toBeCalledWith("exiting game");
        expect(mockHandleNoUserId).toBeCalled();
    }));
});
//# sourceMappingURL=gameLifeCycle.test.js.map