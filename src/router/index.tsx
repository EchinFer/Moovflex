import MainLayout from "@/components/layout/MainLayout";
import NotFoundPage from "@/pages/_not_found";
import HomePage from "@/pages/home";
import MovieDetailPage from "@/pages/movieDetails";
import { createBrowserRouter } from "react-router-dom";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: "/:movieId",
                element: <MovieDetailPage />,
            },
            {
                path: "*",
                element: <NotFoundPage />,
            },
        ],
    },
]);