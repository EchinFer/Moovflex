import NotFoundFaceImage from '@/assets/images/not-found-face.png';
import SadFaceImage from '@/assets/images/sad-face.png';
import { Box, Typography } from "@mui/material";
import { AxiosError } from "axios";

interface MovieErrorDetailProps {
    error: AxiosError<unknown, any>
}
export const MovieErrorDetail = ({ error }: MovieErrorDetailProps) => {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 2,
                p: 3,
            }}
        >
            <img
                src={error.code === "404" ? NotFoundFaceImage : SadFaceImage}
                alt="Error"
            />
            <Typography variant={"h6"} align={"center"}>
                {error?.message} 😫
            </Typography>
        </Box>
    )
}
