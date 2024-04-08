import NotFoundFaceImage from '@/assets/images/not-found-face.png';
import SadFaceImage from '@/assets/images/sad-face.png';
import { Box, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { AxiosError } from 'axios';

interface MovieErrorListProps {
    error: AxiosError<unknown, any>
}
export const MovieErrorList = ({ error }: MovieErrorListProps) => {
    return (
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
                    filter: "brightness(200%)",
                    boxShadow: "0 0 10px yellow",
                    borderRadius: 1,
                    p: 3,
                }}
            >
                <img
                    src={error.code === "404" ? NotFoundFaceImage : SadFaceImage}
                    alt="Error"
                    style={{
                        filter: "invert(60%)"
                    }}
                />
                <Typography variant={"h6"} align={"center"} color={"white"}>
                    {error?.message} 😫
                </Typography>
            </Box>
        </Grid>
    )
}
