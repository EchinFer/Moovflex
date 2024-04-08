import SearchIcon from '@mui/icons-material/Search';
import { Button, Paper, Stack } from '@mui/material';
import { useState } from 'react';
import { useMovieSetFilter } from '../stores/movieSearchForm';
import { SearchTextField } from './inputs/SearchTextField';

export const SearchMovieForm = () => {
    const [searchQuery, setSearchQuery] = useState<string>("");

    const setFilter = useMovieSetFilter();

    const handleChangeSearch = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setSearchQuery(e.target.value);
    }

    const handleClickSearch = () => {
        setFilter(searchQuery);
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
                value={searchQuery}
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