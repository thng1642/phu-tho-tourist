import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../pages/Layout";
import Home from "../pages/Home";
import Feed from "../pages/Feed";

export default function AppRouter() {

    return(
        <BrowserRouter>
            <Routes>
                <Route path="*" element={<Home />} />
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />}/>
                    <Route path="feeds" element={<Feed />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}