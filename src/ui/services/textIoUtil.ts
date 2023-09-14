import { createInterface } from "readline";

const readline = createInterface({
  input: process.stdin,
  output: process.stdout
});

const readLineAsync = (msg: string): Promise<string> => {
  return new Promise(resolve => {
    readline.question(msg, userRes => {
      resolve(userRes);
    });
  });
}

const writeLine = (msg: string): void => {
  console.log(msg);
}
const textIoUtil = {
  readLineAsync,
  writeLine
}

export default textIoUtil;

