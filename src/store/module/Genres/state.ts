import IGenre from '../../../interfaces/IGenre';

export interface IGenreStateReducer {
    readonly genres: IGenre[];
    readonly loading: boolean;
}
