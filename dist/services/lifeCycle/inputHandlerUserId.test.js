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
const consoleUserPrompter_1 = __importDefault(require("../../ui/services/consoleUserPrompter"));
const GameCycleState_1 = require("../models/GameCycleState");
const inputHandlerUserId_1 = __importDefault(require("./inputHandlerUserId"));
const provideUserId_1 = __importDefault(require("./provideUserId"));
describe("handleNoUserId", () => {
    afterEach(() => {
        jest.clearAllMocks();
    });
    test("can see console", () => __awaiter(void 0, void 0, void 0, function* () {
        const gameCycleStateFromChoose = new GameCycleState_1.GameCycleState("99999999", "", false);
        const chooseUserIdSpy = jest.spyOn(provideUserId_1.default, 'chooseUserId').mockResolvedValue(gameCycleStateFromChoose);
        const promptUerForChoiceSpy = jest.spyOn(consoleUserPrompter_1.default, 'promptUerForChoice').mockResolvedValue("r");
        const gameCycleState = new GameCycleState_1.GameCycleState("", "", false);
        const newGameCycleState = yield inputHandlerUserId_1.default.handleNoUserId(gameCycleState);
        expect(newGameCycleState.isExit).toBe(false);
        expect(newGameCycleState.userId).toBe("99999999");
        expect(chooseUserIdSpy).toBeCalled();
        expect(promptUerForChoiceSpy).toBeCalled();
    }));
});
//# sourceMappingURL=inputHandlerUserId.test.js.map