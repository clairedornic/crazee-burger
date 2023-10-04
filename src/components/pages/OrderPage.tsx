import { Link } from "react-router-dom"
import { useLocation } from "react-router-dom";

export const OrderPage = () => {
    const location = useLocation();
    const userName = location.state.userName;

    return (
        <div>
            <h1>Bonjour {userName}</h1>
            <Link to={`/`}>Logout</Link>
        </div>
    )
}