import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import MainLayout from "../layouts/MainLayout";
import UserDetails from "../components/UserDetails/UserDetails";
import UsersContainer from "../pages/UsersContainer/UsersContainer";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <div> Error </div>,
        children: [
            {
                path: "/",
                element: <UsersContainer />,
                loader: () => fetch("https://dummyjson.com/users"),
                errorElement: <div> Error </div>,
            },
            {
                path: "/UserDetails/:id",
                element: <UserDetails />,
                loader: ({params}) => fetch(`https://dummyjson.com/users/${params.id}`),
                // errorElement: <div> Error </div>,
            },

        ]
    },
]);

export default router;
