import MovieList from "@/modules/movies/ui/components/MovieList";
import { SearchMovieForm } from "@/modules/movies/ui/components/SearchMovieForm";
import { Stack } from "@mui/material";

const HomePage = () => {
    return (
        <>
            <Stack
                sx={{
                    flexGrow: 1,
                }}
            >
                <SearchMovieForm />
                <MovieList />
            </Stack>
        </>
    )
}

export default HomePage