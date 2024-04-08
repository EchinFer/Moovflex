import { InfiniteData } from "@tanstack/react-query";
import { MovieModel } from "../models/MovieModel";
import { MoviesSearchModel } from "../models/MoviesSearchModel";

/**
 * Representa una solicitud de películas para la API OMDb.
 */
export type MovieCollectionRequest = {
    /**
     * El término de búsqueda para las películas.
     */
    s: string;
    /**
     * El tipo de contenido de las películas.
     * Puede ser "movie" (película), "series" (serie) o "episode" (episodio).
     */
    type?: "movie" | "series" | "episode";
    /**
     * El año de lanzamiento de las películas.
     */
    y?: number;
    /**
     * El formato de respuesta de la API.
     * Puede ser "json" o "xml".
     */
    r?: "json" | "xml";
    /**
     * El número de página de resultados.
     */
    page?: number;
    /**
     * El nombre de la función de callback para JSONP.
     */
    callback?: string;
}

/**
 * Representa una solicitud de una película específica para la API OMDb.
 */
export type SingleMovieRequest = {
    /**
     * El ID único de la película.
     */
    i: string;
    /**
     * El título de la película a buscar.
     * Se puede usar en lugar del ID único.
     */
    t?: string;
    /**
     * El nivel de detalle deseado para la trama de la película.
     * Puede ser "short" (corta) o "full" (completa).
     */
    plot?: "short" | "full";
    /**
     * El formato de respuesta de la API.
     * Puede ser "json" o "xml".
     */
    r?: "json" | "xml";
    /**
     * El nombre de la función de callback para JSONP.
     */
    callback?: string;
}

export type MovieCollectionResponse = {
    Search: MoviesSearchModel[];
    totalResults: string;
    Response: "True" | "False";
    Error?: string;
}

export type SingleMovieResponse = MovieModel & {
    Response: "True" | "False";
    Error?: string;
}

export type InfiniteMovieData = InfiniteData<MovieCollectionResponse, number>;