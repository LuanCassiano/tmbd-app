import { MovieTypes } from './types';
import IAction from '../interfaces/IAction';
import IMovie from '../../../interfaces/IMovie';

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

export function getNowPlayingRequest(): IAction {
    return {
        type: MovieTypes.GET_NOW_PLAYING_REQUEST,
    };
}

export function getNowPlayingSuccess(data: IMovie[]): IAction<IMovie[]> {
    return {
        type: MovieTypes.GET_NOW_PLAYING_SUCCESS,
        payload: data,
    };
}

export function getPopularRequest(): IAction {
    return {
        type: MovieTypes.GET_POPULAR_REQUEST,
    };
}

export function getPopularSuccess(data: IMovie[]): IAction<IMovie[]> {
    return {
        type: MovieTypes.GET_POPULAR_SUCCESS,
        payload: data,
    };
}

export function getTopRatedRequest(): IAction {
    return {
        type: MovieTypes.GET_TOP_RATED_REQUEST,
    };
}

export function getTopRatedSuccess(data: IMovie[]): IAction<IMovie[]> {
    return {
        type: MovieTypes.GET_TOP_RATED_SUCCESS,
        payload: data,
    };
}
