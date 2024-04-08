import { isAxiosError } from "axios";
import { moviesServices } from "../services";
import { MovieCollectionRequest, MovieCollectionResponse, SingleMovieRequest, SingleMovieResponse } from "../core/types/services";

const searchMovies = async (options: MovieCollectionRequest) => {
    try {
        const resp = await moviesServices.searchMovies(options);
        return resp.data;
    } catch (error) {
        if (isAxiosError<MovieCollectionResponse>(error)) {
            return error.response?.data;
        }
        return null;
    }
};

const getMovie = async (options: SingleMovieRequest) : Promise<SingleMovieResponse | null> => {
    try {
        const resp = await moviesServices.getMovie(options);
        return resp.data;
    } catch (error) {
        if (isAxiosError(error)) {
            return error.response?.data;
        }
        return null;
    }
}
export const moviesControllers = {
    searchMovies,
    getMovie
};