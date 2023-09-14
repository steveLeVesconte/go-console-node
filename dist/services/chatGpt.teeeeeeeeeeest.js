"use strict";
// import { turnProcess } from './turnService'; // Import the module containing the functions
// // Mock the waitForMyTurn function
// jest.mock('./timerService', () => ({
//   waitForMyTurn: jest.fn(),
// }));
// // describe('turnProcess', () => {
// //   it('should resolve with "true" when it is my turn', async () => {
// //     const mockProcessMyTurn = jest.fn(() => Promise.resolve('xxx'));
// //     const mockIsMyTurn = true;
// //     // Set up the mock implementation for processMyTurn
// //     jest.spyOn(global, 'processMyTurn').mockImplementation(mockProcessMyTurn);
// //     // Set up the mock implementation for waitForMyTurn
// //     const mockWaitForMyTurn = jest.fn(() => new Promise(resolve => setTimeout(() => resolve(true), 10000)));
// //     (turnProcess as jest.MockedFunction<typeof turnProcess>).mockImplementationOnce(() => mockWaitForMyTurn());
// //     // Call the function and wait for it to resolve
// //     const result = await turnProcess(mockIsMyTurn);
// //     expect(result).toBe('xxx');
// //     expect(mockProcessMyTurn).toHaveBeenCalledWith('xxx');
// //     expect(mockWaitForMyTurn).not.toHaveBeenCalled();
// //   });
//   it('should resolve with "true" when it is not my turn and waitForMyTurn resolves true', async () => {
//     const mockWaitForMyTurn = jest.fn(() => Promise.resolve(true));
//     const mockIsMyTurn = false;
//     // Set up the mock implementation for waitForMyTurn
//     (turnProcess as jest.MockedFunction<typeof turnProcess>).mockImplementationOnce(() => mockWaitForMyTurn());
//     // Call the function and wait for it to resolve
//     const result = await turnProcess(mockIsMyTurn);
//     expect(result).toBe('true');
//     expect(mockWaitForMyTurn).toHaveBeenCalled();
//   });
//   it('should resolve with "false" when it is not my turn and waitForMyTurn resolves false', async () => {
//     const mockWaitForMyTurn = jest.fn(() => Promise.resolve(false));
//     const mockIsMyTurn = false;
//     // Set up the mock implementation for waitForMyTurn
//   //  (turnProcess as jest.MockedFunction<typeof turnProcess>).mockImplementationOnce(() => mockWaitForMyTurn());
//     // Call the function and wait for it to resolve
//     const result = await turnProcess(mockIsMyTurn);
//     expect(result).toBe('false');
//     expect(mockWaitForMyTurn).toHaveBeenCalled();
//   });
// });
//# sourceMappingURL=chatGpt.teeeeeeeeeeest.js.map