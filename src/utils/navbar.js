import Home from "../components/Home/Home";
import Kurslar from "../pages/Kurslar";
import Blogs from "../pages/Blogs";
import Contacts from "../pages/Contacts";
export const navbar = [
    {
        id:1,
        title: "Home",
        path: "/",
        Element: Home,
    },
    {
        id:2,
        title: "Courses",
        path: "/courses",
        Element: Kurslar,
    },
    {
        id:3,
        title: "Page",
        path: "/page",
        Element: Home,
    },
    {
        id:4,
        title: "Blog",
        path: "/blog",
        Element: Blogs,
    },
    {
        id:5,
        title: "Contact",
        path: "/contact",
        Element: Contacts,
    }
]