import { API_KEY } from './../../../helpers/Constants';
import { call, put, all, takeLatest } from 'redux-saga/effects';
import api from '../../../service/api';
import { GenreTypes } from './types';

import { getGenresSuccess } from './actions';
import IGenre from '../../../interfaces/IGenre';

interface IGenreApiResponse {
    data: {
        genres: IGenre[];
    };
}

export function* getGenres(): Generator {
    try {
        const response = (yield call(api.get, '/genre/movie/list', {
            params: {
                api_key: API_KEY,
                language: 'pt-BR',
            },
        })) as IGenreApiResponse;

        yield put(getGenresSuccess(response.data.genres));
    } catch (error) {
        console.tron.log('error', error);
    }
}

export default all([takeLatest(GenreTypes.GET_GENRES_REQUEST, getGenres)]);
