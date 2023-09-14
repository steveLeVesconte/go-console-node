



export function waitForMyTurn(): Promise<void> {
	console.log('in real waitForNextPing ***************');
	const p = new Promise<void>((resolve) => {
		setTimeout(() => {
			console.log("in real waitForMyTurn  *****************c");
			resolve();
		}, 10000);
	});
	return p;
}