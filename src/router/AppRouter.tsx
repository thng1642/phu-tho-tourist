import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../pages/Layout";
import Home from "../pages/Home";
import Feed from "../pages/Feed";
import Docs from "../pages/Docs";

export default function AppRouter() {

    return(
        <BrowserRouter>
            <Routes>
                <Route path="*" element={<Home />} />
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />}/>
                    <Route path="feeds" element={<Feed />} />
                    <Route path="docs" element={<Docs />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}