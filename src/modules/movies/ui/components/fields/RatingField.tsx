import { Box, Rating, Typography } from '@mui/material';

interface RatingFieldProps {
    value: number;
    size?: "small" | "medium";
}
export const RatingField = ({ value, size = "medium" }: RatingFieldProps) => {
    
    const rating = value / 2;
    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: 1,
            }}
        >
            <Rating
                value={rating}
                size={size}
                precision={0.1}
                // max={10}
                readOnly
            />
            <Typography 
                fontWeight={"bold"}
                variant={"body1"}
                sx={{
                    fontSize: size === "small" ? "0.8rem" : "1rem",
                }}
            >
                {value}/10
            </Typography>

        </Box>
    )
}
