export interface Article {
    id: string;
    title: string;
    content: string;
}

export interface ApiResponse<T> {
    data: T;
    meta?: {
        total: number;
        page: number;
        limit: number;
    };
}
