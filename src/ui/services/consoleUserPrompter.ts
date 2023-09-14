import textIoUtil from "./textIoUtil";

function promptUerForChoice(promptText: string, promptOptions: string[]) {
    const p: Promise<string> = new Promise<string>((resolve, reject) => {
        (async () => {
            try {
                let finished = false;
                let validatedText = "";
                let retries = 0;
                while ((!finished) && (retries < 10)) {
                    const inputText = await textIoUtil.readLineAsync(promptText);
                    if (promptOptions.some(e => e === inputText.toLowerCase().trim())) {
                        finished = true;
                        validatedText = inputText.toLowerCase().trim()
                        resolve(validatedText);
                        return;
                    }
                    else {
                        textIoUtil.writeLine("Invalid Input: " + inputText);
                        retries++;
                    }
                }
            } catch (error) {
                console.log('in catch');
                reject(error);
                return;
            }
        })();
    });
    return p;
}

const consoleUserPrompter = {
    promptUerForChoice
}

export default consoleUserPrompter;
