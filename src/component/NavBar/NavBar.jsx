import { Link, useLocation } from 'react-router';
import logoImg from '../../assets/icons/logo.png'
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { getAuth } from 'firebase/auth';


const auth = getAuth();

const NavBar = () => {

    const location = useLocation();
    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut(auth).then(() => {
            alert("User Log Out Succesfully")
        })
            .catch((error) => {
                alert("Logout error:", error)
            })
    }


    const isBookingPage = location.pathname.startsWith('/booking') || location.pathname.startsWith('/login') || location.pathname.startsWith('/register')

    return (
        <div className={`max-lg:collapse lg:mb-48 rounded-md ${isBookingPage ? "bg-white text-black" : "text-white"}`}>
            <div className="collapse-title navbar flex justify-between items-center px-20">

                <Link to="/"><img src={logoImg} className={`w-30 ${isBookingPage ? "" : "brightness-0 invert"}`} alt="" /></Link>

                <div className="navbar-start">

                    <input type="text" placeholder="Search your Destination..." className="input input-bordered w-full mx-10 bg-white/25 placeholder:text-white" />
                </div>
                <div className="">
                    <ul className="items-center menu menu-horizontal gap-15 font-bold">
                        <li>News</li>
                        <li>
                            Destination
                        </li>
                        <li>Blog</li>
                        <li>Contact</li>
                        <Link to='/login'>{user ? <button onClick={handleLogOut} className='btn bg-[#F9A51A] text-black'>LogOut</button> : <button className="btn bg-[#F9A51A] text-black">Login</button>}</Link>

                    </ul>
                </div>

            </div>


            <div className=''>
                {
                    user && user.email
                }
            </div>
        </div>
    );
};

export default NavBar;