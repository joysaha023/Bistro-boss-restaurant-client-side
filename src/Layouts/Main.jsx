import React from 'react';
import Footer from '../Components/Shared/Footer';
import Navbar from '../Components/Shared/Navbar';
import { Outlet, useLocation } from 'react-router-dom';

const Main = () => {
    const location = useLocation();
    const noHeaderFooter = location.pathname.includes('login')
    return (
        <div>
            { noHeaderFooter || <Navbar></Navbar>}
            <Outlet></Outlet>
            {noHeaderFooter ||  <Footer></Footer>}
        </div>
    );
};

export default Main;