const Login = () => {
    return (
        <div className="bg-white flex justify-center items-center px-5">

            <div className="border-2 w-150 hover:border-black p-10 bg-[#F5F5F5]">

                <h1 className="text-2xl font-bold text-black mb-5">
                    Login
                </h1>

                <form className="space-y-8">

                    {/* Email */}
                    <div>
                        <input
                            type="email"
                            placeholder="Username or Email"
                            className="w-full bg-transparent border-b border-gray-400 outline-none py-3 text-black placeholder:text-gray-700"
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <input
                            type="password"
                            placeholder="Password"
                            className="w-full bg-transparent border-b border-gray-400 outline-none py-3 text-black placeholder:text-gray-700"
                        />
                    </div>

                    {/* Remember + Forgot */}
                    <div className="flex justify-between items-center text-sm">

                        <label className="flex items-center gap-2 text-black cursor-pointer">
                            <input type="checkbox" className="checkbox bg-white text-black checkbox-xs rounded-none" />
                            Remember Me
                        </label>

                        <a href="#" className="text-[#F9A51A] underline">
                            Forgot Password
                        </a>

                    </div>

                    {/* Button */}
                    <button className="w-full bg-[#F9A51A] hover:bg-yellow-500 text-black py-3 font-medium transition-all">
                        Login
                    </button>

                    {/* Register */}
                    <p className="text-center text-black text-sm">
                        Don’t have an account?{" "}
                        <span className="text-[#F9A51A] underline cursor-pointer">
                            Create an account
                        </span>
                    </p>

                </form>

            </div>

        </div>
    );
};

export default Login;