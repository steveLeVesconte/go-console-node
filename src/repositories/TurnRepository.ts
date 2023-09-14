import { TurnDto } from './dtos/turnDto';
import axios from 'axios';
import { apiConfig } from '../apiConfig';

async function getLatestTurn(matchId: string): Promise<TurnDto> {
  try {
    console.log("in Get Latest Turn: ", matchId);
    const loc = apiConfig.apiUrl + "/GetTurnCurrent?id=" + matchId;
    console.log("in Get Latest loc: ", loc);

    const response = await axios.get(`${loc}`, apiConfig.config);
    console.log("in Get Latest Turn after get");

    const data = response.data;
    console.log("in Get Latest Turn data: ", data);
    return data;
  } catch (error) {
    console.log("data error: ", error);
    throw new Error("Failed to fetch data from the API.");
  }
}

async function fetchData(): Promise<TurnDto> {
  try {
    const loc = apiConfig.apiUrl + "/GetTurnCurrent?id=64a349992e5fe5a3e8dec8c7";
    const response = await axios.get(`${loc}`, apiConfig.config);
    const data = response.data;
    return data;
  } catch (error) {
    throw new Error("Failed to fetch data from the API.");
  }
}

function createTurn(turn: TurnDto): Promise<string> {
  return new Promise<string>((resolve, reject) => {
    console.log(
      "in create turn **************************************************************** "
    );
    console.log(turn);
    const jsonString = '{"turn":' + JSON.stringify(turn) + "}";
    const dateStamp = new Date().toISOString();
    turn.cratedAt = dateStamp;
    turn.updatedAt = dateStamp;
    console.log("jsonString 777777777777 7777777777777777", jsonString);
    console.log(apiConfig);
    axios
      .post(`http://127.0.0.1:7071/api/PostAction`, jsonString, apiConfig.config)
      .then((response) => {
        console.log("in create turn data: ", response);

        console.log("in create turn - normal return data: ", response.data);
        resolve("success");
      })
      .catch((error) => {
        console.log(
          "in catch4444444444444444444444448888888888888888888888888888888888888888"
        );
        console.log("error: ", error);
        reject(error);
      })
      .finally(() => {
        console.log(
          "in finally 8finally 8finally 8finally 8finally 8finally 8finally 8"
        );
        reject("finaly");
      });
  });
}

const turnRepository = {
  getLatestTurn,
  fetchData,
  createTurn
}

export default turnRepository;

