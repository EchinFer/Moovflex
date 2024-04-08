import NotFoundFaceImage from '@/assets/images/not-found-face.png';
import SadFaceImage from '@/assets/images/sad-face.png';
import { Box, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { MovieCard } from '../components/MovieCard';
import { MovieCardSkeleton } from '../components/skeletons/MovieCardSkeleton';
import { useQueryMovieCollection } from '../hooks/useQueryMovieCollection';
import { useMovieSearchFilter, useMovieYearFilter } from '../stores/movieSearchForm';
import { useInView } from 'react-intersection-observer';
import React, { useEffect } from 'react';

export const MovieList = () => {
    const searchQuery = useMovieSearchFilter();
    const year = useMovieYearFilter();
    const { ref, inView } = useInView({
        delay: 400,
    });

    const {
        data,
        error,
        isError,
        fetchNextPage,
        hasNextPage,
        isRefetching,
        isFetchingNextPage,
        isLoading,
    } = useQueryMovieCollection({ searchQuery, year });

    const numSkeleton = 4;

    useEffect(() => {
        if (inView
            && hasNextPage
            && !isRefetching
            && !isFetchingNextPage
            && !isLoading
        ) {
            fetchNextPage();
        }
    }, [inView, hasNextPage])

    const hasData = data?.pages ? data.pages.length > 0 : false;
    return (
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
                isRefetching && (
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
                                <MovieCard movie={movie} />
                            </Grid>
                        ))}
                    </React.Fragment>
                ))
            }

            {
                isError && error && (
                    <Grid
                        xs={12}
                        display={"flex"}
                        justifyContent={"center"}
                        alignItems={"center"}
                    >
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                gap: 2,
                            }}
                        >
                            <img
                                src={error.code === "404" ? NotFoundFaceImage : SadFaceImage}
                                alt="Error"
                            />
                            <Typography variant={"h6"} align={"center"}>
                                {error?.message}
                            </Typography>
                        </Box>
                    </Grid>
                )
            }

            {
                hasData && (
                    <div ref={ref}></div>
                )
            }
        </Grid>
    )
}
