import { call, put, all, takeLatest } from 'redux-saga/effects';
import api from '../../../service/api';
import { API_KEY } from '../../../helpers/Constants';
import { MovieTypes } from './types';
import { IApiResponse, IResponseApi } from '../interfaces/IApiResponse';
import IMovie from '../../../interfaces/IMovie';

import {
    getUpcomingSuccess,
    getNowPlayingSuccess,
    getPopularSuccess,
    getTopRatedSuccess,
    getMoviesSuccess,
    getMovieDetailsSuccess,
} from './actions';
import { AnyAction } from 'redux';

export function* getMovies(): Generator {
    try {
        const response = (yield call(api.get, '/discover/movie', {
            params: {
                api_key: API_KEY,
                page: 1,
                language: 'pt-BR',
                year: 2020,
            },
        })) as IApiResponse<IMovie[]>;

        yield put(getMoviesSuccess(response.data.results));
    } catch (error) {
        console.tron.log('error', error);
    }
}

export function* getUpcomingMovies(): Generator {
    try {
        const response = (yield call(api.get, '/movie/upcoming', {
            params: {
                api_key: API_KEY,
                page: 1,
                language: 'pt-BR',
            },
        })) as IApiResponse<IMovie[]>;

        yield put(getUpcomingSuccess(response.data.results));
    } catch (error) {
        console.tron.log('error', error);
    }
}

export function* getMovieDetails({ payload }: AnyAction): Generator {
    try {
        const response = (yield call(api.get, `/movie/${payload}`, {
            params: {
                api_key: API_KEY,
            },
        })) as IResponseApi<IMovie>;

        yield put(getMovieDetailsSuccess(response.data));
    } catch (error) {}
}

export default all([
    takeLatest(MovieTypes.GET_MOVIES_REQUEST, getMovies),
    takeLatest(MovieTypes.GET_UPCOMING_REQUEST, getUpcomingMovies),
    takeLatest(MovieTypes.GET_MOVIE_DETAIL_REQUEST, getMovieDetails),
]);
