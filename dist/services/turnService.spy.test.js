"use strict";
// import { turnProcess } from "./turnService";
// import * as timerFunctions from "./timerService";
// import * as turnRepositoryFunctions from "../repositories/TurnRepository";
// import { TurnDto } from "../repositories/dtos/turnDto";
// describe("timer function with spy", ()=>{
// it("should run timer if not my turn", async()=>{
//     const waitForMyTurnSpy=jest.spyOn(timerFunctions,"waitForMyTurn").mockResolvedValue();
//     const result = await turnProcess(false);
//     expect(result).toBe("waited for my turn");
//     expect(waitForMyTurnSpy).toBeCalledTimes(1);
//     waitForMyTurnSpy.mockRestore();
// }) ;   
// it("should run getLatestTurnByMatchId if not my turn", async()=>{
//     const getLatestTurnByMatchIdSpy=jest.spyOn(turnRepositoryFunctions.TurnRepository.prototype,"getLatestTurn").mockResolvedValue(new TurnDto);
//     const result = await turnProcess(true);
//     expect(result).toBe("mock turn");
//     expect(getLatestTurnByMatchIdSpy).toBeCalledTimes(1);
//     getLatestTurnByMatchIdSpy.mockRestore();
// }) ;   
// //jest.spyOn(timerFunctions,"waitForMyTurn").mockResolvedValue();
// })
//# sourceMappingURL=turnService.spy.test.js.map