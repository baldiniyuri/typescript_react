import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home/home";
import Login from "../Pages/Login/login"
import Register from "Pages/Register/register";

const PageRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
        </Routes>
    );
}

export default PageRoutes;