"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiConfig = void 0;
const tier = 'local'; //local prod
const apiUrl = 'http://127.0.0.1:7071/api';
const apiKey = '';
const config = { headers: {
        "x-functions-key": "fKAhzVJmD7uGU-A9pVALtxJ72IqCEKqdEY3NHhHOVteWAzFuGebHQw==",
        "Content-Type": "application/json"
    }
};
exports.apiConfig = {
    config,
    tier,
    apiUrl,
    apiKey
};
//# sourceMappingURL=apiConfig.js.map