import IMovie from '../../../interfaces/IMovie';

export interface IMovieStateReducer {
    readonly discover: IMovie[];
    readonly upcoming: IMovie[];
    readonly nowPlaying: IMovie[];
    readonly popular: IMovie[];
    readonly topRated: IMovie[];
    readonly movies: IMovie[];
    readonly movieDetail: IMovie;
    readonly loading: boolean;
}
