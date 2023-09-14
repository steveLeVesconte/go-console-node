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
const UserRepository_1 = __importDefault(require("../repositories/UserRepository"));
afterEach(() => {
    jest.clearAllMocks();
});
describe("user repository using real respository *******", () => {
    test("pass play, get response", () => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield UserRepository_1.default.getGameUsers();
        expect(result.length).toBeGreaterThan(1);
        expect(result[0]._id).toBeTruthy();
        expect(result[0].name).toBeTruthy();
    }));
});
//# sourceMappingURL=UserRepository.test.js.map