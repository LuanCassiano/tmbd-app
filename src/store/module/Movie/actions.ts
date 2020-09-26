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
