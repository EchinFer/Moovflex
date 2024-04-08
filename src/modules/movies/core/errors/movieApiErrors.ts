export const movieCollectionApiErrors = [
    {
        error: "Movie not found!",
        status: 404,
        message: "La película no se ha encontrado"
    },
    {
        error: "Too many results.",
        status: 429,
        message: "Hubo un error al cargar las películas"
    },
    {
        error: "Invalid API key!",
        status: 401,
        message: "Hubo un error en el servidor"
    },
    {
        error: "Something went wrong.",
        status: 500,
        message: "Hubo un error desconocido"
    },
    {
        error: "Incorrect IMDb ID.",
        status: 404,
        message: "La película no se ha encontrado"
    }
];