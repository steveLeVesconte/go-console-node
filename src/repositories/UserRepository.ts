import axios, { AxiosResponse } from 'axios';
import { apiConfig } from '../apiConfig';
import { GameUserDto } from './dtos/GameUserDto';

const instance = axios.create({
	baseURL: apiConfig.apiUrl,
	timeout: 15000,
});

const responseBody = (response: AxiosResponse) => response.data;

const requests = {
	get: (url: string) => instance.get(url).then(responseBody),

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
	getGameUsers: (): Promise<GameUserDto[]> => requests.get('getPlayers'),
	//getGameUsers: (): Promise<GameUserDto[]> => requests.get(),
	//getAPost: (id: number): Promise<PostType> => requests.get(`posts/${id}`),
	// createPost: (post: PostType): Promise<PostType> =>
	// 	requests.post('posts', post),
	// updatePost: (post: PostType, id: number): Promise<PostType> =>
	// 	requests.put(`posts/${id}`, post),
	// deletePost: (id: number): Promise<void> => requests.delete(`posts/${id}`),
};

export default userRepository;