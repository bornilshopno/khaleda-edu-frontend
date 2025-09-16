import { FaGoogle } from 'react-icons/fa';
import useAuth from '../hooks/useAuth';
import { useNavigate } from 'react-router';


const SocialLogin = () => {
    const { user, setUser, setLoading, googleSignIn } = useAuth();
    const navigate = useNavigate()

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then((result) => {
                setUser(result.user)
                const userInfo = {
                    email: result.user?.email,
                    name: result.user?.displayName,
                    role: "user"
                };

                navigate("/")
                setLoading(false)

            })
    }
    return (
        <div className="mt-2 p-2  w-full max-w-xl rounded-md lg:mr-0 ">
            <button className="flex gap-2 items-center w-full btn px-8 rounded-lg" onClick={handleGoogleSignIn}><FaGoogle></FaGoogle> Join With Your Gmail </button>
        </div>
    );
};

export default SocialLogin;