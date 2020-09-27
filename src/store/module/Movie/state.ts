import IMovie from '../../../interfaces/IMovie';

export interface IMovieStateReducer {
    readonly upcoming: IMovie[];
    readonly nowPlaying: IMovie[];
    readonly popular: IMovie[];
    readonly topRated: IMovie[];
    readonly loading: boolean;
}
