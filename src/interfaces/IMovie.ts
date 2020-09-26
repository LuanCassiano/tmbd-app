import IGenre from './IGenre';

export default interface IMovie {
    id?: number;
    title: string;
    original_title: string;
    original_language: string;
    poster_path: string;
    backdrop_path: string;
    adult: boolean;
    overview: string;
    release_date: string;
    genre_ids: IGenre[];
    popularity: number;
    vote_count: number;
    video: boolean;
    vote_average: number;
}
