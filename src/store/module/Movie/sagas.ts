import { call, put, all, takeLatest } from 'redux-saga/effects';
import api from '../../../service/api';
import { API_KEY } from '../../../helpers/Constants';
import { MovieTypes } from './types';
import { IApiResponse } from '../interfaces/IApiResponse';
import IMovie from '../../../interfaces/IMovie';

import { getUpcomingSuccess } from './actions';

export function* getUpcomingMovies(): Generator {
    try {
        const response = (yield call(api.get, '/movie/upcoming', {
            params: {
                api_key: API_KEY,
                page: 1,
            },
        })) as IApiResponse<IMovie[]>;

        yield put(getUpcomingSuccess(response.data.results));
    } catch (error) {
        console.tron.log('error', error);
    }
}

export default all([
    takeLatest(MovieTypes.GET_UPCOMING_REQUEST, getUpcomingMovies),
]);
