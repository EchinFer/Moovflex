import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { moviesControllers } from "../../controllers";
import { SingleMovieRequest, SingleMovieResponse } from "../../core/types/services";

interface UseQuerySingleMovieProps {
    id: SingleMovieRequest["i"];
    plot: SingleMovieRequest["plot"];
}
export const useQuerySingleMovie = ({ id, plot }: UseQuerySingleMovieProps) => {
    const query = useQuery<SingleMovieResponse, AxiosError>({
        queryKey: ['movie', id, plot],
        queryFn: async () => {
            const data = await moviesControllers.getMovie({ i: id, plot: plot });

            if (!data) throw new AxiosError("Error fetching movie");

            if (data.Response === "False") {
                throw new AxiosError(data.Error, data.Error);
            }

            return data;
        },
        enabled: !!id,
        staleTime: 1000 * 60 * 60, // 1 hour
        gcTime: 1000 * 60 * 60, //  1 hour
    });

    return query;
}