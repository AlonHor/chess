import { ColorType, MoveType, PieceType, PlayerType } from './types';
import { Helper } from './helper';
import { Fen } from './fen';
import { Player } from './player';
import { Piece } from './piece';
import { Army } from './army';
import { Board } from './board';
import { Move } from './move';
import { Position } from './position';
import { UiLog } from './ui/ui-log';
import { Engine } from './engine';

export class Game {
	players: Player[];
	armies: Army[];
	board: Board;
	positions: Position[] = [];
	moves: Move[] = [];
	possibleMoves: Move[] = [];
	startTime = 0;
	onGameUpdate: (Game) => void;
	onPieceNameChange: (oldName: string, newName: string) => void;
	engine = new Engine();

	constructor(
		player0Type: PlayerType,
		player0Name: string,
		player1Type: PlayerType,
		player1Name: string,
		fenStr: string,
		startTime: number,
		onGameUpdate: (game: Game) => void,
		onPieceNameChange: (oldName: string, newName: string) => void,
	) {
		this.players = [new Player(0, player0Type, player0Name), new Player(1, player1Type, player1Name)];
		this.armies = [new Army(0, player0Type), new Army(1, player1Type)];
		this.board = new Board();
		this.startTime = startTime;
		this.onGameUpdate = onGameUpdate;
		this.onPieceNameChange = onPieceNameChange;
		this.applyFen(fenStr);
	}

	start() {
		this.onGameUpdate(this);
	}

	getCurPosition(): Position | null {
		return this.positions.length ? this.positions[this.positions.length - 1] : null;
	}

	getCurMove(): Move | null {
		return this.moves.length ? this.moves[this.moves.length - 1] : null;
	}

	pushPosition(position: Position) {
		this.positions.push(position);
		this.possibleMoves = this.engine.getAllPossibleMoves(position);
	}

	applyFen(fenStr: string) {
		const position = Fen.parseFenStr(fenStr);
		this.pushPosition(position);
		for (let i = 0; i < 64; i++) {
			const char = position.pieceData[i];
			if (!char) {
				continue;
			}
			const color = char === char.toUpperCase() ? ColorType.WHITE : ColorType.BLACK;
			const armyIndex = color === ColorType.WHITE ? 0 : 1;
			const piece = this.armies[armyIndex].createAndAddPiece(char.toLowerCase() as PieceType);
			this.board.placePiece(piece, i);
		}
	}

	updatePosition(): Position | null {
		const curPosition = this.getCurPosition();
		if (!curPosition) {
			return null;
		}
		const pd: string[] = [];
		this.board.squares.forEach(s => {
			pd.push(s.piece?.typeCased ?? '');
		});
		const newPosition = new Position(curPosition.armyIndex === 0 ? curPosition.fullMoveNum : curPosition.fullMoveNum + 1, Helper.flipArmyIndex(curPosition.armyIndex), pd);
		this.pushPosition(newPosition);
		return newPosition;
	}

	move(move): Move | null {
		if (!move) {
			return null;
		}
		const fromSquare = this.board.squares[move.from];
		const piece = fromSquare.piece;
		if (!piece) {
			return null;
		}
		const pieceName = piece.name;
		if (move.types.has(MoveType.PROMOTION)) {
			if (move.types.has(MoveType.PROMOTION_TO_QUEEN)) {
				piece.promote(PieceType.QUEEN);
			} else if (move.types.has(MoveType.PROMOTION_TO_ROOK)) {
				piece.promote(PieceType.ROOK);
			} else if (move.types.has(MoveType.PROMOTION_TO_BISHOP)) {
				piece.promote(PieceType.BISHOP);
			} else if (move.types.has(MoveType.PROMOTION_TO_KNIGHT)) {
				piece.promote(PieceType.KNIGHT);
			}
			this.onPieceNameChange(pieceName, piece.name);
		}
		const toSquare = this.board.squares[move.to];
		const targetPiece: Piece | null = toSquare.piece;
		fromSquare.clearPiece();
		toSquare.clearPiece();
		this.board.placePiece(piece, move.to);
		this.moves.push(move);
		if (targetPiece) {
			this.armies[Helper.flipArmyIndex(move.armyIndex)].removePiece(targetPiece.name);
		}
		UiLog.logMove(move);
		this.updatePosition();
		return move;
	}
}
