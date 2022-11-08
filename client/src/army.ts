import { PlayerType, ColorType, PieceType } from './types';
import { Piece } from './piece';

export class Army {
	index: number;
	color: ColorType;
	playerType: PlayerType;
	pieces: Piece[];

	constructor(armyIndex: number, playerType: PlayerType) {
		this.index = armyIndex;
		this.color = armyIndex === 0 ? ColorType.WHITE : ColorType.BLACK;
		this.playerType = playerType;
		this.pieces = [];
	}

	static flipArmyIndex(armyIndex) {
		return (armyIndex - 1) * -1;
	}

	createAndAddPiece(pieceType: PieceType): Piece {
		const piece = new Piece(this.index, pieceType);
		this.pieces.push(piece);
		return piece;
	}

	getPiece(name: string) {
		return this.pieces.find(p => p.name === name);
	}

	removePiece(pieceName: string) {
		const index = this.pieces.findIndex(p => p.name === pieceName);
		if (index === -1) {
			return;
		}
		this.pieces.splice(index, 1);
	}
}
