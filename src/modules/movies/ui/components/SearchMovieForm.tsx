import SearchIcon from '@mui/icons-material/Search';
import { Button, Paper, Stack } from '@mui/material';
import dayjs, { Dayjs } from 'dayjs';
import { useState } from 'react';
import { useMovieSearchFilter, useMovieSetFilter, useMovieYearFilter } from '../stores/movieSearchFormStore';
import { SearchTextField } from './inputs/SearchTextField';
import { SearchYearField } from './inputs/SearchYearField';

export const SearchMovieForm = () => {
    const setFilter = useMovieSetFilter();
    const searchQuery = useMovieSearchFilter();
    const year = useMovieYearFilter();
    const currentYear = year ? dayjs().year(year) : null;

    const [searchValue, setSearchValue] = useState<string>(searchQuery);
    const [yearValue, setYearValue] = useState<Dayjs | null>(currentYear);


    const handleChangeSearch = ({ target: { value } }: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setSearchValue(value)
    }

    const handleChangeYear = (date: Dayjs | null) => {
        setYearValue(date);
    }

    const handleClickSearch = () => {
        setFilter(searchValue, yearValue?.year());
    }

    const handleClickDown = ({ key }: React.KeyboardEvent) => {
        if (key === "Enter") {
            handleClickSearch();
        }
    }

    return (
        <Stack
            component={Paper}
            direction={{
                xs: "column",
                sm: "row",
            }}
            elevation={3}
            sx={{
                padding: 2,
                marginBottom: 2
            }}
            spacing={{ xs: 1, sm: 2, md: 3 }}
        >
            <SearchTextField
                value={searchValue}
                onChange={handleChangeSearch}
                onKeyDown={handleClickDown}
            />

            <Stack
                direction={"row"}
                sx={{ ml: "auto", }}
                justifyContent={{
                    xs: "space-between",
                    sm: "inherit",
                }}
                spacing={{ xs: 0, sm: 0, md: 1 }}

            >
                <SearchYearField
                    value={yearValue}
                    onChange={handleChangeYear}
                />

                <Button
                    variant="contained"
                    color="error"
                    size="small"
                    startIcon={<SearchIcon />}
                    onClick={handleClickSearch}
                >
                    Buscar
                </Button>
            </Stack>
        </Stack>
    )
}