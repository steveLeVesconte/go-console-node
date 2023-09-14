export class GameAction {
  constructor(
    public actionType: string = "",
    public row: number,
    public col: number
  ) { }
}