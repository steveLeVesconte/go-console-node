"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TurnDto = exports.ActionDto = exports.GameState = void 0;
class GameState {
    constructor() {
        this.board = "";
        this.prisonersOfBlack = -1;
        this.prisonersOfWhite = -1;
    }
}
exports.GameState = GameState;
class ActionDto {
    constructor() {
        this.actionType = "";
        this.location = [-1, -1];
    }
}
exports.ActionDto = ActionDto;
class TurnDto {
    constructor() {
        // _id: string;
        this.matchId = "";
        this.turnPlayer = "";
        this.turnNumber = 0;
        this.playerBlackId = "";
        this.playerWhiteId = "";
        this.playerBlackName = "";
        this.playerWhiteName = "";
        this.koCompareState = new GameState();
        this.initialState = new GameState();
        this.resultState = new GameState();
        this.action = new ActionDto();
        this.isValid = false;
        this.isKo = false;
        this.atari = false;
        this.comments = "";
        this.cratedAt = "";
        this.updatedAt = "";
    }
}
exports.TurnDto = TurnDto;
//# sourceMappingURL=turnDto.js.map