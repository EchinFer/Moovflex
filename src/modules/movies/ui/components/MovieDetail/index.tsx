import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import NotFoundPlaceholder from '@/assets/images/not-found-placeholder.png';
import { Card, CardMedia, Chip, Stack } from '@mui/material';
import { Link, useParams } from 'react-router-dom';
import { useQuerySingleMovie } from '../../hooks/useQuerySingleMovie';
import { MovieDetailContent } from './MovieDetailContent';
import { MovieDetailSkeleton } from '../skeletons/MovieDetailSkeleton';

export const MovieDetail = () => {
    const { movieId } = useParams();
    const { data: movieData, isLoading } = useQuerySingleMovie({ id: movieId ?? "", plot: "full" });

    return (
        <>
            <Chip
                icon={<ArrowBackIcon />}
                label="Volver al listado"
                clickable
                color="primary"
                sx={{ mb: 2 }}
                component={Link}
                to={"/"}
            />

            <Card
                sx={{
                    display: "flex",
                    gap: 2,
                    flexDirection: {
                        xs: "column",
                        md: "row",
                    },
                }}
            >
                {
                    isLoading && (<MovieDetailSkeleton />)
                }
                <Stack
                    alignItems={"center"}
                >
                    <CardMedia
                        component="img"
                        src={movieData?.Poster}
                        alt={movieData?.Title}
                        sx={{
                            width: {
                                xs: "100%",
                                sm: "300px",
                                md: "300px",
                            },
                            height: "100%",
                            objectFit: "cover",
                        }}
                        onError={(e) => {
                            e.currentTarget.src = NotFoundPlaceholder
                        }}

                    />
                </Stack>
                {movieData && (
                    <MovieDetailContent movie={movieData} />
                )}
            </Card>
        </>
    )
}
