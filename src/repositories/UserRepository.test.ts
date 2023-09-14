import userRepository from "../repositories/UserRepository";
import { GameUserDto } from "./dtos/GameUserDto";
afterEach(() => {
  jest.clearAllMocks();
});

describe("user repository using real respository *******", () => {
  test("pass play, get response", async () => {
    const result = await userRepository.getGameUsers() as GameUserDto[];
    expect(result.length).toBeGreaterThan(1);
    expect(result[0]._id).toBeTruthy();
    expect(result[0].name).toBeTruthy();
  })
})




