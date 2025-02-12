import { useContext } from "react";
import { AuthContext } from "../components/AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = () => {
    const {user,loading} = useContext(AuthContext)
    const location = useLocation()

    if (loading) {
        return <span className="loading loading-bars loading-md"></span>
    }
    if (user) {
        return children
    }
    return (<Navigate to={'/signIn'} state={location.pathname}></Navigate>);
};

export default PrivateRoute;