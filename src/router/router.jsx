import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import { Browse, Login } from "../components";
import Layout from "../Layout";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout />}>
            <Route path="" element={<Login />} />
            <Route path="/browse" element={<Browse />} />
        </Route>
    )
)

export default router;