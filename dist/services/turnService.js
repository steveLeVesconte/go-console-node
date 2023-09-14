"use strict";
// //import { getLatestTurnByMatchId } from "../repositories/turnRepository";
// import { getLatestTurnByMatchId } from "../repositories/TurnRepository";
// import { waitForMyTurn } from "./timerService";
// export function turnProcess(isMyTurn:boolean):Promise<string>{
//     const p: Promise<string> = new Promise((resolve) => {
//     if(isMyTurn){
//         getLatestTurnByMatchId("xxx").then((result)=>
//         {
//              console.log("did  turnProcess:",result);
//              resolve(result);
//         })
//     }else{
//         waitForMyTurn().then((result)=>
//         {
//             console.log("did waitForNextPing: ", result);
//             resolve("waited for my turn");
//            // resolve(result?"true":"false");
//         })
//     }
// });
// return p;
// }
// export function processMyTurn(matchId:string):Promise<string>{
//      //getinput ui-get-input promise  A
//      // if exit resolve -> handled
//      // if pass resolve => repository-save save handled - turn change  A
//      // if invalid => handled = not turn change  
//      // if play -> eval
//          // if valid/legal => repository-save save handled turn change A
//          // else message -> not handled not turn change
//          console.log('in processMyTurn: ',matchId);
//          //console.log('tabs or spaces?');
//          const p: Promise<string> = new Promise((resolve) => {
//              setTimeout(() => {
//                  //let foundBooks: string[] = util.GetBookTitlesByCategory(cat);
//                  //if (foundBooks.length > 0) {
//                      resolve("latest turn processed");
//                  // }
//                  // else {
//                  // 	reject('No books found for that category.');
//                  // }
//              }, 2000);
//          });
//          return p;
//     // if(isMyTurn){
//     //     getLatestTurnByMatchId("xxx").then((result)=>
//     //     {
//     //          console.log("did  getLatestTurnByMatchId:",result);
//     //     })
//     // }else{
//     //     waitForNextPing().then(()=>
//     //     {
//     //         console.log("did waitForNextPing");
//     //     })
//     // }
// }
//# sourceMappingURL=turnService.js.map