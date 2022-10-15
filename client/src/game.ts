import { Army } from './army.js';
import { Player } from './player.js';
import { Board } from './board.js';
import { ColorType } from './types';

export class Game {
	players: Player[];
	armies: Army[];
	board: Board;
	onGameUpdate: (Game) => void;

	constructor(player0Type, player0Name, player1Type, player1Name, onGameUpdate) {
		this.players = [new Player(0, player0Type, player0Name), new Player(1, player1Type, player1Name)];
		this.armies = [new Army(0, player0Type), new Army(1, player1Type)];
		this.board = new Board();
		this.onGameUpdate = onGameUpdate;
	}

	placeFen(fen) {
		for (let i = 0; i < 64; i++) {
			const char = fen.boardPieces[i];
			if (!char) {
				continue;
			}
			const color = char === char.toUpperCase() ? ColorType.WHITE : ColorType.BLACK;
			const armyIndex = color === ColorType.WHITE ? 0 : 1;
			const piece = this.armies[armyIndex].createAndAddPiece(char.toLowerCase());
			this.board.placePiece(i, piece);
		}
		this.board.boardPieces = fen.boardPieces;
	}

	start(fen) {
		this.placeFen(fen);
		this.onGameUpdate(this);
	}
}
