import SadFaceImage from "@/assets/images/sad-face.png";
import { Box, Chip, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 1
            }}
        >
            <img
                src={SadFaceImage}
                alt="404"
                style={{
                    filter: "invert(60%)"
                }}
            />
            <Typography variant="h1" color={"white"}>404</Typography>
            <Typography variant="h2" color={"white"}>Page not found</Typography>
            <Chip
                color="error"
                label="Go back to home"
                component={Link}
                to="/"
                clickable
            />

        </Box>
    )
}

export default NotFoundPage