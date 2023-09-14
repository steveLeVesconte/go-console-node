import { AdjacentIntersection } from "./adjacentIntersection";
import { StoneGroup } from "./stoneGroup";
export declare class Intersection {
    constructor(row: number, col: number, stoneColor: string);
    strinColor: string;
    readonly row: number;
    readonly col: number;
    group: StoneGroup | null;
    liberties: number | null;
    adjacentIntersections: AdjacentIntersection[];
    intialize(): void;
}
