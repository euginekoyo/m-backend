// context/authContext.js
import React, { createContext, useState, useContext } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);

    const login = async (email, password) => {
        try {
            const response = await axios.post('http://localhost:5000/api/auth/login', { email, password });
            if (response.data.isAuthenticated) {
                setIsAuthenticated(true);
                setIsAdmin(response.data.isAdmin);
            }
        } catch (error) {
            console.error('Login failed:', error);
            setIsAuthenticated(false);
            setIsAdmin(false);
        }
    };

    const logout = async () => {
        try {
            await axios.post('http://localhost:5000/api/auth/logout');
            setIsAuthenticated(false);
            setIsAdmin(false);
        } catch (error) {
            console.error('Logout failed:', error);
        }
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, isAdmin, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
