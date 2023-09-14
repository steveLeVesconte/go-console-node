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
// import { TurnRepository } from "../repositories/TurnRepository";
// import { UiConsoleMessageWriter } from "../ui/UiConsoleMessageWriter";
// import { IUiMessageWriter } from "../ui/interfaces/IUiMessageWriter";
//import { TurnRepository } from "../repositories/TurnRepository";
//import { TurnDto } from "../repositories/dtos/turnDto";
const TurnRepository_1 = __importDefault(require("../repositories/TurnRepository"));
const messageWriter_1 = __importDefault(require("../ui/services/messageWriter"));
//import { writeMessage } from "../ui/services/messageWriter";
const InputHandler_1 = require("./InputHandler");
// jest.mock('../repositories/TurnRepository', () => ({
//   createTurn: jest.fn().mockResolvedValue(false)
// }))
// jest.mock('../ui/services/messageWriter', () => ({
//   writeMessage: jest.fn()
// }))
// jest.mock("createTurn");
// const mockCreatTurn = createTurn as jest.Mocked<typeof createTurn>;
afterEach(() => {
    jest.clearAllMocks();
});
// describe("inputHandler", ()=>{
//    // let messageWriter:jest.Mocked<UiConsoleMessageWriter>;
//    const messageWriter={writeMessage: jest.fn()}
//    const repository:TurnRepository={createTurn: jest.fn(),
//     fetchData: jest.fn(),
//     getLatestTurn: jest.fn()
// }
//     it("inputHandlerExit should call messageWriter if 'exit' entered", ()=>{
//         const inputHandler=new InputHandler(repository ,messageWriter);
//         const result = inputHandler.inputHandlerExit("exit");
//         expect(result.isExit).toBe(true);
//         expect(result.inputHandled).toBe(true);
//         expect(messageWriter.writeMessage).toBeCalled();
//         expect(repository.fetchData).toBeCalledTimes(0);
//         expect(repository.createTurn).toBeCalledTimes(0);
//     }) ;   
// }  );  
// describe("inputHandler", ()=>{
//     const messageWriter={writeMessage: jest.fn()}
//     const repository:TurnRepository={createTurn: jest.fn(),
//      fetchData: jest.fn(),
//      getLatestTurn: jest.fn()
//  }
//      it("inputHandlerInvalide should call messageWriter if 'some invalid stuff' entered", ()=>{
//          const inputHandler=new InputHandler(repository ,messageWriter);
//          const result = inputHandler.inputHandlerInvalid("some invalid stuff");
//          expect(result.isExit).toBe(false);
//          expect(result.inputHandled).toBe(false);
//          expect(messageWriter.writeMessage).toBeCalled();
//          expect(repository.fetchData).toBeCalledTimes(0);
//          expect(repository.createTurn).toBeCalledTimes(0);
//          expect(messageWriter.writeMessage).toBeCalledWith("Invalid Input: some invalid stuff");
//      }) ;   
//  }  );  
// describe("Pass Test using real respository", () => {
//   test.skip("save  pass play, get response", async () => {
//     const repository = new TurnRepository();
//     const messageWriter={writeMessage: jest.fn()}
//     const turnString =
//       '{"matchId":"zpp64b071c2f193923d97ppp","turnPlayer":"w","playerBlackId":"64a839af37752f6eeb412b9f","playerWhiteId":"64a8395b37752f6eeb412b9e","playerBlackName":"Fred","playerWhiteName":"John","koCompareState":{"board":"_bwbw_wbbwbwbwb____,bw__b__w___________,___w_______________,__b________________,___________________,___________________,___________________,___________________,___________________,___________________,___________________,___________________,___________________,___________________,___________________,___________________,___________________,___________________,___________________","prisonersOfBlack":0,"prisonersOfWhite":0},"initialState":{"board":"_bwbw_wbbwbwbwb____,bw__b__w___________,___w_______________,__b________________,___________________,___________________,___________________,___________________,___________________,___________________,___________________,___________________,___________________,___________________,___________________,___________________,___________________,___________________,___________________","prisonersOfBlack":0,"prisonersOfWhite":0},"resultState":{"board":"_bwbw_wbbwbwbwbw___,bw__b__w___________,___w_______________,__b________________,___________________,___________________,___________________,___________________,___________________,___________________,___________________,___________________,___________________,___________________,___________________,___________________,___________________,___________________,___________________","prisonersOfBlack":0,"prisonersOfWhite":0},"turnNumber":19,"action":{"actionType":"play","location":[0,15]},"isValid":true,"isKo":false,"atari":true,"comments":"xxxxxxxxxxxxxxxxxxxrrrrrrrrrrrr","cratedAt":"2023-08-14T14:05:01.253Z","updatedAt":"2023-08-14T14:05:01.253Z"}';
//     const turn = JSON.parse(turnString);
//     const inputHandler=new InputHandler(repository ,messageWriter);
//     const result = await inputHandler.inputHandlerPass("pass",turn);
//     expect(result.inputHandled).toBe(true);
//     expect(result.isExit).toBe(false);
//     expect(messageWriter.writeMessage).toBeCalled();
//     expect(messageWriter.writeMessage).toBeCalledWith("passing");
//   })
// })
describe("Pass Test using Mock respository *******", () => {
    const respositorySpy = jest.spyOn(TurnRepository_1.default, 'createTurn').mockResolvedValue("xxx");
    const messageSpy = jest.spyOn(messageWriter_1.default, 'writeMessage');
    test("pass play, get response aa", () => __awaiter(void 0, void 0, void 0, function* () {
        const turnString = '{"matchId":"zpp64b071c2f193923d97ppp","turnPlayer":"w","playerBlackId":"64a839af37752f6eeb412b9f","playerWhiteId":"64a8395b37752f6eeb412b9e","playerBlackName":"Fred","playerWhiteName":"John","koCompareState":{"board":"_bwbw_wbbwbwbwb____,bw__b__w___________,___w_______________,__b________________,___________________,___________________,___________________,___________________,___________________,___________________,___________________,___________________,___________________,___________________,___________________,___________________,___________________,___________________,___________________","prisonersOfBlack":0,"prisonersOfWhite":0},"initialState":{"board":"_bwbw_wbbwbwbwb____,bw__b__w___________,___w_______________,__b________________,___________________,___________________,___________________,___________________,___________________,___________________,___________________,___________________,___________________,___________________,___________________,___________________,___________________,___________________,___________________","prisonersOfBlack":0,"prisonersOfWhite":0},"resultState":{"board":"_bwbw_wbbwbwbwbw___,bw__b__w___________,___w_______________,__b________________,___________________,___________________,___________________,___________________,___________________,___________________,___________________,___________________,___________________,___________________,___________________,___________________,___________________,___________________,___________________","prisonersOfBlack":0,"prisonersOfWhite":0},"turnNumber":19,"action":{"actionType":"play","location":[0,15]},"isValid":true,"isKo":false,"atari":true,"comments":"xxxxxxxxxxxxxxxxxxxrrrrrrrrrrrr","cratedAt":"2023-08-14T14:05:01.253Z","updatedAt":"2023-08-14T14:05:01.253Z"}';
        const turn = JSON.parse(turnString);
        const inputHandler = new InputHandler_1.InputHandler();
        const result = yield inputHandler.inputHandlerPass("pass", turn);
        expect(result.inputHandled).toBe(true);
        expect(result.isExit).toBe(false);
        expect(messageSpy).toBeCalled();
        expect(messageSpy).toBeCalledWith("passing");
        expect(respositorySpy).toBeCalled();
    }));
});
describe("InputHandlerPlay Test using Mock respository", () => {
    const repositorySpy = jest.spyOn(TurnRepository_1.default, 'createTurn').mockResolvedValue("xxx");
    const messageSpy = jest.spyOn(messageWriter_1.default, 'writeMessage');
    test("stone play, get response aa", () => __awaiter(void 0, void 0, void 0, function* () {
        const turnString = '{"matchId":"zpp64b071c2f193923d97ppp","turnPlayer":"w","playerBlackId":"64a839af37752f6eeb412b9f","playerWhiteId":"64a8395b37752f6eeb412b9e","playerBlackName":"Fred","playerWhiteName":"John",' +
            '"koCompareState":{"board":"' +
            '_bwbw_wbbwbwbwb____,' + //0
            'bw__b__w___________,' + //1
            '___w_______________,' + //2
            '__b________________,' + //3
            '___________________,' + //4
            '___________________,' + //5
            '___________________,' + //6
            '___________________,' + //7
            '___________________,' + //8
            '___________________,' + //9
            '___________________,' + //10
            '___________________,' + //11
            '___________________,' + //12
            '___________________,' + //13
            '___________________,' + //14
            '___________________,' + //15
            '___________________,' + //16
            '___________________,' + //17
            '___________________"' + //18
            ',"prisonersOfBlack":0,"prisonersOfWhite":0},' +
            '"initialState":{"board":"' +
            '_bwbw_wbbwbwbwb____,' + //0
            'bw__b__w___________,' + //1
            '___w_______________,' + //2
            '__b________________,' + //3
            '___________________,' + //4
            '___________________,' + //5
            '___________________,' + //6
            '___________________,' + //7
            '___________________,' + //8
            '___________________,' + //9
            '___________________,' + //10
            '___________________,' + //11
            '___________________,' + //12
            '___________________,' + //13
            '___________________,' + //14
            '___________________,' + //15
            '___________________,' + //16
            '___________________,' + //17
            '___________________"' + //18
            ',"prisonersOfBlack":0,"prisonersOfWhite":0},' +
            '"resultState":{"board":"' +
            '_bwbw_wbbwbwbwbw___,' + //0
            'bw__b__w___________,' + //1
            '___w_______________,' + //2
            '__b________________,' + //3
            '___________________,' + //4
            '___________________,' + //5
            '___________________,' + //6
            '___________________,' + //7
            '___________________,' + //8
            '___________________,' + //9
            '___________________,' + //10
            '___________________,' + //11
            '___________________,' + //12
            '___________________,' + //13
            '___________________,' + //14
            '___________________,' + //15
            '___________________,' + //16
            '___________________,' + //17
            '___________________"' + //18
            ',"prisonersOfBlack":0,"prisonersOfWhite":0},"turnNumber":19,"action":{"actionType":"play","location":[0,15]},"isValid":true,"isKo":false,"atari":true,"comments":"xxxxxxxxxxxxxxxxxxxrrrrrrrrrrrr","cratedAt":"2023-08-14T14:05:01.253Z","updatedAt":"2023-08-14T14:05:01.253Z"}';
        const turn = JSON.parse(turnString);
        const inputHandler = new InputHandler_1.InputHandler();
        const result = yield inputHandler.inputHandlerStonePlay("0,0", turn);
        expect(result.inputHandled).toBe(true);
        expect(result.isExit).toBe(false);
        expect(messageSpy).toBeCalled();
        expect(repositorySpy).toBeCalled();
        expect(messageSpy).toBeCalledWith("processed: stone play - stones captured: 0");
    }));
});
describe("InputHandlerPlay Test using Mock respository ******", () => {
    const repositorySpy = jest.spyOn(TurnRepository_1.default, 'createTurn').mockResolvedValue("xxx");
    const messageSpy = jest.spyOn(messageWriter_1.default, 'writeMessage');
    test("stone play, expect collision to be caught  *********", () => __awaiter(void 0, void 0, void 0, function* () {
        const turnString = '{"matchId":"zpp64b071c2f193923d97ppp","turnPlayer":"w","playerBlackId":"64a839af37752f6eeb412b9f","playerWhiteId":"64a8395b37752f6eeb412b9e","playerBlackName":"Fred","playerWhiteName":"John",' +
            '"koCompareState":{"board":"' +
            '_bwbw_wbbwbwbwb____,' + //0
            'bw__b__w___________,' + //1
            '___w_______________,' + //2
            '__b________________,' + //3
            '___________________,' + //4
            '___________________,' + //5
            '___________________,' + //6
            '___________________,' + //7
            '___________________,' + //8
            '___________________,' + //9
            '___________________,' + //10
            '___________________,' + //11
            '___________________,' + //12
            '___________________,' + //13
            '___________________,' + //14
            '___________________,' + //15
            '___________________,' + //16
            '___________________,' + //17
            '___________________"' + //18
            ',"prisonersOfBlack":0,"prisonersOfWhite":0},' +
            '"initialState":{"board":"' +
            '_bwbw_wbbwbwbwb____,' + //0
            'bw__b__w___________,' + //1
            '___w_______________,' + //2
            '__b________________,' + //3
            '___________________,' + //4
            '___________________,' + //5
            '___________________,' + //6
            '___________________,' + //7
            '___________________,' + //8
            '___________________,' + //9
            '___________________,' + //10
            '___________________,' + //11
            '___________________,' + //12
            '___________________,' + //13
            '___________________,' + //14
            '___________________,' + //15
            '___________________,' + //16
            '___________________,' + //17
            '___________________"' + //18
            ',"prisonersOfBlack":0,"prisonersOfWhite":0},' +
            '"resultState":{"board":"' +
            '_bwbw_wbbwbwbwbw___,' + //0
            'bw__b__w___________,' + //1
            '___w_______________,' + //2
            '__b________________,' + //3
            '___________________,' + //4
            '___________________,' + //5
            '___________________,' + //6
            '___________________,' + //7
            '___________________,' + //8
            '___________________,' + //9
            '___________________,' + //10
            '___________________,' + //11
            '___________________,' + //12
            '___________________,' + //13
            '___________________,' + //14
            '___________________,' + //15
            '___________________,' + //16
            '___________________,' + //17
            '___________________"' + //18
            ',"prisonersOfBlack":0,"prisonersOfWhite":0},"turnNumber":19,"action":{"actionType":"play","location":[0,15]},"isValid":true,"isKo":false,"atari":true,"comments":"xxxxxxxxxxxxxxxxxxxrrrrrrrrrrrr","cratedAt":"2023-08-14T14:05:01.253Z","updatedAt":"2023-08-14T14:05:01.253Z"}';
        const turn = JSON.parse(turnString);
        const inputHandler = new InputHandler_1.InputHandler();
        const result = yield inputHandler.inputHandlerStonePlay("1,1", turn);
        expect(result.inputHandled).toBe(false);
        expect(result.isExit).toBe(false);
        expect(messageSpy).toBeCalled();
        expect(messageSpy).toBeCalledWith("Error: Invalid value in stone play - target intersection is occupied: 1, 1");
        expect(repositorySpy).not.toBeCalled();
    }));
});
describe("InputHandlerPlay Test using Mock respository", () => {
    const repositorySpy = jest.spyOn(TurnRepository_1.default, 'createTurn').mockResolvedValue("xxx");
    const messageSpy = jest.spyOn(messageWriter_1.default, 'writeMessage');
    test("nonsense input, expect  to be ignored", () => __awaiter(void 0, void 0, void 0, function* () {
        const turnString = '{"matchId":"zpp64b071c2f193923d97ppp","turnPlayer":"w","playerBlackId":"64a839af37752f6eeb412b9f","playerWhiteId":"64a8395b37752f6eeb412b9e","playerBlackName":"Fred","playerWhiteName":"John",' +
            '"koCompareState":{"board":"' +
            '_bwbw_wbbwbwbwb____,' + //0
            'bw__b__w___________,' + //1
            '___w_______________,' + //2
            '__b________________,' + //3
            '___________________,' + //4
            '___________________,' + //5
            '___________________,' + //6
            '___________________,' + //7
            '___________________,' + //8
            '___________________,' + //9
            '___________________,' + //10
            '___________________,' + //11
            '___________________,' + //12
            '___________________,' + //13
            '___________________,' + //14
            '___________________,' + //15
            '___________________,' + //16
            '___________________,' + //17
            '___________________"' + //18
            ',"prisonersOfBlack":0,"prisonersOfWhite":0},' +
            '"initialState":{"board":"' +
            '_bwbw_wbbwbwbwb____,' + //0
            'bw__b__w___________,' + //1
            '___w_______________,' + //2
            '__b________________,' + //3
            '___________________,' + //4
            '___________________,' + //5
            '___________________,' + //6
            '___________________,' + //7
            '___________________,' + //8
            '___________________,' + //9
            '___________________,' + //10
            '___________________,' + //11
            '___________________,' + //12
            '___________________,' + //13
            '___________________,' + //14
            '___________________,' + //15
            '___________________,' + //16
            '___________________,' + //17
            '___________________"' + //18
            ',"prisonersOfBlack":0,"prisonersOfWhite":0},' +
            '"resultState":{"board":"' +
            '_bwbw_wbbwbwbwbw___,' + //0
            'bw__b__w___________,' + //1
            '___w_______________,' + //2
            '__b________________,' + //3
            '___________________,' + //4
            '___________________,' + //5
            '___________________,' + //6
            '___________________,' + //7
            '___________________,' + //8
            '___________________,' + //9
            '___________________,' + //10
            '___________________,' + //11
            '___________________,' + //12
            '___________________,' + //13
            '___________________,' + //14
            '___________________,' + //15
            '___________________,' + //16
            '___________________,' + //17
            '___________________"' + //18
            ',"prisonersOfBlack":0,"prisonersOfWhite":0},"turnNumber":19,"action":{"actionType":"play","location":[0,15]},"isValid":true,"isKo":false,"atari":true,"comments":"xxxxxxxxxxxxxxxxxxxrrrrrrrrrrrr","cratedAt":"2023-08-14T14:05:01.253Z","updatedAt":"2023-08-14T14:05:01.253Z"}';
        const turn = JSON.parse(turnString);
        const inputHandler = new InputHandler_1.InputHandler();
        const result = yield inputHandler.inputHandlerStonePlay("asdfsadf", turn);
        expect(result.inputHandled).toBe(false);
        expect(result.isExit).toBe(false);
        expect(messageSpy).not.toBeCalled();
        expect(repositorySpy).not.toBeCalled();
    }));
});
describe("InputHandlerInvalid using Mock respository", () => {
    const repositorySpy = jest.spyOn(TurnRepository_1.default, 'createTurn').mockResolvedValue("xxx");
    const messageSpy = jest.spyOn(messageWriter_1.default, 'writeMessage');
    test("nonsense input, expect  to be caught", () => {
        // const turnString =
        //   '{"matchId":"zpp64b071c2f193923d97ppp","turnPlayer":"w","playerBlackId":"64a839af37752f6eeb412b9f","playerWhiteId":"64a8395b37752f6eeb412b9e","playerBlackName":"Fred","playerWhiteName":"John",'+
        //   '"koCompareState":{"board":"'+
        //   '_bwbw_wbbwbwbwb____,'+  //0
        //   'bw__b__w___________,'+  //1
        //   '___w_______________,'+  //2
        //   '__b________________,'+  //3
        //   '___________________,'+  //4
        //   '___________________,'+  //5
        //   '___________________,'+  //6
        //   '___________________,'+  //7
        //   '___________________,'+  //8
        //   '___________________,'+  //9
        //   '___________________,'+  //10
        //   '___________________,'+  //11
        //   '___________________,'+  //12
        //   '___________________,'+  //13
        //   '___________________,'+  //14
        //   '___________________,'+  //15
        //   '___________________,'+  //16
        //   '___________________,'+  //17
        //   '___________________"'+  //18
        //   ',"prisonersOfBlack":0,"prisonersOfWhite":0},'+
        //   '"initialState":{"board":"'+
        //   '_bwbw_wbbwbwbwb____,'+ //0
        //   'bw__b__w___________,'+ //1
        //   '___w_______________,'+ //2
        //   '__b________________,'+ //3
        //   '___________________,'+  //4
        //   '___________________,'+  //5
        //   '___________________,'+  //6
        //   '___________________,'+  //7
        //   '___________________,'+  //8
        //   '___________________,'+  //9
        //   '___________________,'+  //10
        //   '___________________,'+  //11
        //   '___________________,'+  //12
        //   '___________________,'+  //13
        //   '___________________,'+  //14
        //   '___________________,'+  //15
        //   '___________________,'+  //16
        //   '___________________,'+  //17
        //   '___________________"'+  //18
        //   ',"prisonersOfBlack":0,"prisonersOfWhite":0},'+
        //   '"resultState":{"board":"'+
        //   '_bwbw_wbbwbwbwbw___,'+ //0
        //   'bw__b__w___________,'+ //1
        //   '___w_______________,'+ //2
        //   '__b________________,'+ //3
        //   '___________________,'+  //4
        //   '___________________,'+  //5
        //   '___________________,'+  //6
        //   '___________________,'+  //7
        //   '___________________,'+  //8
        //   '___________________,'+  //9
        //   '___________________,'+  //10
        //   '___________________,'+  //11
        //   '___________________,'+  //12
        //   '___________________,'+  //13
        //   '___________________,'+  //14
        //   '___________________,'+  //15
        //   '___________________,'+  //16
        //   '___________________,'+  //17
        //   '___________________"'+  //18
        //   ',"prisonersOfBlack":0,"prisonersOfWhite":0},"turnNumber":19,"action":{"actionType":"play","location":[0,15]},"isValid":true,"isKo":false,"atari":true,"comments":"xxxxxxxxxxxxxxxxxxxrrrrrrrrrrrr","cratedAt":"2023-08-14T14:05:01.253Z","updatedAt":"2023-08-14T14:05:01.253Z"}';
        // const turn = JSON.parse(turnString);
        const inputHandler = new InputHandler_1.InputHandler();
        const result = inputHandler.inputHandlerInvalid("asdfsadf");
        expect(result.inputHandled).toBe(false);
        expect(result.isExit).toBe(false);
        expect(messageSpy).toBeCalled();
        expect(repositorySpy).not.toBeCalled();
        expect(messageSpy).toBeCalledWith("Invalid Input: asdfsadf");
    });
});
describe("InputHandlerExit using Mock respository", () => {
    const repositorySpy = jest.spyOn(TurnRepository_1.default, 'createTurn').mockResolvedValue("xxx");
    const messageSpy = jest.spyOn(messageWriter_1.default, 'writeMessage');
    test("'exit' input, expect  to return isExit", () => {
        // const turnString =
        //   '{"matchId":"zpp64b071c2f193923d97ppp","turnPlayer":"w","playerBlackId":"64a839af37752f6eeb412b9f","playerWhiteId":"64a8395b37752f6eeb412b9e","playerBlackName":"Fred","playerWhiteName":"John",'+
        //   '"koCompareState":{"board":"'+
        //   '_bwbw_wbbwbwbwb____,'+  //0
        //   'bw__b__w___________,'+  //1
        //   '___w_______________,'+  //2
        //   '__b________________,'+  //3
        //   '___________________,'+  //4
        //   '___________________,'+  //5
        //   '___________________,'+  //6
        //   '___________________,'+  //7
        //   '___________________,'+  //8
        //   '___________________,'+  //9
        //   '___________________,'+  //10
        //   '___________________,'+  //11
        //   '___________________,'+  //12
        //   '___________________,'+  //13
        //   '___________________,'+  //14
        //   '___________________,'+  //15
        //   '___________________,'+  //16
        //   '___________________,'+  //17
        //   '___________________"'+  //18
        //   ',"prisonersOfBlack":0,"prisonersOfWhite":0},'+
        //   '"initialState":{"board":"'+
        //   '_bwbw_wbbwbwbwb____,'+ //0
        //   'bw__b__w___________,'+ //1
        //   '___w_______________,'+ //2
        //   '__b________________,'+ //3
        //   '___________________,'+  //4
        //   '___________________,'+  //5
        //   '___________________,'+  //6
        //   '___________________,'+  //7
        //   '___________________,'+  //8
        //   '___________________,'+  //9
        //   '___________________,'+  //10
        //   '___________________,'+  //11
        //   '___________________,'+  //12
        //   '___________________,'+  //13
        //   '___________________,'+  //14
        //   '___________________,'+  //15
        //   '___________________,'+  //16
        //   '___________________,'+  //17
        //   '___________________"'+  //18
        //   ',"prisonersOfBlack":0,"prisonersOfWhite":0},'+
        //   '"resultState":{"board":"'+
        //   '_bwbw_wbbwbwbwbw___,'+ //0
        //   'bw__b__w___________,'+ //1
        //   '___w_______________,'+ //2
        //   '__b________________,'+ //3
        //   '___________________,'+  //4
        //   '___________________,'+  //5
        //   '___________________,'+  //6
        //   '___________________,'+  //7
        //   '___________________,'+  //8
        //   '___________________,'+  //9
        //   '___________________,'+  //10
        //   '___________________,'+  //11
        //   '___________________,'+  //12
        //   '___________________,'+  //13
        //   '___________________,'+  //14
        //   '___________________,'+  //15
        //   '___________________,'+  //16
        //   '___________________,'+  //17
        //   '___________________"'+  //18
        //   ',"prisonersOfBlack":0,"prisonersOfWhite":0},"turnNumber":19,"action":{"actionType":"play","location":[0,15]},"isValid":true,"isKo":false,"atari":true,"comments":"xxxxxxxxxxxxxxxxxxxrrrrrrrrrrrr","cratedAt":"2023-08-14T14:05:01.253Z","updatedAt":"2023-08-14T14:05:01.253Z"}';
        // const turn = JSON.parse(turnString);
        const inputHandler = new InputHandler_1.InputHandler();
        const result = inputHandler.inputHandlerExit("exit");
        expect(result.inputHandled).toBe(true);
        expect(result.isExit).toBe(true);
        expect(messageSpy).toBeCalled();
        expect(repositorySpy).not.toBeCalled();
        expect(messageSpy).toBeCalledWith("exiting match");
    });
});
//# sourceMappingURL=InputHandler.test.js.map