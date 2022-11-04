import { Position } from './position';

export class Fen {
	static default = `rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1`;

	static parseFenStr(fenStr): Position {
		const parts = fenStr.split(' ');
		const pd: string[] = [];
		const rows = parts[0].split(`/`);
		rows.forEach(row => {
			for (let i = 0; i < row.length; i++) {
				if (['1', '2', '3', '4', '5', '6', '7', '8'].includes(row[i])) {
					pd.push(...new Array(Number(row[i])).fill(''));
				} else {
					pd.push(row[i]);
				}
			}
		});
		return new Position(Number(parts[5]), parts[1] === 'w' ? 0 : 1, pd);
	}

	static getFenStr(position: Position | null) {
		if (!position) {
			return '';
		}
		const parts: string[] = [];
		const pd: string[] = [];
		let emptySquaresCount = 0;
		for (let i = 0; i < 64; i++) {
			if (i % 8 === 0) {
				if (i !== 0) {
					pd.push(`/`);
				}
				emptySquaresCount = 0;
			}
			if (position.pieceData[i]) {
				if (emptySquaresCount > 0) {
					pd.push(String(emptySquaresCount));
				}
				pd.push(position.pieceData[i]);
				emptySquaresCount = 0;
			} else {
				emptySquaresCount++;
			}
			if (i % 8 === 7 && emptySquaresCount > 0) {
				pd.push(String(emptySquaresCount));
			}
		}
		parts[0] = pd.join('');
		parts[1] = ['w', 'b'][position.armyIndex];
		parts[2] = 'KQkq';
		parts[3] = '-';
		parts[4] = '0';
		parts[5] = String(position.fullMoveNum);
		return parts.join(' ');
	}
}
