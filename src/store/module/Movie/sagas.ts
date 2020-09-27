import { call, put, all, takeLatest } from 'redux-saga/effects';
import api from '../../../service/api';
import { API_KEY } from '../../../helpers/Constants';
import { MovieTypes } from './types';
import { IApiResponse } from '../interfaces/IApiResponse';
import IMovie from '../../../interfaces/IMovie';

import {
    getUpcomingSuccess,
    getNowPlayingSuccess,
    getPopularSuccess,
    getTopRatedSuccess,
} from './actions';

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

export function* getNowPlayingMovies(): Generator {
    try {
        const response = (yield call(api.get, '/movie/now_playing', {
            params: {
                api_key: API_KEY,
                page: 1,
            },
        })) as IApiResponse<IMovie[]>;

        yield put(getNowPlayingSuccess(response.data.results));
    } catch (error) {
        console.tron.log('error', error);
    }
}

export function* getPopularMovies(): Generator {
    try {
        const response = (yield call(api.get, '/movie/popular', {
            params: {
                api_key: API_KEY,
                page: 1,
            },
        })) as IApiResponse<IMovie[]>;

        yield put(getPopularSuccess(response.data.results));
    } catch (error) {
        console.tron.log('error', error);
    }
}

export function* getTopRatedMovies(): Generator {
    try {
        const response = (yield call(api.get, '/movie/top_rated', {
            params: {
                api_key: API_KEY,
                page: 1,
            },
        })) as IApiResponse<IMovie[]>;

        yield put(getTopRatedSuccess(response.data.results));
    } catch (error) {
        console.tron.log('error', error);
    }
}

export default all([
    takeLatest(MovieTypes.GET_UPCOMING_REQUEST, getUpcomingMovies),
    takeLatest(MovieTypes.GET_NOW_PLAYING_REQUEST, getNowPlayingMovies),
    takeLatest(MovieTypes.GET_POPULAR_REQUEST, getPopularMovies),
    takeLatest(MovieTypes.GET_TOP_RATED_REQUEST, getTopRatedMovies),
]);
