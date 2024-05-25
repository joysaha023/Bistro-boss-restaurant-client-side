import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';

const PrivateRoute = ({children}) => {
 const {user, loading} = useAuth()
 const location = useLocation();

 if(loading){
    return <div>Loading....</div>
 }

 if(user) {
    return children;
 }
 return <Navigate to="/login" state={{form: location}}></Navigate>

   
};

export default PrivateRoute;