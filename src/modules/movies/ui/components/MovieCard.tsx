import { Box, Card, CardHeader, Chip, Rating, Stack, Typography } from '@mui/material'
import { MoviesSearchModel } from '../../core/models/MoviesSearchModel'
import { useQuerySingleMovie } from '../hooks/useQuerySingleMovie'
import StarIcon from '@mui/icons-material/Star';

interface MovieCardProps {
    movie: MoviesSearchModel
}
export const MovieCard = ({ movie }: MovieCardProps) => {
    const { data: movieData, isLoading } = useQuerySingleMovie({ id: movie.imdbID, plot: "short" }) 

    return (
        <Card
            elevation={1}
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                overflow: 'hidden',
                height: '100%',
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
                <Stack>
                    <CardHeader
                        title={movieData.Title}
                        sx={{
                            p: 1,
                            pb: 0
                        }}
                        titleTypographyProps={{
                            variant: 'h6',
                        }}
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
                        <StarIcon
                            color="warning"
                            sx={{
                                fontSize: 16
                            }}
                        />
                        <Typography variant="body2">
                            {movieData.imdbRating}/10
                        </Typography>
                    </Stack>
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
