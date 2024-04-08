import NotFoundFaceImage from '@/assets/images/not-found-face.png';
import SadFaceImage from '@/assets/images/sad-face.png';
import { Box, Button, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import React, { useDeferredValue } from 'react';
import { useQueryMovieCollection } from '../hooks/useQueryMovieCollection';
import { useMovieSearchFilter, useMovieYearFilter } from '../stores/movieSearchFormStore';
import MovieCardSkeleton from './skeletons/MovieCardSkeleton';
import MovieCard from './cards/MovieCard';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

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
    const deferredValue = useDeferredValue(data);

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
                    deferredValue?.pages.map(({ Search }, i) => (
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

            </Grid>
            {
                hasNextPage && (
                    <Button
                        onClick={handleClickViewMore}
                        variant='outlined'
                        sx={{
                            mt: 2,
                            width: {
                                xs: "100%",
                                sm: "auto",
                            },
                        }}
                        disabled={isFetchingNextPage || isRefetching}
                    >
                        <ExpandMoreIcon />
                    </Button>
                )
            }
        </>
    )
}
