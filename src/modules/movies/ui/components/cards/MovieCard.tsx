import NotFoundPlaceholder from '@/assets/images/not-found-placeholder.png';
import { Card, CardHeader, Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { MoviesSearchModel } from '../../../core/models/MoviesSearchModel';
import { useQuerySingleMovie } from '../../hooks/useQuerySingleMovie';
import { RatingField } from '../fields/RatingField';
import { MovieCaptionSkeleton } from '../skeletons/MovieCaptionSkeleton';

interface MovieCardProps {
    movie: MoviesSearchModel
}
export default function MovieCard({ movie }: MovieCardProps) {
    const { data: movieData, isLoading } = useQuerySingleMovie({ id: movie.imdbID, plot: "short" })

    return (
        <Card
            component={Link}
            to={`/${movie.imdbID}`}
            elevation={10}
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                overflow: 'hidden',
                position: 'relative',
                p: 1,
                pt: 0,
                cursor: 'pointer',
                transition: 'box-shadow 0.3s ease-in-out',
                ":hover": {
                    boxShadow: "0px 0px 10px 5px #FAAF00",
                    
                }
            }}
        >
            <img
                src={movie.Poster}
                alt={movie.Title}
                style={{
                    width: '100%',
                    height: 'auto',
                    objectFit: 'cover',
                }}
                onError={(e) => {
                    e.currentTarget.src = NotFoundPlaceholder
                }}
            />
            {
                isLoading && (
                    <MovieCaptionSkeleton />
                )
            }
            {movieData && (
                <Stack spacing={"12px"}>
                    <CardHeader
                        title={movieData.Title}
                        sx={{
                            p: 1,
                            pb: 0
                        }}
                        titleTypographyProps={{
                            variant: 'h6',
                            textAlign: 'center'
                        }}
                    />
                    <RatingField
                        size='small'
                        value={movieData.imdbRating == "N/A" ? 0 : parseInt(movieData.imdbRating)}
                    />
                    <Stack
                        direction={"row"}
                        spacing={"4px"}
                        alignItems={"center"}
                        sx={{
                            p: 1,
                            pt: 0
                        }}
                    >
                        <Typography variant="body2">
                            {movieData.Plot != "N/A" && movieData.Plot}
                        </Typography>
                    </Stack>
                </Stack>
            )}

        </Card>
    )
}
