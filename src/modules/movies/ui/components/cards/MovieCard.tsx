import StarIcon from '@mui/icons-material/Star';
import { Card, CardHeader, Stack, Typography } from '@mui/material';
import { MoviesSearchModel } from '../../../core/models/MoviesSearchModel';
import { useQuerySingleMovie } from '../../hooks/useQuerySingleMovie';
import { RatingField } from '../fields/RatingField';
import { Link } from 'react-router-dom';

interface MovieCardProps {
    movie: MoviesSearchModel
}
export const MovieCard = ({ movie }: MovieCardProps) => {
    const { data: movieData, isLoading } = useQuerySingleMovie({ id: movie.imdbID, plot: "short" })

    return (
        <Card
            component={Link}
            to={`/${movie.imdbID}`}
            elevation={1}
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                overflow: 'hidden',
                position: 'relative',
                p: 1,
                pt: 0,
                ":hover": {
                    cursor: 'pointer',
                    boxShadow: 6,
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
            />
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
                    <RatingField size='small' value={parseInt(movieData.imdbRating)} />
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
                            {movieData.Plot}
                        </Typography>
                    </Stack>


                </Stack>
            )}

        </Card>
    )
}
