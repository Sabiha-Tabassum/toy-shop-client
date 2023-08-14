import { Link, NavLink } from "react-router-dom";
import logo from '../../images/limousine.png'
import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider/AuthProvider";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [isHovered, setIsHovered] = useState(false);
    const navItems = <>
        <div className='mr-4 text-xl font-semibold'>
            <NavLink
                to="/"

                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-amber-400 font-bold" : ""
                }
            >
                Home
            </NavLink>
        </div>

        <div className='mx-2 text-xl font-semibold'>
            <NavLink
                to="/alltoys"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-amber-400 font-bold" : ""
                }
            >
                All Toys
            </NavLink>
        </div>


        <div className='mx-4 text-xl font-semibold'>
            <NavLink
                to="/blog"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-amber-400 font-bold" : ""
                }
            >
                Blog
            </NavLink>
        </div>



        {
            user && <NavLink
                to="/addtoy"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-amber-400 font-bold text-xl mx-4" : "mx-4 font-semibold text-xl"
                }
            >
                Add Toy
            </NavLink>
        }

        {
            user?.email ? <NavLink
                to="/mytoy"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-amber-400 text-xl font-bold" : "font-semibold text-xl"
                }
            >
                My Toys
            </NavLink> : ''
        }



    </>

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error));
    };

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };


    return (
        <div className='max-w-4xl mx-auto bg-slate-100'>
            <div className="navbar border-solid border-2 border-amber-200 rounded-full my-4 bg-zinc-50">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navItems}
                        </ul>
                    </div>
                    <Link to="/" className="">
                        <img className='w-16' src={logo} alt="" />
                    </Link>
                    <Link to='/'><h1 className='font-bold text-amber-400 ml-6'>Toy Shop</h1></Link>
                </div>
                <div className="navbar-center hidden lg:flex ">
                    <ul className="menu menu-horizontal">
                        {navItems}
                    </ul>
                </div>
                <div className="navbar-center hidden lg:flex">

                </div>

                <div className="navbar-end">
                    <div className='relative px-8'>
                        {
                            user && <div>
                                <div>
                                    <img className=' rounded-full h-10 cursor-pointer' src={user.photoURL} alt="userPhoto"
                                        onMouseEnter={handleMouseEnter}
                                        onMouseLeave={handleMouseLeave} />

                                </div>
                            </div>
                        }

                        {
                            isHovered && <div className='absolute left-10 top-6 bg-slate-200'>
                                <span>{user.displayName}</span>
                            </div>
                        }
                    </div>
                    {
                        user?.email ? <Link to="/login" className="btn btn-outline btn-warning border-b-4 border-amber-400 mr-4" onClick={handleLogOut}>LogOut</Link> :
                            <Link to="/login" className="btn btn-outline btn-warning border-b-4 border-amber-400 mr-4">Login</Link>
                    }

                </div>
            </div>
        </div>
    );
};

export default Navbar;