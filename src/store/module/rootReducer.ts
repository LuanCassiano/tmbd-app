import { combineReducers } from 'redux';

import movie from './Movie/reducer';
import genre from './Genres/reducer';

export const rootReducer = combineReducers({
    movie,
    genre,
});

export type RootState = ReturnType<typeof rootReducer>;
