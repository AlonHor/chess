export enum AnalyticsCategory {
	GAME_PHASE = 'game-phase',
	UI_DESIGN = 'ui-design',
	USER_ACTION = 'user-action',
}
export enum AnalyticsAction {
	GAME_PHASE_GAME_STARTED = 'game-phase--game-started',
	GAME_PHASE_GAME_ENDED = 'game-phase--game-ended',
	UI_DESIGN_PIECES = 'ui-design--pieces',
	USER_ACTION_COPY_MOVES = 'user-action--copy-moves',
	USER_ACTION_COPY_FEN = 'user-action--copy-fen',
	USER_ACTION_RESTART_GAME = 'user-action--restart-game',
}

export class Analytics {
	static sendEvent(event_category: AnalyticsCategory, event_action: AnalyticsAction, event_label = '') {
		window['gtag']('event', event_action as string, {
			event_category: event_category as string,
			event_label: event_label ? event_label.trim() : (event_action as string),
		});
	}
}
