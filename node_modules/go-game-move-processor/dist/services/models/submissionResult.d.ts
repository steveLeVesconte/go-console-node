import { StonePlay } from "./stonePlay";
import { Submission } from "./submission";
export declare class BaseSubmissionResult {
    constructor();
    isValidSubmission: boolean;
    isLegalPlay: boolean;
    newBoard: string[][];
    newKoCompareBoard: string[][];
    capturedStones: number;
    isAtari: boolean;
    isKo: boolean;
    isSuicide: boolean;
    isCollision: boolean;
    isPass: boolean;
    isExit: boolean;
    reasonSubmissionInvalid: string;
    stonePlay: StonePlay | null;
    stoneColorOfNextTurn: string;
}
export declare class SubmissionResultNotValid extends BaseSubmissionResult {
    constructor(newBoard: string[][], newKoCompareBoard: string[][], reasonSubmissionInvalid: string, submission: Submission);
}
export declare class SubmissionResultPass extends BaseSubmissionResult {
    constructor(newBoard: string[][], newKoCompareBoard: string[][], submission: Submission);
}
export declare class SubmissionResultQuit extends BaseSubmissionResult {
    constructor();
}
export declare class SubmissionResultLegalStonePlay extends BaseSubmissionResult {
    constructor(newBoard: string[][], newKoCompareBoard: string[][], capturedStones: number, isAtari: boolean, submission: Submission);
}
export declare class SubmissionResultKo extends BaseSubmissionResult {
    constructor(newBoard: string[][], newKoCompareBoard: string[][], submission: Submission);
}
export declare class SubmissionResultSuiside extends BaseSubmissionResult {
    constructor(newBoard: string[][], newKoCompareBoard: string[][], submission: Submission);
}
