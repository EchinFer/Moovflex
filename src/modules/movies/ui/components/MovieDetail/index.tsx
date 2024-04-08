import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Card, Chip } from '@mui/material';
import React, { Suspense } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useQuerySingleMovie } from '../../hooks/useQuerySingleMovie';
import { MovieDetailSkeleton } from '../skeletons/MovieDetailSkeleton';

const MovieDetailContent = React.lazy(async () => {
    const module = await import('./MovieDetailContent');
    return ({ default: module.MovieDetailContent });
});

const MovieDetailMedia = React.lazy(async () => {
    const module = await import('./MovieDetailMedia');
    return ({ default: module.MovieDetailMedia });
});

const MovieErrorDetail = React.lazy(async () => {
    const module = await import('./MovieErrorDetail');
    return ({ default: module.MovieErrorDetail });
});

export const MovieDetail = () => {
    const { movieId } = useParams();
    const { data: movie, isLoading, isError, error } = useQuerySingleMovie({ id: movieId ?? "", plot: "full" });

    return (
        <>
            <Chip
                icon={<ArrowBackIcon />}
                label="Volver al listado"
                clickable
                color="error"
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
                        ...(isError && {
                            justifyContent: "center",
                            alignItems: "center",
                        })
                    },
                }}
            >
                {isLoading && (<MovieDetailSkeleton />)}

                {isError && (
                    <Suspense fallback={<div>...</div>}>
                        <MovieErrorDetail error={error} />
                    </Suspense>
                )}

                <Suspense fallback={<MovieDetailSkeleton />}>
                    {movie && (
                        <>
                            <MovieDetailMedia movie={movie} />
                            <MovieDetailContent movie={movie} />
                        </>
                    )}
                </Suspense>
            </Card>
        </>
    )
}
