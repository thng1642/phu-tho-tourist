import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../pages/Layout";
import Home from "../pages/Home";
import Feed from "../pages/Feed";
import Docs from "../pages/Docs";
import Hiring from "../pages/Hiring";
import DetailsHiring from "../pages/DetailsHiring";
import DetailsFeed from "../pages/DetailsFeed";

export default function AppRouter() {

    return(
        <BrowserRouter>
            <Routes>
                <Route path="*" element={<Home />} />
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />}/>
                    <Route path="feeds" element={<Feed />} />
                    <Route path="feeds/:id" element={<DetailsFeed />} />
                    <Route path="docs" element={<Docs />} />
                    <Route path="tuyendung" element={<Hiring />} />
                    <Route path="tuyendung/:id" element={<DetailsHiring />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}