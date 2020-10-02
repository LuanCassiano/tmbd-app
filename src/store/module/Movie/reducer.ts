import { produce } from 'immer';
import { MovieTypes } from './types';
import { IMovieStateReducer } from './state';

const INITIAL_STATE: IMovieStateReducer = {
    loading: true,
    upcoming: [],
    movieDetail: {
        adult: false,
        backdrop_path: '',
        genres: [],
        original_language: '',
        original_title: '',
        overview: '',
        popularity: 0,
        poster_path: '',
        release_date: '',
        title: '',
        video: false,
        vote_average: 0,
        vote_count: 0,
        budget: 0,
        production_companies: [],
        production_countries: [],
        revenue: 0,
        runtime: 0,
        spoken_languages: [],
        status: '',
        tagline: '',
    },
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

            case MovieTypes.GET_MOVIE_DETAIL_REQUEST: {
                draft.loading = true;
                break;
            }

            case MovieTypes.GET_MOVIE_DETAIL_SUCCESS: {
                draft.loading = false;
                draft.movieDetail = action.payload;
                break;
            }

            default:
                break;
        }
    });
}
