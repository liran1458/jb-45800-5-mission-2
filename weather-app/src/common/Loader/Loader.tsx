import "./Loader.css";
import loader from "../../assets/images/loader.gif";

function Loader() {
    return (
        <div className="Loader">
            <img src={loader} alt="Loading..." />
        </div>
    );
}

export default Loader;