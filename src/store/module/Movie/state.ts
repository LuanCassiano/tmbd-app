import IMovie from '../../../interfaces/IMovie';

export interface IMovieStateReducer {
    readonly upcoming: IMovie[];
    readonly movieDetail: IMovie;
    readonly loading: boolean;
}
