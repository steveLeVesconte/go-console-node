"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const readline_1 = require("readline");
const readline = (0, readline_1.createInterface)({
    input: process.stdin,
    output: process.stdout
});
const readLineAsync = (msg) => {
    return new Promise(resolve => {
        readline.question(msg, userRes => {
            resolve(userRes);
        });
    });
};
const writeLine = (msg) => {
    console.log(msg);
};
const textIoUtil = {
    readLineAsync,
    writeLine
};
exports.default = textIoUtil;
//# sourceMappingURL=textIoUtil.js.map