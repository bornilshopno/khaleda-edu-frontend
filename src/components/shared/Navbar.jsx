import React from 'react';
import useAuth from '../hooks/useAuth';
import { Link } from 'react-router';
import { RiMenuFold2Fill } from 'react-icons/ri';
import { BsCart3 } from 'react-icons/bs';

const Navbar = () => {
    const { user, logOut } = useAuth();
    const links = <>
        <li> <Link to={'/'}>Home</Link></li>
        <li> <Link to={'/blogs'}>Blogs</Link></li>
        <li> <Link to={'/resources'}>Resources</Link></li>

    </>
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="flex-1">
                    <a className="text-xl flex items-center gap-3"> <img src="/src/assets/K.png" alt="logo" className='w-10 rounded-3xl' />KEH</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                       <RiMenuFold2Fill className='text-2xl' />
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">

                        {links}
                    </ul>
                </div>
                {user ?
                    <><div className="flex-none">
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                                <div className="indicator">
                                    <BsCart3 className='text-2xl'/>
                                    <span className="badge badge-sm indicator-item">8</span>
                                </div>
                            </div>
                            <div
                                tabIndex={0}
                                className="card card-compact dropdown-content bg-base-100 z-1 mt-3 w-52 shadow">
                                <div className="card-body">
                                    <span className="text-lg font-bold">8 Items</span>
                                    <span className="text-info">Subtotal: $999</span>
                                    <div className="card-actions">
                                        <button className="btn btn-primary btn-block">View cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img
                                        alt="Tailwind CSS Navbar component"
                                        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                                </div>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                                <li>
                                    <a className="justify-between">
                                        {user && (user.displayName || user.email)}
                                    </a>
                                </li>
                                <li><a>Settings</a></li>
                                <li onClick={() => logOut()}><a>Logout</a></li>
                            </ul>
                        </div>
                    </div> </> :
                    <> <Link to={"/login"} className='btn'>LogIn</Link></>
                }
            </div>
        </div>
    );
};

export default Navbar;