"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.waitForMyTurn = void 0;
function waitForMyTurn() {
    console.log('in real waitForNextPing ***************');
    const p = new Promise((resolve) => {
        setTimeout(() => {
            console.log("in real waitForMyTurn  *****************c");
            resolve();
        }, 10000);
    });
    return p;
}
exports.waitForMyTurn = waitForMyTurn;
//# sourceMappingURL=timerService.js.map