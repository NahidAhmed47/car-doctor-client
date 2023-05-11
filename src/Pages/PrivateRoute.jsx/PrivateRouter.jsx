import React, { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProviders';
import { Navigate } from 'react-router-dom';

const PrivateRouter = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    if(loading){
        return <div>Loading...</div>
    }
    if(user){
        return children;
    }
    return (
        <Navigate to="/login" replace></Navigate>
    );
};

export default PrivateRouter;