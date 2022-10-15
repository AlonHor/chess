import { UISettings } from './ui-settings.js';
import { Board } from './board.js';

export class UIHelper {
	static getElm(id) {
		return document.getElementById(id);
	}

	static createBoardMarkings() {
		const gutterElms = document.querySelectorAll('.board-gutter');
		for (let g = 0; g < 4; g++) {
			for (let index = 0; index < 8; index++) {
				const modifiedIndex = g % 2 === 0 ? (UISettings.isFlippedBoard ? 7 - index : index) : UISettings.isFlippedBoard ? index + 1 : 8 - index;
				const markElm = document.createElement('div');
				markElm.classList.add('board-gutter-label');
				markElm.innerText = g % 2 === 0 ? String.fromCharCode(97 + modifiedIndex) : String(modifiedIndex);
				gutterElms[g].appendChild(markElm);
			}
		}
	}

	static createBoardSquares() {
		const boardSquaresElm = UIHelper.getElm('board-squares');
		if (!boardSquaresElm) {
			return;
		}
		for (let index = 0; index < 64; index++) {
			const modifiedIndex = UISettings.isFlippedBoard ? 63 - index : index;
			const squareName = Board.getSquareNameByIndex(modifiedIndex);
			const squareElm = document.createElement('div');
			squareElm.setAttribute('data-index', String(index));
			squareElm.setAttribute('data-name', squareName);
			squareElm.classList.add('square', 'empty');
			boardSquaresElm.appendChild(squareElm);
		}
	}

	static createGameUI(isWhite) {
		UISettings.isFlippedBoard = !isWhite;
		UIHelper.createBoardMarkings();
		UIHelper.createBoardSquares();
		const boardFrameElm = UIHelper.getElm('board-frame');
		const welcomePanelElm = UIHelper.getElm('welcome-panel');
		if (!boardFrameElm || !welcomePanelElm) {
			return;
		}
		boardFrameElm.classList.remove('none');
		welcomePanelElm.classList.add('none');
	}

	static placePieces(board) {
		for (let i = 0; i < 64; i++) {
			const squareElm = document.querySelector(`.square[data-index="${i}"]`);
			if (!squareElm) {
				return;
			}
			squareElm.className = '';
			const modifiedIndex = UISettings.isFlippedBoard ? 63 - i : i;
			const char = board.boardPieces[modifiedIndex];
			if (!char) {
				squareElm.classList.add('square', 'empty');
				continue;
			}
			squareElm.classList.add('square', 'occupied', char === char.toLowerCase() ? 'black' : 'white', 'piece', char);
		}
	}
}