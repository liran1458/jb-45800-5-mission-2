import { Navigate, Route, Routes } from "react-router-dom";
import NotFound from "../NotFound/NotFound";

function Main() {
    return (
        <Routes>
            {/* redirect מהדף הראשי */}
            <Route path="/" element={<Navigate to="/home" />} />

            {/* דף בית זמני */}
            <Route path="/home" element={<h2>Home</h2>} />

            {/* 404 */}
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

export default Main;