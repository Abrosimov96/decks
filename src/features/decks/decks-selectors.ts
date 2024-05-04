import {Deck} from './decks-api.ts';
import {AppRootState} from '../../app/store.ts';

export const decksSelector = (store: AppRootState): Deck[] => store.decksReducer.decks