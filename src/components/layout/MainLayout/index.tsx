import { Container } from "@mui/material";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
    return (
        <Container
            sx={{
                minHeight: "100vh",
                p: 2,
                display: "flex",
                flexDirection: "column",
            }}
        >
            <Outlet />
        </Container>
    );
}