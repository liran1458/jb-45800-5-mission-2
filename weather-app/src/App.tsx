import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Layout from "./components/layout/Layout/Layout";

export default function App() {
    return (
        <BrowserRouter>
            <Layout />
        </BrowserRouter>
    );
}