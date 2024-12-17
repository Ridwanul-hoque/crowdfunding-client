import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Outlet, useNavigation } from 'react-router-dom';
import Loading from './Loading';

const Layout = () => {
    const navigation = useNavigation(); // React Router navigation state

    return (
        <div className="max-w-6xl mx-auto">
            <Header />

            {/* Display Loading component if route is loading */}
            {navigation.state === 'loading' ? <Loading /> : <Outlet />}

            <Footer />
        </div>
    );
};

export default Layout;
