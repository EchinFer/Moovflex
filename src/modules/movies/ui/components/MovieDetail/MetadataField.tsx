import { Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';

interface MetadataFieldProps {
    label: string;
    value: string;
}
export const MetadataField = ({ label, value }: MetadataFieldProps) => {
    return (
        <Grid 
            xs={12}
            sm={12}
            md={6}
            display={"flex"}
            alignItems={"center"}
            gap={1}
        >
            <Typography variant={"subtitle1"}>
                {label}:
            </Typography>
            <Typography variant={"body2"}>
                {value}
            </Typography>
        </Grid>
    )
}
