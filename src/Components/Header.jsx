
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import React, { useContext, useEffect, useState } from 'react';

const Header = () => {
    const { user, logout } = useContext(AuthContext);

    const [isDarkMode, setIsDarkMode] = useState(false);

    // Check the stored theme in localStorage on mount and set it
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            setIsDarkMode(savedTheme === 'dark');
        }
    }, []); // Runs only on mount
    
    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [isDarkMode]);// This runs whenever isDarkMode changes

    // Toggle theme
    const toggleTheme = () => {
        setIsDarkMode((prevMode) => {
            const newMode = !prevMode;
            localStorage.setItem('theme', newMode ? 'dark' : 'light');
            console.log('Dark Mode: ', newMode);  // Debugging
            return newMode;
        });
    };
    

    const links = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/allCampaign">All Campaign</NavLink></li>
        <li><NavLink to="/newCampaign">Add New Campaign</NavLink></li>
        <li><NavLink to="/Campaign">My  Campaign</NavLink></li>
        <li><NavLink to="/donation">My Donations</NavLink></li>

    </>
    const handleLogout = () => {
        logout()
            .then(() => console.log('User logged out'))
            .catch(err => console.error(err));
    };

    return (
        <div className="navbar bg-base-100 dark:bg-gray-900">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <img className='w-50 h-40' src="https://i.ibb.co.com/Hhtj8tF/download-7.png" alt="" />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-orange-400">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                {user ? (
                    <div className="flex items-center space-x-4">
                        {user.photoURL && (
                            <div className="tooltip" data-tip={user.displayName || 'No Name'}>
                                <img
                                    src={user.photoURL}
                                    alt="User Avatar"
                                    className="w-10 h-10 rounded-full"
                                />
                            </div>
                        )}
                        <button onClick={handleLogout} className="btn bg-orange-400">Logout</button>
                    </div>
                ) : (
                    <>
                        <Link to='/login'><button className="btn mr-2 bg-orange-400">Login</button></Link>
                        <Link to='/register'><button className="btn bg-orange-400">Register</button></Link>
                    </>
                )}
                <button onClick={toggleTheme} className="btn bg-orange-400">
                    {isDarkMode ? 'Light Mode' : 'Dark Mode'}
                </button>
            </div>
        </div>
    );
};

export default Header;