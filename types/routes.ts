export type PageParams<T> = {
  params: T;
  searchParams: Record<string, string | undefined>;
};

export type RouteHandlerParams<T> = {
  params: T;
};
