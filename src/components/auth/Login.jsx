import React, { useState } from 'react';
import { GiBoomerangSun } from 'react-icons/gi';
import { IoMdEyeOff } from 'react-icons/io';
import { IoEye } from 'react-icons/io5';
import SocialLogin from './SocialLogin';
import { Link, useLocation, useNavigate } from 'react-router';
import useAuth from '../hooks/useAuth';

const Login = () => {
    const {user, setUser, setLoading, loginUser, logOut, auth}=useAuth();
    const [visible, setVisible]=useState (false);
      const navigate = useNavigate()
    const location = useLocation()
    const handleSignIn = (e) => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        loginUser(email, password)
            .then((userCredential) => {
                // Signed in 
                const loggedinUser = userCredential.user;
                setUser(loggedinUser);
                setLoading(false)
                navigate(location?.state ? location.state : "/")
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // toast.error( errorCode, errorMessage,"LOGIN ERROR! ")
            });
    }
    return (
        <div>
           Login 

           <div className="card max-w-xl mx-auto shadow-2xl lg:flex-1 relative p-4">
                        <form className="card-body p-0" onSubmit={handleSignIn}>
                            <h1 className="text-center font-extrabold text-xl py-3 mb-5 bg-gray-400 text-gray-700 rounded-xl flex items-center justify-center gap-3">Login to   <GiBoomerangSun />
                                                        </h1>
                            <div className="form-control flex justify-between">
                                <label className="label ">
                                    <span className="label-text">Email :</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered text-gray-700" required />
                            </div>
                            <div className="form-control flex justify-between">
                                <label className="label">
                                    <span className="label-text">Password :</span>
                                </label>
                                <input type={visible ? "text" : "password"} name="password" placeholder="password" className="input input-bordered text-gray-700" required />
                                
                            </div>
                            <label className="label justify-end">
                                    <a href="#" className="label-text-alt link link-hover text-white ">Forgot password?</a>
                                </label>
                                <p className='text-xs mt-4'>no account yet? please <Link to={'/register'} className='font-semibold'>register</Link> first</p>
                            <div className="form-control mt-2 ">
                                <button className="btn bg-gray-400 w-full rounded-lg">Login</button>
                            </div>
                        </form>
                        <button className="absolute right-8 top-36 py-2" onClick={() => setVisible(!visible)}>
                            {visible ? <IoMdEyeOff className="text-2xl text-gray-400"></IoMdEyeOff> : <IoEye className="text-gray-400 text-2xl"></IoEye>}
                        </button>
                        <div className="divider divider-accent">or</div>

                       <div className="">
                        <SocialLogin></SocialLogin>
                       </div>
                    </div>
        </div>
    );
};

export default Login;Login