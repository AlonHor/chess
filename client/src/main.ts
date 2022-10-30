import { Game } from './game';
import { UILog } from './ui/ui-log';
import { UiWelcome } from './ui/ui-welcome';
import { UiMain } from './ui/ui-main';

let game: Game | null = null;

function handleGameUpdate() {
	UiMain.updateUI();
}

function handleWelcomeDone(fenStr: string, player0Type, player0Name, player1Type, player1Name) {
	const startTime = new Date().getTime();
	UILog.startTime = startTime;
	game = new Game(player0Type, player0Name, player1Type, player1Name, fenStr, startTime, handleGameUpdate);
	UiMain.createGameUI(game);
	game.start();
}

function init() {
	UiWelcome.init(handleWelcomeDone);
}

init();
