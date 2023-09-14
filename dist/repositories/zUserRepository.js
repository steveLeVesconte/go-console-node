"use strict";
// import { GamePlayerDto } from './dtos/GamePlayerDto';
// import axios from 'axios';
// import { apiConfig } from '../apiConfig';
// // let env: any;
// // env = require('../config')
// // let config: any;
// // if (env.tier == "local") {
// //   config = require('../configLocal')
// // }
// // else {
// //   config = require('../configprod')
// // }
// // const apiConfig = {
// //   headers: {
// //     "x-functions-key": `${config.apiKey}`
// //   }
// // }
// // export class UserRepository {
//   async function getUserByName(name: string): Promise<GamePlayerDto> {
//     try {
//       const apiCall = apiConfig.apiUrl + `/GetUserByName?name=${name}`;
//       const response = await axios.get(`${apiCall}`, apiConfig);
//       const data = response.data;
//       return data;
//     } catch (error) {
//       throw new Error('Failed to fetch data from the API.');
//     }
//   }
// const get = async (): Promise<GamePlayerDto[]> => {
//     try {
//       const apiCall = apiConfig.apiUrl + `/getPlayers`;
//       const response = await axios.get(`${apiCall}`, apiConfig);
//       const data = response.data;
//       const mappedData: GamePlayerDto[] = data.map(
//         (item: GamePlayerDto) => {
//           return item;
//         }
//       );
//       resolve(mappedData)
//       return;
//     } catch (error) {
//       throw new Error('Failed to fetch data from the API.');
//     }
//   })
// }
// //}
// const userRepository={
//     getUserByName,
//     get
// }
// export default userRepository;
//# sourceMappingURL=zUserRepository.js.map