import { MovieModel } from '@/modules/movies/core/models/MovieModel';
import { CardContent, Chip, Divider, Stack, Typography } from '@mui/material';
import { RatingField } from '../fields/RatingField';
import { MetadataCardContainer } from './MetadataCardContainer';

interface MovieDetailContentProps {
    movie: MovieModel;
}
export const MovieDetailContent = ({ movie }: MovieDetailContentProps) => {
    return (
        <CardContent
            sx={{
                display: "flex",
                gap: 2,
                flexDirection: "column",
            }}
        >
            <Typography variant={"h3"}>
                {movie.Title}
            </Typography>

            <Stack direction={"row"} spacing={1}>
                {
                    movie.Genre.split(",").map((genre, index) => (
                        <Chip key={index} label={genre.trim()} color="info" />
                    ))
                }
            </Stack>

            <Typography variant={"body1"}>
                {movie.Plot != "N/A" && movie.Plot}
            </Typography>

            <Divider flexItem />
            <MetadataCardContainer movie={movie} />

            <Divider flexItem />
            <RatingField
                value={movie.imdbRating == "N/A" ? 0 : parseInt(movie.imdbRating)}
            />
        </CardContent>
    )
}
