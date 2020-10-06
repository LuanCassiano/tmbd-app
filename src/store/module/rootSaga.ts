import { all } from 'redux-saga/effects';

import movie from './Movie/sagas';
import genre from './Genres/sagas';

export default function* rootSaga(): Generator {
    yield all([movie, genre]);
}
