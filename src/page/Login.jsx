import React from "react";
import FormInput from "../components/molecules/FormInput";

const Login = () => {
    return (
        <>
            <div className="bg-[#202020] w-full xs:w-[27.5rem] sm:w-[29rem] mx-auto px-5 sm:px-12 xs:my-8 text-white py-14">
                <div>
                    <img src="/images/eg-logo-light.svg" className="w-[2.65rem] mx-auto" alt="" />
                    <p className="text-center text-lg font-bold mt-16 ">Sign in with an Epic Games account</p>
                </div>
                <div>
                    <form action="w-full">
                        <div className="mt-5">
                            <div><FormInput title="Emaill Address" /></div>
                            <div className="mt-6"><FormInput title="Password"/></div>
                        </div>
                        <div className="flex justify-between items-center mt-7">
                            <div className="flex">
                                <input type="checkbox" className="w-[1.2rem] h-[1.2rem] border-[#C7C7C7] bg-[#202020]"/>
                                <label className="text-sm ml-3 text-[#BDC5C3]">Remember me  </label>
                            </div>
                            <a href="" className="text-[14px] underline underline-offset-2">Forgot Your Password</a>
                        </div>

                        <div className="flex justify-center mt-4">
                             <button className="px-20 py-[1.18rem] w-full rounded-sm text-[12px] font-bold xs:px-32 bg-[#007DFC] py-3 mt-5 xs:rounded-lg">LOG IN NOW</button>
                        </div>
                    </form>
                </div>

                <div className="text-center mt-10 text-sm text-[#A0A0A0]">
                    <a href="" className="text-white underline underline-offset-2"> Privacy Policy</a>
                    <p className="mt-6">Don't have an Epic Games account? <a href="" className="text-white">Sign Up</a></p>
                    <p>Back to <a href="/" className="text-white">Home</a></p>
                </div>
            </div>
        </>
    )
}

export default Login