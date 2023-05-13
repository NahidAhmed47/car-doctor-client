import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProviders';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';

const PrivateRoutes = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    if(loading){
        return <h1>Loading...</h1>
    }
    if(user){
        return children;
    }
    return (
        <Navigate state={{from: location}} to="/login"></Navigate>
    );
};

export default PrivateRoutes;