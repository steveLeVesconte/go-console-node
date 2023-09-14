const tier='local';  //local prod
const apiUrl='http://127.0.0.1:7071/api';
const apiKey='';
const config={ headers: {
    "x-functions-key": "fKAhzVJmD7uGU-A9pVALtxJ72IqCEKqdEY3NHhHOVteWAzFuGebHQw==",
    "Content-Type":"application/json"}
  }

export const apiConfig = {
  config,
  tier,
  apiUrl,
  apiKey
  }

