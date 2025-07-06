import React from 'react';
import { FaGoogle } from 'react-icons/fa';

const SocialLogin = () => {

    const handleGoogleSignIn=()=>{

    }
    return (
         <div className="mt-2 p-2  w-full max-w-xl rounded-md lg:mr-0 ">
                <button className="flex gap-2 items-center w-full btn px-8 rounded-lg" onClick={handleGoogleSignIn}><FaGoogle></FaGoogle> Join With Your Gmail </button>
            </div>
    );
};

export default SocialLogin;