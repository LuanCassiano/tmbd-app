import { produce } from 'immer';
import { MovieTypes } from './types';
import { IMovieStateReducer } from './state';

const INITIAL_STATE: IMovieStateReducer = {
    loading: true,
    upcoming: [],
    nowPlaying: [],
    popular: [],
    topRated: [],
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

            case MovieTypes.GET_NOW_PLAYING_REQUEST: {
                draft.loading = true;
                break;
            }

            case MovieTypes.GET_NOW_PLAYING_SUCCESS: {
                draft.loading = false;
                draft.nowPlaying = action.payload;
                break;
            }

            case MovieTypes.GET_POPULAR_REQUEST: {
                draft.loading = true;
                break;
            }

            case MovieTypes.GET_POPULAR_SUCCESS: {
                draft.loading = false;
                draft.popular = action.payload;
                break;
            }

            case MovieTypes.GET_TOP_RATED_REQUEST: {
                draft.loading = true;
                break;
            }

            case MovieTypes.GET_TOP_RATED_SUCCESS: {
                draft.loading = false;
                draft.topRated = action.payload;
                break;
            }

            default:
                break;
        }
    });
}
