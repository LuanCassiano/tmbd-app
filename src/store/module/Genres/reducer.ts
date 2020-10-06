import { produce } from 'immer';
import { GenreTypes } from './types';
import { IGenreStateReducer } from './state';

const INITIAL_STATE: IGenreStateReducer = {
    genres: [],
    loading: true,
};

export default function genre(
    state = INITIAL_STATE,
    action: any,
): IGenreStateReducer {
    return produce(state, draft => {
        switch (action.type) {
            case GenreTypes.GET_GENRES_REQUEST: {
                draft.loading = true;
                break;
            }

            case GenreTypes.GET_GENRES_SUCCESS: {
                draft.loading = false;
                draft.genres = action.payload;
                break;
            }

            default:
                break;
        }
    });
}
