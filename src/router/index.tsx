import MainLayout from "@/components/layout/MainLayout";
import NotFoundPage from "@/pages/_not_found";
import HomePage from "@/pages/home";
import { MovieDetailPage } from "@/pages/movieDetails";
import { createBrowserRouter } from "react-router-dom";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                index: true,
                Component: HomePage,
            },
            {
                path: "/:movieId",
                Component: MovieDetailPage,
            },
            {
                path: "*",
                Component: NotFoundPage,
            },
        ],
    },
]);