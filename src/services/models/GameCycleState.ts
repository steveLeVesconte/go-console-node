export class GameCycleState {
    constructor(
        public userId: string = "",
        public matchId: string = "",
        public isExit: boolean = false,
    ) { }
}