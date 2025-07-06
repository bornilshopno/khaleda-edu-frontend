import React, { useState } from 'react';
import { GiBoomerangSun } from 'react-icons/gi';
import { IoMdEyeOff } from 'react-icons/io';
import { IoEye } from 'react-icons/io5';
import SocialLogin from './SocialLogin';

const Login = () => {
    const [visible, setVisible]=useState (false);
    const handleSignIn=()=>{

    }
    return (
        <div>
           Login 

           <div className="card max-w-xl mx-auto shadow-2xl lg:flex-1 relative p-4">
                        <form className="card-body p-0" onSubmit={handleSignIn}>
                            <h1 className="text-center font-extrabold text-xl py-3 bg-gray-400 text-gray-700 rounded-xl flex items-center justify-center gap-3">Login to   <GiBoomerangSun />
                                                        <span className="italic">progresso</span></h1>
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
                            <div className="form-control mt-6 ">
                                <button className="btn bg-gray-400 w-full rounded-lg">Login</button>
                            </div>
                        </form>
                        <button className="absolute right-8 top-31 py-2" onClick={() => setVisible(!visible)}>
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