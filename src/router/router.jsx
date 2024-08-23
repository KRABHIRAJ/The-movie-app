import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import { Browse, DiscoverMovie, Login, ProtectedRoute, SearchPage, TvShow } from "../components";
import Layout from "../Layout";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout />}>
            <Route path="" element={<Login />} />
            <Route element={<ProtectedRoute />}> 
                <Route path="/browse" element={<Browse />} />
                <Route path="/tv" element={<TvShow />} />
                <Route path="/movie" element={<DiscoverMovie />} />
                <Route path="/search" element={<SearchPage />} />
            </Route>
        </Route>
    )
)

export default router;