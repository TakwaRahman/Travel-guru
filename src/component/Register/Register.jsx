
import { Link } from "react-router";
import fbImg from "../../assets/icons/fb.png"
import googleImg from "../../assets/icons/google.png"



const Register = () => {
    return (
        <div className="min-h-screen bg-white flex flex-col justify-center items-center px-5 py-10">

            {/* FORM BOX */}
            <div className="w-full max-w-xl border border-gray-300 bg-[#F8F8F8] p-10 rounded-sm">

                <h1 className="text-4xl font-bold text-black mb-12">
                    Create an account
                </h1>

                <form className="space-y-8">

                    <input
                        type="text"
                        placeholder="First Name"
                        className="w-full bg-transparent border-b border-gray-300 outline-none py-3 text-black"
                    />

                    <input
                        type="text"
                        placeholder="Last Name"
                        className="w-full bg-transparent border-b border-gray-300 outline-none py-3 text-black"
                    />

                    <input
                        type="email"
                        placeholder="Username or Email"
                        className="w-full bg-transparent border-b border-gray-300 outline-none py-3 text-black"
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        className="w-full bg-transparent border-b border-gray-300 outline-none py-3 text-black"
                    />

                    <input
                        type="password"
                        placeholder="Confirm Password"
                        className="w-full bg-transparent border-b border-gray-300 outline-none py-3 text-black"
                    />

                    <button className="w-full bg-[#F9A51A] py-4 font-medium text-black">
                        Create an account
                    </button>

                    <p className="text-center text-black">
                        Already have an account?{" "}
                        <Link to="/login"><span className="text-[#F9A51A] underline cursor-pointer">
                            Login
                        </span></Link>
                    </p>

                </form>

            </div>

            {/* SOCIAL LOGIN OUTSIDE */}
            <div className="w-full max-w-xl mt-8">

                {/* Divider */}
                <div className="flex items-center gap-5 mb-8 mx-10">

                    <div className="flex-1 h-[1px] bg-gray-300"></div>

                    <p className="text-black">Or</p>

                    <div className="flex-1 h-[1px] bg-gray-300"></div>

                </div>


                <div className="mx-10 space-y-5">
                    {/* Facebook */}
                    <button className="flex justify-start gap-23 items-center btn bg-white w-full py-7 rounded-4xl hover:bg-gray-50 border-none">

                        <div className="w-10">
                            <img src={fbImg} alt="" />
                        </div>

                        <span className="text-black font-medium text-xl">
                            Continue with Facebook
                        </span>

                    </button>

                    {/* Google */}
                    <button className="flex justify-start gap-25 items-center btn bg-white w-full py-7 rounded-4xl hover:bg-gray-50 border-none">

                        <div className="w-10">
                            <img src={googleImg} alt="" />
                        </div>

                        <span className="text-black font-medium text-xl">
                            Continue with Google
                        </span>

                    </button>
                </div>

            </div>

        </div>
    );
};

export default Register;