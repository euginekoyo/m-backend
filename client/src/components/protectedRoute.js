// src/components/ProtectedRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/authContext';
import LoadingSkeleton from './auth/loading';
const ProtectedRoute = ({ children }) => {
    const { isAuthenticated, isLoading } = useAuth();
    if (isLoading) {
        return <LoadingSkeleton />;
    }
    if (!isAuthenticated) {
        console.log(isAuthenticated)
        return <Navigate to="/login" />;
    }

    return children;
};

export default ProtectedRoute;
