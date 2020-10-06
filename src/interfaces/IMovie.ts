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
    genres: IGenre[];
    popularity: number;
    vote_count: number;
    video: boolean;
    vote_average: number;
    budget: number;
    production_companies: [
        {
            id: number;
            name: string;
        },
    ];
    production_countries: [
        {
            iso_639_1: string;
            name: string;
        },
    ];
    revenue: number;
    runtime: number;
    spoken_languages: [
        {
            iso_639_1: string;
            name: string;
        },
    ];
    status: string;
    tagline: string;
}
