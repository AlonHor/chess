import { MoveType, PlayerType } from '../types';
import { Move } from '../move';
import { Game } from '../game';
import { UiHelper } from './ui-helper';
import { UiInit } from './ui-init';
import { UiFen } from './ui-fen';
import { UiPromotion } from './ui-promotion';

export class UiMain {
	game: Game;
	isBoardFlipped = false;
	selectedIndex = -1;

	constructor(game: Game) {
		this.game = game;
	}

	updateBoardSquaresUI() {
		const squareElms = Array.from(UiHelper.queryElms(`.board-squares > .square`));
		for (let uiIndex = 0; uiIndex < 64; uiIndex++) {
			const index = UiHelper.getModifiedIndex(uiIndex, this.isBoardFlipped);
			const lastMove = this.game.getCurMove();
			const squareElm = squareElms[uiIndex];
			squareElm.className = '';
			const square = this.game.board.squares[index];
			if (square.isEmpty()) {
				squareElm.classList.add('square', 'empty');
				if (lastMove && lastMove.from === index) {
					squareElm.classList.add('last-move-from');
				}
				if (this.selectedIndex !== -1 && this.game.possibleMoves.find(m => m.from === this.selectedIndex && m.to === index)) {
					squareElm.classList.add('possible-to');
					if (index === this.game.getCurPosition()?.epTargetIndex) {
						squareElm.classList.add('en-passant-target');
					}
				}
				continue;
			}
			const piece = square.piece;
			if (!piece) {
				continue;
			}
			squareElm.classList.add('square', 'occupied', piece.armyIndex === 0 ? 'white' : 'black', piece.typeCased);
			if (lastMove && lastMove.to === index) {
				squareElm.classList.add('last-move-to');
			}
			if (index === this.selectedIndex) {
				squareElm.classList.add('selected-square');
			}
			if (this.game.possibleMoves.find(m => m.from === index)) {
				if (this.selectedIndex === -1) {
					squareElm.classList.add('possible-from');
				}
			}
			if (this.selectedIndex !== -1 && this.game.possibleMoves.find(m => m.from === this.selectedIndex && m.to === index)) {
				squareElm.classList.add('possible-to');
			}
		}
	}

	updateBoardPiecesUI() {
		const pieceElmsToHandle = Array.from(UiHelper.queryElms(`.board-pieces > .piece`));
		for (let uiIndex = 0; uiIndex < 64; uiIndex++) {
			const index = UiHelper.getModifiedIndex(uiIndex, this.isBoardFlipped);
			const square = this.game.board.squares[index];
			const piece = square.piece;
			if (!piece) {
				continue;
			}
			let pieceElm, pieceElmIndex;
			pieceElmIndex = pieceElmsToHandle.findIndex(elm => elm.dataset.name === piece.name);
			if (pieceElmIndex > -1) {
				pieceElm = pieceElmsToHandle[pieceElmIndex];
				pieceElmsToHandle.splice(pieceElmIndex, 1);
			} else {
				//check name changed due to promotion
				pieceElmIndex = pieceElmsToHandle.findIndex(elm => elm.dataset.name.substring(1) === piece.name.substring(1));
				if (pieceElmIndex > -1) {
					pieceElm = pieceElmsToHandle[pieceElmIndex];
					pieceElm.setAttribute('data-name', piece.name);
					pieceElmsToHandle.splice(pieceElmIndex, 1);
				} else {
					continue;
				}
			}
			pieceElm.dataset.squareIndex = String(index);
			pieceElm.style.transform = `translate(${uiIndex % 8}00%, ${Math.trunc(uiIndex / 8)}00%)`;
			pieceElm.className = '';
			pieceElm.classList.add('piece', piece.armyIndex === 0 ? 'white' : 'black', piece.typeCased);
			if (index === this.selectedIndex) {
				pieceElm.classList.add('clickable');
			}
			if (this.game.possibleMoves.find(m => m.from === index)) {
				pieceElm.classList.add('clickable');
			}
			if (this.selectedIndex !== -1 && this.game.possibleMoves.find(m => m.from === this.selectedIndex && m.to === index)) {
				pieceElm.classList.add('clickable');
			}
		}
		pieceElmsToHandle.forEach(elm => {
			elm.remove();
		});
	}

	updateUI() {
		this.updateBoardSquaresUI();
		this.updateBoardPiecesUI();
		UiFen.updateFenUI(this.game.getCurPosition());
	}

	createGameUI() {
		this.isBoardFlipped = this.game.players[0].type === PlayerType.COMPUTER && this.game.players[1].type === PlayerType.HUMAN;
		const uiInit = new UiInit();
		uiInit.createGameUI(this.game.players, this.game.board, this.isBoardFlipped, this.handleClickSquareElm.bind(this), this.handleClickPieceElm.bind(this));
		this.updateUI();
	}

	handleUiSelection(newIndex: number) {
		if (this.selectedIndex === newIndex) {
			this.selectedIndex = -1;
			this.updateUI();
		} else if (this.game.possibleMoves.find(m => newIndex === m.from)) {
			this.selectedIndex = newIndex;
			this.updateUI();
		} else if (this.game.possibleMoves.find(m => m.from === this.selectedIndex && m.to === newIndex)) {
			const moves: Move[] = this.game.possibleMoves.filter(m => m.from === this.selectedIndex && m.to === newIndex);
			if (moves.length === 1) {
				this.game.move(moves[0]);
				this.selectedIndex = -1;
				this.updateUI();
			} else if (moves.length === 4 && moves.every(m => m.types.has(MoveType.PROMOTION))) {
				UiPromotion.showDialog(this.game.getCurPosition()?.armyIndex || 0, (promotionMoveType: MoveType) => {
					this.game.move(moves.find(m => m.types.has(promotionMoveType)));
					this.selectedIndex = -1;
					this.updateUI();
				});
			}
		} else {
			this.selectedIndex = -1;
			this.updateUI();
		}
	}

	handleClickSquareElm(event: MouseEvent) {
		if (!event.target) {
			return;
		}
		const elm = event.target as HTMLDivElement;
		if (elm) {
			this.handleUiSelection(Number(elm.dataset.index));
		} else {
			this.handleUiSelection(-1);
		}
	}

	handleClickPieceElm(event: MouseEvent) {
		if (!event.target) {
			return;
		}
		const elm = event.target as HTMLDivElement;
		if (elm) {
			this.handleUiSelection(Number(elm.dataset.squareIndex));
		} else {
			this.handleUiSelection(-1);
		}
	}
}
