import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider/AuthProvider";



const SignUp = () => {

    const { createUser, updateUserProfile } = useContext(AuthContext);

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();

    const handleRegisterForm = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;
        console.log(name, email, password, photo);

        createUser(email, password)
            .then(result => {
                const createdUser = result.user;
                console.log(createdUser);
                updateUserProfile(name, photo)
                setError('');
                setSuccess('User created successfully');
                event.target.reset();
                navigate('/')
            })

            .catch(error => {
                console.error(error.message);
                setError(error.message);
                setSuccess('');
            })



    }


    return (
        <div className='max-w-6xl mx-auto mb-2'>
            <div className="hero min-h-screen  bg-slate-100 ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">


                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <h1 className="text-3xl font-bold">Please Sign Up!!!</h1>
                            <form onSubmit={handleRegisterForm}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-bold">Name</span>
                                    </label>
                                    <input type="text" name='name' placeholder="Your Name" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-bold">Email</span>
                                    </label>
                                    <input type="text" name='email' placeholder="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-bold">Photo</span>
                                    </label>
                                    <input type="text" name='photo' placeholder="Your Photo" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-bold">Password</span>
                                    </label>
                                    <input type="password" name='password' placeholder="password" className="input input-bordered" />

                                </div>
                                <div className="form-control mt-6">

                                    <input className="btn btn-outline border-b-4 border-slate-700" type="submit" value="Registration" />
                                </div>
                            </form>
                            <div>
                                <p className='text-red-500'>{error}</p>
                            </div>
                            <div>
                                <p className='text-sky-500'>{success}</p>
                            </div>
                            <br />
                            <div>
                                <p>If you have an Account go to <Link

                                    className='text-slate-600 font-bold' to="/login">Login</Link></p>
                            </div>
                            <br />


                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;