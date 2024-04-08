import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Card, CardMedia, Chip, Stack } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { useQuerySingleMovie } from '../../hooks/useQuerySingleMovie';
import { MovieDetailContent } from './MovieDetailContent';

export const MovieDetail = () => {
    const { movieId } = useParams();
    const { data: movieData } = useQuerySingleMovie({ id: movieId ?? "", plot: "full" });
    const navigate = useNavigate();

    return (
        <>
            <Chip
                icon={<ArrowBackIcon />}
                label="Volver al listado"
                clickable
                color="primary"
                sx={{ mb: 2 }}
                onClick={() => navigate("/")}
            />
            <Card
                sx={{
                    display: "flex",
                    gap: 2,
                    height: "100%",
                }}
            >
                <Stack>
                    <CardMedia
                        component="img"
                        src={movieData?.Poster}
                        alt={movieData?.Title}
                        sx={{
                            width: 300,
                            height: "100%",
                            objectFit: "cover",
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
