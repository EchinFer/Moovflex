import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Chip } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import React, { Suspense } from 'react';
import { useQueryMovieCollection } from '../../hooks/useQueryMovieCollection';
import { useMovieSearchFilter, useMovieYearFilter } from '../../stores/movieSearchFormStore';

import MovieCardSkeleton from '../skeletons/MovieCardSkeleton';
import { MovieErrorList } from './MovieErrorList';

const MovieCard = React.lazy(() => import('../cards/MovieCard'));

export default function MovieList() {
    const searchQuery = useMovieSearchFilter();
    const year = useMovieYearFilter();

    const {
        data,
        error,
        isError,
        fetchNextPage,
        hasNextPage,
        isRefetching,
        isFetchingNextPage,
        isFetching,
    } = useQueryMovieCollection({ searchQuery, year });

    const handleClickViewMore = () => {
        if (hasNextPage) {
            fetchNextPage();
        }
    };

    const numSkeleton = 4;
    return (
        <>
            <Grid
                container
                rowSpacing={{ xs: 3, sm: 3, md: 3 }}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                alignItems={"stretch"}
                sx={{
                    flex: 1,
                }}
            >
                {
                    isFetching && (
                        Array.from({ length: numSkeleton }).map((_, index) => (
                            <Grid
                                key={index}
                                xs={12}
                                sm={6}
                                md={4}
                                lg={3}
                                xl={3}
                            >
                                <MovieCardSkeleton />
                            </Grid>
                        ))
                    )
                }

                {
                    data?.pages.map(({ Search }, i) => (
                        <React.Fragment key={i}>
                            {Search.map((movie) => (
                                <Grid
                                    key={movie.imdbID}
                                    xs={12}
                                    sm={6}
                                    md={4}
                                    lg={3}
                                    xl={3}
                                >
                                    <Suspense fallback={<MovieCardSkeleton />}>
                                        <MovieCard movie={movie} />
                                    </Suspense>
                                </Grid>
                            ))}
                        </React.Fragment>
                    ))
                }

                {
                    isError && error && (
                        <MovieErrorList error={error} />
                    )
                }

            </Grid>
            {
                hasNextPage && (
                    <Chip
                        label="Cargar más"
                        icon={<ExpandMoreIcon />}
                        onClick={handleClickViewMore}
                        sx={{
                            mt: 2,
                            width: {
                                xs: "100%",
                                sm: "auto",
                            },
                        }}
                        disabled={isFetchingNextPage || isRefetching}
                        color="error"
                        clickable
                    />
                )
            }
        </>
    )
}
