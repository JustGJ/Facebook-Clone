import React from 'react';
import { Navigate } from 'react-router-dom';
import Header from '../../layouts/Navbar';

interface IProps {
    children: React.JSX.Element;
}
const PrivateRoute = ({ children }:IProps) => {
    const isAuth = true;

    if (!isAuth) {
        return <Navigate to="/login" />
    }
    return (
        <>
            <Header />
            <main>
                {children}
            </main>
        </>
    )
}

export default PrivateRoute