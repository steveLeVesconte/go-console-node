import consoleUserPrompter from "./consoleUserPrompter";
import textIoUtil from "./textIoUtil";


describe("consoleUserPrompter", () => {

  test("when promptUerForChoice called, ReadLineAsync called with prompt text", async () => {

    const mockReadLineAsync = jest.spyOn(textIoUtil, 'readLineAsync')
      .mockImplementation(() => {
        return Promise.resolve('n')
      });

    const promtOptions = ["r", "n", "exit"]
    const userChoice = await consoleUserPrompter.promptUerForChoice("(N)ew Ueser or (R)eturning User: ", promtOptions);

    expect(userChoice).toBe('n');
    expect(mockReadLineAsync).toBeCalledWith("(N)ew Ueser or (R)eturning User: ");
    expect(mockReadLineAsync).toBeCalled();
  })

  test("when promptUerForChoice called, invalid input detected", async () => {

    const mockReadLineAsync = jest.spyOn(textIoUtil, 'readLineAsync')
      .mockImplementationOnce(() => {
        return Promise.resolve('xxx')
      })
      .mockImplementationOnce(() => {
        return Promise.resolve('r')
      });

    const mockWriteLine = jest.spyOn(textIoUtil, 'writeLine');
    const promtOptions = ["r", "n", "exit"]
    const userChoice = await consoleUserPrompter.promptUerForChoice("(N)ew Ueser or (R)eturning User: ", promtOptions);

    expect(userChoice).toBe('r');
    expect(mockReadLineAsync).toBeCalledWith("(N)ew Ueser or (R)eturning User: ");
    expect(mockReadLineAsync).toBeCalled();
    expect(mockWriteLine).toBeCalled();
    expect(mockWriteLine).toBeCalledWith("Invalid Input: xxx");
  })
});
