import ClearIcon from '@mui/icons-material/Clear';
import { IconButton, InputAdornment, TextField } from '@mui/material';
import React from 'react';

interface SearchTextFieldProps {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    onKeyDown: (e: React.KeyboardEvent) => void;
}
export const SearchTextField = ({ value, onChange, onKeyDown }:SearchTextFieldProps) => {
    return (
        <TextField
            value={value}
            onChange={onChange}
            onKeyDown={onKeyDown}
            placeholder="¿Qué película estás buscando?"
            variant="outlined"
            size="small"
            InputProps={{
                endAdornment: (
                    <InputAdornment position="end" className='MuiTextField-clearIndicator' sx={{ visibility: "hidden" }}>
                        <IconButton
                            aria-label="clear"
                            onClick={() => {
                                onChange({ target: { value: "" } } as React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>);
                            }}
                            size='small'
                        >
                            <ClearIcon fontSize='small' />
                        </IconButton>
                    </InputAdornment>
                )
            }}
            sx={{
                "& .MuiInputBase-root:hover": {
                    "& .MuiTextField-clearIndicator": {
                        visibility: value ? "visible" : "hidden"
                    }
                },
            }}
            fullWidth
        />
    )
}
