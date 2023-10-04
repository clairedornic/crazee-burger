import { Link, isRouteErrorResponse, useRouteError } from "react-router-dom";

export const ErrorPage = () => {

    const error = useRouteError();
    if (isRouteErrorResponse(error)) {
      return (
        <div>
          <h1>Oops!</h1>
          <p>Sorry, an unexpected error has occurred.</p>
          <h2>{error.status}</h2>
          <p>{error.statusText}</p>
          {error.data?.message && <p>{error.data.message}</p>}
          <Link to={`/`}>Go back to home page</Link>
        </div>
      );
    } else {
      return <div>Oops</div>;
    }
}