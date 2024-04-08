import { baseApi } from "@/api"
import { SingleMovieResponse, MovieCollectionRequest, MovieCollectionResponse, SingleMovieRequest } from "../core/types/services"

const searchMovies = async (request: MovieCollectionRequest) => {
    return await baseApi.get<MovieCollectionResponse>("", {
        params: request
    })
}

const getMovie = async (request: SingleMovieRequest) => {
    return await baseApi.get<SingleMovieResponse>("", {
        params: request
    })
}

export const moviesServices = {
    searchMovies,
    getMovie
}