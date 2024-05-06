import { useRouteError, Link } from "react-router-dom";
import ErrorImage from "../assets/ErrorImage.jpeg";

const Error = () => {
    const err = useRouteError();
    console.log(err);
    return (
        <div className="error-page">
            <img src={ErrorImage} alt="Error Image" />
            <h1>Oops! The restaurant you're looking for can't be found.</h1>
            <h3 className="error-data">{err.data}</h3>
            <h3 className="error-back-home">
                <Link to="/">Back Home</Link>
            </h3>
    </div>
    );
};

export default Error;