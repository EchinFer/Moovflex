import SearchIcon from '@mui/icons-material/Search';
import { Button, Paper, Stack, TextField } from '@mui/material';
import { useState } from 'react';
import { useMovieSearchFilter, useMovieSetFilter, useMovieYearFilter } from '../stores/movieSearchFormStore';
import { SearchTextField } from './inputs/SearchTextField';
import { DatePickerField } from '@/components/ui/inputs/date/DatePicker';
import dayjs, { Dayjs } from 'dayjs';

export const SearchMovieForm = () => {
    const setFilter = useMovieSetFilter();
    const searchQuery = useMovieSearchFilter();
    const year = useMovieYearFilter();

    const [searchValue, setSearchValue] = useState<string>(searchQuery);
    const [yearValue, setYearValue] = useState<Dayjs | null>();


    const handleChangeSearch = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setSearchValue(e.target.value);
    }

    const handleChangeYear = (date: Dayjs | null) => {
        setYearValue(date);
    }

    const handleClickSearch = () => {
        setFilter(searchValue, yearValue?.year());
    }

    const handleClickDown = (e: React.KeyboardEvent) => {
        if (e.key === "Enter") {
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
                <DatePickerField
                    slotProps={{
                        textField: {
                            size: "small",
                            sx: {
                                width: 135
                            },
                        },
                        field: {
                            clearable: true,
                            onClear: () => setYearValue(null),
                        }
                    }}
                    views={['year']}
                    value={yearValue}
                    onChange={handleChangeYear}
                />
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