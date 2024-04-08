import { Card, CardContent, CardMedia, Chip, Divider, Stack, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useQuerySingleMovie } from '../hooks/useQuerySingleMovie';
import { MetadataCardContainer } from './MetadataCardContainer';

export const MovieDetail = () => {
    const { movieId } = useParams();

    const { data: movieData, isLoading } = useQuerySingleMovie({ id: movieId ?? "", plot: "full" });


    return (
        <Card
            sx={{
                display: "flex",
                gap: 2,
            }}
        >
            <Stack>
            <CardMedia
                component="img"
                src={movieData?.Poster}
                alt={movieData?.Title}
                sx={{
                    width: 300,
                }}

            />
            </Stack>
            {movieData && (
                <CardContent component={Stack} spacing={2}>
                    <Typography variant={"h3"}>
                        {movieData.Title}
                    </Typography>

                    <Stack direction={"row"} spacing={1}>
                        {
                            movieData.Genre.split(",").map((genre, index) => (
                                <Chip key={index} label={genre.trim()} color="info" />
                            ))
                        }
                    </Stack>

                    <Typography variant={"body1"}>
                        {movieData.Plot}
                    </Typography>
                    <Divider />
                    <MetadataCardContainer movie={movieData} />
                </CardContent>
            )}
        </Card>
    )
}
