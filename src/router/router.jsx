import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import { Browse, DiscoverMovie, Login, SearchPage, TvShow } from "../components";
import Layout from "../Layout";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout />}>
            <Route path="" element={<Login />} />
            <Route path="/browse" element={<Browse />} />
            <Route path="/tv" element={<TvShow />} />
            <Route path="/movie" element={<DiscoverMovie />} />
            <Route path="/search" element={<SearchPage />} />
        </Route>
    )
)

export default router;