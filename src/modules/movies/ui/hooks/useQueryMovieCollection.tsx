import { QueryKey, UseInfiniteQueryResult, useInfiniteQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { moviesControllers } from "../../controllers";
import { movieCollectionApiErrors } from "../../core/errors/movieApiErrors";
import { InfiniteMovieData, MovieCollectionResponse } from "../../core/types/services";

interface MovieSearchQuery {
    searchQuery: string;
    year?: number;
}
export const useQueryMovieCollection = ({ searchQuery, year }: MovieSearchQuery): UseInfiniteQueryResult<InfiniteMovieData, AxiosError<unknown, any>> => {
    const query = useInfiniteQuery<MovieCollectionResponse, AxiosError, InfiniteMovieData, QueryKey, number>({
        queryKey: ["movies-list", searchQuery, year],
        queryFn: async ({ pageParam }) => {
            const data = await moviesControllers.searchMovies({
                s: searchQuery,
                y: year,
                page: pageParam,
            });

            if (!data) throw new AxiosError("Error fetching movies");

            if (data.Response === "False") {
                const error_ = movieCollectionApiErrors.find((error) => error.error === data.Error) ?? {
                    error: "Unknown error",
                    status: 500,
                    message: "Hubo un error al cargar las películas",
                };
                throw new AxiosError(error_.message, error_.status.toString());
            }
            
            return data;
        },
        enabled: (!!searchQuery && searchQuery.length > 0) || !!year,
        initialPageParam: 1,
        getNextPageParam: (lastPage, allPages, lastPageParam) => {
            const totalResults = parseInt(lastPage.totalResults);
            const totalRows = lastPage.Search.length;
            const totalPages = Math.ceil(totalResults / totalRows);

            if (lastPageParam < totalPages) {
                return lastPageParam + 1;
            }

            return null; 
        },
        staleTime: 1000 * 60 * 60, // 5 minutes
        gcTime: 1000 * 60 * 60, // 20 minutes
    });

    return query;
};
