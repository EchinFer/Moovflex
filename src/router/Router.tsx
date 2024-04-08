import { RouterProvider } from "react-router-dom";
import { router } from ".";

const Router = () => {
    return (
        <RouterProvider router={router} />
    )
}

export default Router