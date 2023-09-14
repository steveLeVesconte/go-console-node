import { StonePlay } from "./stonePlay";
export declare class Submission {
    constructor(stonePlay: StonePlay, previousBoard: string[][], currentBoard: string[][], actionType: string, stoneColorOfThisTurn: string);
    readonly previousBoard: string[][];
    readonly currentBoard: string[][];
    readonly stonePlay: StonePlay;
    readonly actionType: string;
    readonly stoneColorOfThisTurn: string;
}
