import {Deck} from './decks-api.ts';

const initialState = {
    decks: [] as Deck[], // todo: add type
    searchParams: {
        name: '',
    },
}

type DecksState = typeof initialState

export const decksReducer = (state: DecksState = initialState, action: DecksActions): DecksState => {
    switch (action.type) {
        case 'SET-DECKS': {
            return {
                ...state,
                decks: action.decks
            }
        }
        case 'CREATE-DECK': {
            return {
                ...state,
                decks: [action.deck ,...state.decks]
            }
        }
        default:
            return state
    }
}

type DecksActions = SetDecksACType | CreateDeckACType

type SetDecksACType = ReturnType<typeof setDecksAC>
export const setDecksAC = (decks: Deck[]) => {
    return {
        type: 'SET-DECKS',
        decks
    } as const
}
type CreateDeckACType = ReturnType<typeof createDeckAC>
export const createDeckAC = (deck: Deck) => {
    return {
        type: 'CREATE-DECK',
        deck
    } as const
}
