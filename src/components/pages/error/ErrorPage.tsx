import { Link } from "react-router-dom";

export const ErrorPage = () => {

    return (
      <div>
        <h1>Oops! 404 Not found</h1>
        <Link to={`/`}>Go back to home page</Link>
      </div>
    );
 
}