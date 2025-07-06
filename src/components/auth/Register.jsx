import React, { useState } from 'react';
import { IoMdEyeOff } from 'react-icons/io';
import { IoEye } from 'react-icons/io5';
import SocialLogin from './SocialLogin';
import useAuth from '../hooks/useAuth';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router';

const Register = () => {
    const [visible, setVisible] = useState(false);
    const [passErr, setPassErr] = useState("");
    const {user, setUser, setLoading, createUser, logOut, auth}=useAuth();
    const navigate= useNavigate()

    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const name = form.name.value;
        setPassErr("")
        let regExp = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
        if (!regExp.test(password)) {
            setPassErr("Password to be atleast 6 characters & atleast one letter ,one special character & one digit");
            return;
        }

          createUser(email, password)
            .then((userCredential) => {
                // Signed up 
                const newUser = userCredential.user;
                setUser(newUser);
                setLoading(false);
                //new lines 
                const userInfo = {
                    email: email,
                    name: name,
                    role: "user"
                };
              console.log(userInfo)
                logOut()
                Swal.fire({
                    title: "Registration Complete",
                    text: "LogIn to Explore",
                    icon: "success",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "LogIn Now!"
                }).then((result) => {
                    if (result.isConfirmed) {
                        navigate("/login")
                    }
                });
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setPassErr(errorCode, errorMessage)
                // toast.error(`Resgistration Failed due to ${passErr}`)
            });


    }
    return (
        <div>
            <div className="hero  min-h-screen max-w-xl mx-auto ">

                <div className="card w-full shadow-2xl lg:flex-1 p-4">
                    <form className="card-body p-2 relative" onSubmit={handleRegister}>
                        <h1 className="text-center font-extrabold text-xl py-3 bg-gray-400 text-gray-700 rounded-xl">Sign Up</h1>
                        <div className="grid grid-cols-1 gap-3">
                            <div className="form-control flex justify-between">
                                <label className="label">
                                    <span className="label-text ">Email :</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered text-gray-700" required />
                            </div>
                            <div className="form-control flex justify-between">
                                <label className="label">
                                    <span className="label-text ">Name :</span>
                                </label>
                                <input type="text" name="name" placeholder="Your Name" className="input input-bordered text-gray-700" required />
                            </div>
                            <div className="form-control flex justify-between">
                                <label className="label">
                                    <span className="label-text">Password :</span>
                                </label>
                                <input type={visible ? "text" : "password"} name="password" placeholder="password" className="input input-bordered text-gray-700" required />
                            </div>

                        </div>
                        <p className="text-red-500 font-bold text-center">{passErr}</p>
                        <div className="form-control mt-6">
                            <button className="btn bg-gray-400 w-full rounded-lg">Register</button>
                        </div>
                    </form>

                    <button className="absolute right-8 top-44 py-5" onClick={() => setVisible(!visible)}>
                        {visible ? <IoMdEyeOff className="text-2xl text-gray-400 z-10"></IoMdEyeOff> : <IoEye className="text-gray-400 text-2xl z-10"></IoEye>}
                    </button>

                    <div className="divider divider-accent">or</div>
                    <div className="text-center ">
                        <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>

        </div>

    );
};

export default Register;