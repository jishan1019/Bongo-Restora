// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <div className="navbar bg-base-100 ">
                <div className="flex-1">
                    <a className="btn btn-ghost normal-case text-2xl text-red-700">Bongo Restora</a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">

                        <li className='toggle_none' tabIndex={0}>
                            <a>
                                Menu
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                            </a>
                            <ul className="p-2 bg-base-100 items-center justify-center">
                                <li className='text-red-700'>Profile</li>
                                <li className='text-red-700'><Link to='/'>Home</Link></li>
                                <li className='text-red-700'><Link to='/blog'>Blog</Link></li>
                                <li className='text-red-700'><Link to='/login'>Login</Link></li>
                                <li className='text-red-700'><Link to='/regestation'>Regestation</Link></li>
                            </ul>
                        </li>


                        <div className='list-none flex items-center mr-8'>
                            <NavLink
                                to='/'
                                aria-label='Home'
                                title='Home'
                                className={({ isActive }) => (isActive ? 'active font-bold text-red-700' : 'mr-4 ml-4 font-bold text-red-700')}
                            >Home
                            </NavLink>

                            <NavLink
                                to='/blog'
                                aria-label='Blog'
                                title='Blog'
                                className={({ isActive }) => (isActive ? 'active font-bold text-red-700' : 'mr-4 ml-4 font-bold text-red-700')}
                            >Blog
                            </NavLink>

                            <NavLink
                                to='/login'
                                aria-label='Login'
                                title='Login'
                                className={({ isActive }) => (isActive ? 'active font-bold text-red-700' : 'mr-4 ml-4 font-bold text-red-700')}
                            >Login
                            </NavLink>

                            <NavLink
                                to='/regestation'
                                aria-label='Regestation'
                                title='Regestation'
                                className={({ isActive }) => (isActive ? 'active font-bold text-red-700' : 'mr-4 ml-4 font-bold text-red-700')}
                            >Regestation
                            </NavLink>
                        </div>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Header;