import Grid from '@mui/material/Unstable_Grid2';
import React, { PropsWithChildren } from 'react';

export const MetadataCardRow: React.FC<PropsWithChildren> = ({ children }) => {
    return (
        <Grid container xs={12} columnSpacing={1}>
            {children}
        </Grid>
    )
}
