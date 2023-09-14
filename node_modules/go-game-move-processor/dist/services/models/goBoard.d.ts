import { Intersection } from "./intersection";
import { StoneGroup } from "./stoneGroup";
export declare class GoBoard {
    constructor(stringBoard: string[][]);
    board: Intersection[][];
    stoneGroups: StoneGroup[];
    populateGoBoard(stringBoard: string[][]): Intersection[][];
    groupAnIntersection(intersection: Intersection, stoneColor: string, stoneGroup: StoneGroup | null): void;
    applyGroupAnIntersectionToBoard(): void;
}
