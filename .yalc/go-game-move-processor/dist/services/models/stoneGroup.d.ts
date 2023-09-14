import { Intersection } from "./intersection";
export declare class StoneGroup {
    constructor(stoneColor: string);
    stoneColor: string;
    liberties: number;
    libertiesSet: Set<unknown>;
    intersections: Intersection[];
}
