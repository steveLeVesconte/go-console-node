import consoleUserPrompter from "../../ui/services/consoleUserPrompter";
import { GameCycleState } from "../models/GameCycleState";
import inputHandlerUserId from "./inputHandlerUserId";
import provideUserId from "./provideUserId";

  describe("handleNoUserId", () => {
    afterEach(() => {
      jest.clearAllMocks();
    });

    test("can see console", async () => {
      const gameCycleStateFromChoose= new GameCycleState("99999999","",false);
      const chooseUserIdSpy=jest.spyOn(provideUserId,'chooseUserId').mockResolvedValue(gameCycleStateFromChoose);
      const promptUerForChoiceSpy=jest.spyOn(consoleUserPrompter,'promptUerForChoice').mockResolvedValue("r");
      const gameCycleState= new GameCycleState("","",false);
      const newGameCycleState= await inputHandlerUserId.handleNoUserId(gameCycleState);

      expect(newGameCycleState.isExit).toBe(false);
      expect(newGameCycleState.userId).toBe("99999999");
      expect(chooseUserIdSpy).toBeCalled();
      expect(promptUerForChoiceSpy).toBeCalled();
    })
  })
  