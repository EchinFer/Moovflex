import NotFoundPlaceholder from '@/assets/images/not-found-placeholder.png';
import { MovieModel } from '@/modules/movies/core/models/MovieModel';
import { CardMedia, Stack } from '@mui/material';

interface MovieDetailMediaProps {
    movie: MovieModel;
}
export const MovieDetailMedia = ({ movie }: MovieDetailMediaProps) => {
    return (
        <Stack
            alignItems={"center"}
            justifyContent={"flex-start"}
        >
            <CardMedia
                component="img"
                src={movie?.Poster}
                alt={movie?.Title}
                sx={{
                    width: {
                        xs: "100%",
                        sm: "300px",
                        md: "300px",
                    },
                    objectFit: "cover",
                }}
                onError={(e) => {
                    e.currentTarget.src = NotFoundPlaceholder
                }}

            />
        </Stack>
    )
}
