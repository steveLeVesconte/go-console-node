"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.readLineAsync = exports.readline = void 0;
const readline_1 = require("readline");
exports.readline = (0, readline_1.createInterface)({
    input: process.stdin,
    output: process.stdout
});
const readLineAsync = (msg) => {
    return new Promise(resolve => {
        exports.readline.question(msg, userRes => {
            resolve(userRes);
        });
    });
};
exports.readLineAsync = readLineAsync;
//# sourceMappingURL=read_user_input.js.map