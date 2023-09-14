"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const apiConfig_1 = require("../apiConfig");
const instance = axios_1.default.create({
    baseURL: apiConfig_1.apiConfig.apiUrl,
    timeout: 15000,
});
const responseBody = (response) => response.data;
const requests = {
    get: (url) => instance.get(url).then(responseBody),
    // get: ():Promise<GameUserDto[]>=> axios.get(apiConfig.apiUrl + `/getPlayers`, apiConfig.config)
    // .then((responseBody)=>{
    //     return responseBody;
    // }),
    // get: (url: string) => instance.get(url).then(responseBody),
    // post: (url: string, body: {}) => instance.post(url, body).then(responseBody),
    // put: (url: string, body: {}) => instance.put(url, body).then(responseBody),
    // delete: (url: string) => instance.delete(url).then(responseBody),
};
const userRepository = {
    getGameUsers: () => requests.get('getPlayers'),
    //getGameUsers: (): Promise<GameUserDto[]> => requests.get(),
    //getAPost: (id: number): Promise<PostType> => requests.get(`posts/${id}`),
    // createPost: (post: PostType): Promise<PostType> =>
    // 	requests.post('posts', post),
    // updatePost: (post: PostType, id: number): Promise<PostType> =>
    // 	requests.put(`posts/${id}`, post),
    // deletePost: (id: number): Promise<void> => requests.delete(`posts/${id}`),
};
exports.default = userRepository;
//# sourceMappingURL=UserRepository.js.map