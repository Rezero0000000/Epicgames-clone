import React from "react";
import FormInput from "../components/molecules/FormInput";

const Login = () => {
    return (
        <>
            <div className="bg-[#202020] w-full sm:w-[30.5rem] mx-auto px-5 xs:px-12 mt-10 text-white py-14">
                <div>
                    <img src="/images/eg-logo-light.svg" className="w-10 mx-auto" alt="" />
                    <p className="xs:text-sm text-[12px] font-semibold mt-7">SIGN IN WITH AN EPIC GAMES ACCOUNT</p>
                </div>
                <div className="mt-5">
                    <form action="w-full ">
                        <div>
                            <FormInput title="Emaill Address" />
                            <FormInput title="Password" />
                        </div>
                        <div className="flex justify-between items-center mt-7">
                            <div className="flex">
                                <input type="checkbox" className="mr-5 grid w-8 h-8 border ring-8 ring-transparent hover:ring-white/10 place-items-center focus:outline-none"/>
                                <label className="text-sm">remember me ? </label>
                            </div>
                            <a href="" className="text-sm">Forgot Your Password</a>
                        </div>

                        <div className="flex justify-center">
                             <button className="px-32 bg-[#007DFC] py-3 mt-5 rounded-lg">LOGIN NOW</button>
                        </div>
                    </form>
                </div>

                <div className="text-center mt-10 text-sm text-[#A0A0A0]">
                    <a href="" className="text-white"> Privacy Policy</a>
                    <p className="mt-7">Have an Epic Games account? <a href="" className="text-white">Sign In</a></p>
                    <p>Back to <a href="/" className="text-white">Home</a></p>
                </div>
            </div>
        </>
    )
}

export default Login