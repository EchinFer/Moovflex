import SearchIcon from '@mui/icons-material/Search';
import { Button, Paper, Stack } from '@mui/material';
import { useState, useTransition } from 'react';
import { useMovieSearchFilter, useMovieSetFilter, useMovieYearFilter } from '../stores/movieSearchFormStore';
import { SearchTextField } from './inputs/SearchTextField';

export const SearchMovieForm = () => {
    const setFilter = useMovieSetFilter();
    const searchQuery = useMovieSearchFilter();
    const year = useMovieYearFilter();

    const [searchValue, setSearchValue] = useState<string>(searchQuery);
    const [pending, startTransition] = useTransition();


    const handleChangeSearch = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setSearchValue(e.target.value);
    }

    const handleClickSearch = () => {
        startTransition(() => {
            setFilter(searchQuery);
        });
    }

    const handleClickDown = (e: React.KeyboardEvent) => {
        if (e.key === "Enter") {
            handleClickSearch();
        }
    }

    return (
        <Stack
            component={Paper}
            direction={"row"}
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

            <Stack direction={"row"} sx={{ ml: "auto" }}>
                <Button
                    variant="contained"
                    color="primary"
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