
import { Link, useLocation, useNavigate } from "react-router-dom";

import { FaGoogle } from 'react-icons/fa';
import Lottie from "lottie-react";
import loginAnimation from '../../assets/106680-login-and-sign-up.json'
import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider/AuthProvider";


const Login = () => {

    const { logIn, updateProfile, googleSignIn } = useContext(AuthContext);

    const [error, setError] = useState('');

    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/'



    const handleLoginForm = event => {
        event.preventDefault();
        const form = event.target;

        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        logIn(email, password)
            .then(result => {
                const user = result.user;

                console.log(user);

                setError('');

                event.target.reset();
                navigate(from, { replace: true })
            })

            .catch(error => {
                console.error(error.message);
                setError(error.message);

            })

        updateProfile();

    }

    // googleSignIn

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const googleUser = result.user;
                console.log(googleUser);
                navigate(from, { replace: true })

            })

            .catch(error => {
                console.log('error', error.message);

            })

    }

    return (
        <div className='max-w-6xl mx-auto mb-2'>
            <div className="hero min-h-screen  bg-slate-100 ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                    <Lottie animationData={loginAnimation} loop={true} />
                       
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <h1 className="text-3xl font-bold ">Login now!</h1>
                            <form onSubmit={handleLoginForm}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-bold">Email</span>
                                    </label>
                                    <input type="text" name='email' placeholder="email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-bold">Password</span>
                                    </label>
                                    <input type="password" name='password' placeholder="password" className="input input-bordered" required />

                                </div>

                                <div className="form-control mt-6">

                                    <input className="btn btn-outline border-b-4 border-slate-700" type="submit" value="Login" />
                                </div>
                            </form>
                            <div>
                                <p className='text-red-500'>{error}</p>
                            </div>

                            <br />
                            <div>
                                <p>Doesn't have an Account yet? <Link className='text-slate-700-500 font-bold' to="/signup">Sign Up</Link></p>
                            </div>
                            <br />
                            <div>
                                <p className='text-slate-500 font-semibold'>_____________________OR_________________________</p>
                            </div>
                            <div className=' ml-24'>
                                <button onClick={handleGoogleSignIn} className="btn btn-outline  w-28">  <FaGoogle className='text-slate-700'></FaGoogle></button>
                            </div>




                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;