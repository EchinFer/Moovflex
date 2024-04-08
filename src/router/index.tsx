import MainLayout from "@/components/layout/MainLayout";
import { createBrowserRouter } from "react-router-dom";


export const router = createBrowserRouter([
    {   
        path: "/",
        element: <MainLayout />,
        children: [
            {
                index: true,
                lazy: async () => {
                    const MovieDetailPage = await import("@/pages/home");
                    return { Component: MovieDetailPage.default };
                },
            },
            {
                path: "/:movieId",
                lazy: async () => {
                    const MovieDetailPage = await import("@/pages/movieDetails");
                    return { Component: MovieDetailPage.default };
                }
            },
            {
                path: "*",
                lazy: async () => {
                    const NotFoundPage = await import("@/pages/_not_found");
                    return { Component: NotFoundPage.default };
                },
            },
        ],
    },
], {
    basename: import.meta.env.BASE_URL,
});