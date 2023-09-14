import inputHandlerUserId from "./inputHandlerUserId";
import textIoUtil from "../../ui/services/textIoUtil";
import { GameCycleState } from "../models/GameCycleState";
import gameLifeCycle from "./gameLifeCycle";
import inputHandlerMatchId from "./inputHandlerMatchId";
import handlerMatch from "./handlerMatch";

describe("gameLifeCycle", () => {

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("can exit on state 'isExiting'", async () => {

    const mockHandleNoUserId = jest.spyOn(inputHandlerUserId, 'handleNoUserId')//.mockResolvedValue("n");
      .mockImplementation(() => {
        const isExitingResult = new GameCycleState("", "", true);
        return Promise.resolve(isExitingResult)
      });

    const mockHandleNoMatchId = jest.spyOn(inputHandlerMatchId, 'handleNoMatchId')//.mockResolvedValue("n");
      .mockImplementation(() => {
        const isExitingResult = new GameCycleState("", "", true);
        return Promise.resolve(isExitingResult)
      });

    const mockHandlMatch = jest.spyOn(handlerMatch, 'handleMatch')//.mockResolvedValue("n");
      .mockImplementation(() => {
        const isExitingResult = new GameCycleState("", "", true);
        return Promise.resolve(isExitingResult)
      });
    const mockWriteLine = jest.spyOn(textIoUtil, 'writeLine');

    await gameLifeCycle.runGameCycle();

    expect(mockHandlMatch).toBeCalled();
    expect(mockHandleNoMatchId).toBeCalled();
    expect(mockWriteLine).toBeCalled();
    expect(mockWriteLine).toBeCalledWith("exiting game");
    expect(mockHandleNoUserId).toBeCalled();
  });

});

