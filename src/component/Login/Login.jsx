import { Link } from "react-router-dom";

import fbImg from "../../assets/icons/fb.png";
import googleImg from "../../assets/icons/google.png";

const Login = () => {
    return (
        <div className="min-h-screen bg-white flex flex-col justify-center items-center px-5 py-10">

            {/* LOGIN FORM */}
            <div className="w-full max-w-xl border border-gray-300 bg-[#F8F8F8] p-10 rounded-sm shadow-sm">

                <h1 className="text-4xl font-bold text-black mb-12">
                    Login
                </h1>

                <form className="space-y-8">

                    {/* Email */}
                    <div>
                        <input
                            type="email"
                            placeholder="Username or Email"
                            className="w-full bg-transparent border-b border-gray-300 outline-none py-3 text-black placeholder:text-black"
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <input
                            type="password"
                            placeholder="Password"
                            className="w-full bg-transparent border-b border-gray-300 outline-none py-3 text-black placeholder:text-black"
                        />
                    </div>

                    {/* Remember + Forgot */}
                    <div className="flex justify-between items-center text-sm">

                        <label className="flex items-center gap-2 text-black cursor-pointer">

                            <input
                                type="checkbox"
                                className="checkbox checkbox-xs rounded-none bg-white border-gray-400"
                            />

                            Remember Me

                        </label>

                        <a
                            href="#"
                            className="text-[#F9A51A] underline"
                        >
                            Forgot Password
                        </a>

                    </div>

                    {/* Login Button */}
                    <button
                        className="w-full bg-[#F9A51A] hover:bg-yellow-500 text-black py-4 font-medium transition-all"
                    >
                        Login
                    </button>

                    {/* Register */}
                    <p className="text-center text-black">

                        Don’t have an account?{" "}

                        <Link
                            to="/register"
                            className="text-[#F9A51A] underline"
                        >
                            Create an account
                        </Link>

                    </p>

                </form>

            </div>

            {/* SOCIAL LOGIN */}
            <div className="w-full max-w-xl mt-8">

                {/* Divider */}
                <div className="flex items-center gap-5 mb-8">

                    <div className="flex-1 h-[1px] bg-gray-300"></div>

                    <p className="text-black">Or</p>

                    <div className="flex-1 h-[1px] bg-gray-300"></div>

                </div>

                {/* Facebook */}
                <button className="w-full border border-gray-300 bg-white rounded-full py-4 px-6 flex items-center gap-6 mb-5 hover:bg-gray-50 transition-all">

                    <img
                        src={fbImg}
                        className="w-10 h-10"
                        alt=""
                    />

                    <span className="text-black font-medium text-lg">
                        Continue with Facebook
                    </span>

                </button>

                {/* Google */}
                <button className="w-full border border-gray-300 bg-white rounded-full py-4 px-6 flex items-center gap-6 hover:bg-gray-50 transition-all">

                    <img
                        src={googleImg}
                        className="w-10 h-10"
                        alt=""
                    />

                    <span className="text-black font-medium text-lg">
                        Continue with Google
                    </span>

                </button>

            </div>

        </div>
    );
};

export default Login;