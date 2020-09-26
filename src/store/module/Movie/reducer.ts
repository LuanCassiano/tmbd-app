import { produce } from 'immer';
import { MovieTypes } from './types';
import { IMovieStateReducer } from './state';

const INITIAL_STATE: IMovieStateReducer = {
    loading: true,
    upcoming: [],
};

export default function movie(
    state = INITIAL_STATE,
    action: any,
): IMovieStateReducer {
    return produce(state, draft => {
        switch (action.type) {
            case MovieTypes.GET_UPCOMING_REQUEST: {
                draft.loading = true;
                break;
            }

            case MovieTypes.GET_UPCOMING_SUCCESS: {
                draft.loading = false;
                draft.upcoming = action.payload;
                break;
            }

            default:
                break;
        }
    });
}
