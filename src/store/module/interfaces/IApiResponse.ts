export interface IApiResponse<T> {
    data: {
        page: number;
        total_results: number;
        results: T;
    };
}
