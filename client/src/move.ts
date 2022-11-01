import { MoveType } from './types';

export class Move {
	type: MoveType = MoveType.NA;
	fullMoveNumber = 1;
	armyIndex = 0;
	from = -1;
	to = -1;
	name = '';

	constructor(fullMoveNumber: number, armyIndex: number, from: number, to: number, type: MoveType, name: string) {
		this.fullMoveNumber = fullMoveNumber;
		this.armyIndex = armyIndex;
		this.from = from;
		this.to = to;
		this.type = type;
		this.name = name;
	}
}
