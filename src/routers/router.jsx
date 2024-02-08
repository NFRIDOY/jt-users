import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import MainLayout from "../layouts/MainLayout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <div> Error </div>,
        children: [
            {
                path: "/",
                element: <App />,
                errorElement: <div> Error </div>,
            },
        ]
    },
]);

export default router;
