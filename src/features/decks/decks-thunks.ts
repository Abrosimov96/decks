import { Dispatch } from 'redux'
import { AddDeckParams, decksAPI } from './decks-api.ts'
import { createDeckAC, setDecksAC } from './decks-reducer.ts'

export const getDecksTC = () => (dispatch: Dispatch) => {
    decksAPI.getDecks()
        .then(res => {
            dispatch(setDecksAC(res.data.items))
        })
}

export  const postDecksTC = (params: AddDeckParams) => async (dispatch: Dispatch) => {
    return decksAPI.postDeck(params)
        .then(res => {
            dispatch(createDeckAC(res.data))
        })
}