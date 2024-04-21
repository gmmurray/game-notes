export type DataResponse<T> = {
  data: T;
  error?: string;
};

export type PagedDataResponse<T> = DataResponse<T> & { total: number };
