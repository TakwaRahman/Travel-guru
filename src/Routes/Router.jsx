import { createBrowserRouter } from "react-router-dom";
import HomeLayouts from "../HomeLayouts/HomeLayouts";
import Home from "../component/Home/Home";
import Booking from "../component/Booking/Booking";
import Login from "../component/Login/Login";


const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayouts />,
        children: [
            {
                path: "",
                element: <Home />,
                loader: () => fetch("/travel.json")
            },
            {

                path: "/booking/:place",
                element: <Booking />,
                loader: () => fetch('/resote.json')

            },
            {
                path: "/login",
                element: <Login></Login>
            }
        ]
    },

]);

export default router;