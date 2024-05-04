import {useAppDispatch} from '../../../app/store.ts';
import {useSelector} from 'react-redux';
import {decksSelector} from '../decks-selectors.ts';
import {useEffect} from 'react';
import {getDecksTC} from '../decks-thunks.ts';

export const useGetDecks = () => {
    const dispatch = useAppDispatch()
    const decks = useSelector(decksSelector)

    useEffect(() => {
        dispatch(getDecksTC())
    }, [dispatch]);

    return {decks}
}