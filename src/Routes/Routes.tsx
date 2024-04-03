import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../Pages/HomePage/HomePage";
import AboutMe from "../Pages/AboutMe/AboutMe";
import Contact from "../Pages/Contact/Contact";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {path: "", element: <HomePage />},
            {path: "homePage", element: <HomePage />},
            {path: "aboutMe", element: <AboutMe />},
            {path: "Contact", element: <Contact />}
        ]
    }
])