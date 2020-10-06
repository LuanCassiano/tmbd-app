import { MovieTypes } from './types';
import IAction from '../interfaces/IAction';
import IMovie from '../../../interfaces/IMovie';

export function getMoviesRequest(): IAction {
    return {
        type: MovieTypes.GET_MOVIES_REQUEST,
    };
}

export function getMoviesSuccess(data: IMovie[]): IAction<IMovie[]> {
    return {
        type: MovieTypes.GET_MOVIES_SUCCESS,
        payload: data,
    };
}

export function getUpcomingRequest(): IAction {
    return {
        type: MovieTypes.GET_UPCOMING_REQUEST,
    };
}

export function getUpcomingSuccess(data: IMovie[]): IAction<IMovie[]> {
    return {
        type: MovieTypes.GET_UPCOMING_SUCCESS,
        payload: data,
    };
}

export function getMovieDetailsRequest(idMovie: number): IAction<number> {
    return {
        type: MovieTypes.GET_MOVIE_DETAIL_REQUEST,
        payload: idMovie,
    };
}

export function getMovieDetailsSuccess(data: IMovie): IAction<IMovie> {
    return {
        type: MovieTypes.GET_MOVIE_DETAIL_SUCCESS,
        payload: data,
    };
}
