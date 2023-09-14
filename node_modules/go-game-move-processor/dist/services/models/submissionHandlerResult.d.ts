import { BaseSubmissionResult } from "./submissionResult";
export default class SubmissionHandlerResult {
    submissionHandled: boolean;
    submissionResult: BaseSubmissionResult;
    constructor(submissionHandled: boolean, submissionResult: BaseSubmissionResult);
}
