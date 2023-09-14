
export class GameState  {
    board: string="";
    prisonersOfBlack: number=-1;
    prisonersOfWhite: number=-1;
  }
  
  export class ActionDto {
    actionType: string ="";
    location: [number, number]=[-1,-1];
  }
  
  export class TurnDto {
    // _id: string;
    matchId: string = "";
    turnPlayer: string = "";
    turnNumber: number=0;
    playerBlackId: string = "";
    playerWhiteId: string = "";
    playerBlackName: string = "";
    playerWhiteName: string = "";
    koCompareState: GameState = new GameState();
    initialState: GameState = new GameState();
    resultState: GameState = new GameState();
    action: ActionDto = new ActionDto();
    isValid: boolean=false;
    isKo: boolean=false;
    atari: boolean=false;
    comments: string = "";
    cratedAt: string = "";
    updatedAt: string = "";
  }
   
  export interface ValidatorResponse  {
    valid:boolean;
    errorMessage: string;
  }
  export type InputValidator={(input:string):ValidatorResponse}
  