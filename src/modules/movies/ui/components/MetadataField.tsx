import { Typography } from '@mui/material';

interface MetadataFieldProps {
    label: string;
    value: string;
}
export const MetadataField = ({ label, value }: MetadataFieldProps) => {
    return (
        <>
            <Typography variant={"subtitle1"}>
                {label}:
            </Typography>
            <Typography variant={"body1"}>
                {value}
            </Typography>
        </>
    )
}
