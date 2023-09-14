"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const apiConfig_1 = require("../apiConfig");
function getLatestTurn(matchId) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            console.log("in Get Latest Turn: ", matchId);
            const loc = apiConfig_1.apiConfig.apiUrl + "/GetTurnCurrent?id=" + matchId;
            console.log("in Get Latest loc: ", loc);
            const response = yield axios_1.default.get(`${loc}`, apiConfig_1.apiConfig.config);
            console.log("in Get Latest Turn after get");
            const data = response.data;
            console.log("in Get Latest Turn data: ", data);
            return data;
        }
        catch (error) {
            console.log("data error: ", error);
            throw new Error("Failed to fetch data from the API.");
        }
    });
}
function fetchData() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const loc = apiConfig_1.apiConfig.apiUrl + "/GetTurnCurrent?id=64a349992e5fe5a3e8dec8c7";
            const response = yield axios_1.default.get(`${loc}`, apiConfig_1.apiConfig.config);
            const data = response.data;
            return data;
        }
        catch (error) {
            throw new Error("Failed to fetch data from the API.");
        }
    });
}
function createTurn(turn) {
    return new Promise((resolve, reject) => {
        console.log("in create turn **************************************************************** ");
        console.log(turn);
        const jsonString = '{"turn":' + JSON.stringify(turn) + "}";
        const dateStamp = new Date().toISOString();
        turn.cratedAt = dateStamp;
        turn.updatedAt = dateStamp;
        console.log("jsonString 777777777777 7777777777777777", jsonString);
        console.log(apiConfig_1.apiConfig);
        axios_1.default
            .post(`http://127.0.0.1:7071/api/PostAction`, jsonString, apiConfig_1.apiConfig.config)
            .then((response) => {
            console.log("in create turn data: ", response);
            console.log("in create turn - normal return data: ", response.data);
            resolve("success");
        })
            .catch((error) => {
            console.log("in catch4444444444444444444444448888888888888888888888888888888888888888");
            console.log("error: ", error);
            reject(error);
        })
            .finally(() => {
            console.log("in finally 8finally 8finally 8finally 8finally 8finally 8finally 8");
            reject("finaly");
        });
    });
}
const turnRepository = {
    getLatestTurn,
    fetchData,
    createTurn
};
exports.default = turnRepository;
//# sourceMappingURL=TurnRepository.js.map