import { GenreTypes } from './types';
import IAction from '../interfaces/IAction';
import IGenre from '../../../interfaces/IGenre';

export function getGenresRequest(): IAction {
    return {
        type: GenreTypes.GET_GENRES_REQUEST,
    };
}

export function getGenresSuccess(data: IGenre[]): IAction<IGenre[]> {
    return {
        type: GenreTypes.GET_GENRES_SUCCESS,
        payload: data,
    };
}
