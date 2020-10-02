export interface IResponseApi<T> {
    data: T;
}

export interface IApiResponse<T> {
    data: {
        page: number;
        total_results: number;
        results: T;
    };
}
