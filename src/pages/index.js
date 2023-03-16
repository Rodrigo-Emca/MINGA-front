import IndexLayout from "../layouts/IndexLayout/IndexLayout";
import MainLayout from "../layouts/MainLayout/MainLayout";
import Index from "./Index/Index";
import Register from "./Register/Register";
import SignIn from "./SignIn/SignIn";
import NotFound from "./NotFound/NotFound";
import FormMangaPage from "./FormMangaPage/FormMangaPage"
import ChapterForm from "./FormChapter/FormChapter";
import AuthorForm from "./AuthorForm/AuthorForm";
import Pagina from "./Pagina/Pagina";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
    {path: "/", 
    element: <IndexLayout/>,
    children: [
        {path: "/", element: <Index/>},
        {path: "/*", element: <NotFound/>}
    ]
},
    {path: "/", 
    element: <MainLayout/>,
    children: [
        {path: "/signup", element: <Register/>},
        {path: "/signin", element: <SignIn/>},
        {path: "/mangas", element: <FormMangaPage/>},
        {path: "/authors", element: <AuthorForm/>},
        {path: "/chapter-form/:manga_id", element: <ChapterForm />},
        {path: "/chapters/:id/:page", element: <Pagina/>},
        {path: "/*", element: <NotFound/>}
    ]
},
])