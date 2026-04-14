import "./Main.css";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../../Home/Home";
import History from "../../History/History";
import About from "../../About/About";
import NotFound from "../../NotFound/NotFound";

function Main() {
    return (
        <div className="Main">
            <Routes>
                <Route path="/" element={<Navigate to="/home" />} />
                <Route path="/home" element={<Home />} />
                <Route path="/history" element={<History />} />
                <Route path="/about" element={<About />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    );
}

export default Main;