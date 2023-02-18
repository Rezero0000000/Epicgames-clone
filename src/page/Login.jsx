import React from "react";
import FormInput from "../components/molecules/FormInput";

const Login = () => {
    return (
        <>
            <div className="bg-[#202020] w-full sm:w-[30.5rem] mx-auto px-12 mt-10 text-white py-14">
                <div>
                    <img src="/images/eg-logo-light.svg" className="w-10 mx-auto" alt="" />
                    <p className="text-sm font-semibold mt-7">SIGN UP</p>
                </div>
                <div className="mt-5">
                    <form action="w-full ">
                         <div className="relative w-full p-1 px-5 border rounded-md border-white/30 z-20">
                            <button id="headlessui-listbox-button-13" type="button" aria-haspopup="true" aria-expanded="false" className="relative flex items-center justify-between w-full gap-2 py-3 text-sm group">
                                <div className="text-left">
                                    <div className="text-white/60">Country <span className="text-red-400">*</span></div>
                                    <div>indonesia</div>
                                </div>
                                <svg width="1em" height="1em" viewBox="0 0 24 24" className="w-4 h-4 transition duration-200">
                                    <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6l-6-6l1.41-1.41z" fill="currentColor"></path>
                                </svg>
                            </button>
                        </div>
                        <div className="flex justify-between gap-2">
                            <FormInput title="First Name" />
                            <FormInput title="Last Name" />
                        </div>
                        <div>
                            <FormInput title="Display Name" />
                            <FormInput title="Emaill Address" />
                            <FormInput title="Password" />
                        </div>
                        <div>
                            <div className="flex items-center mt-7">
                                <input type="checkbox" className="mr-5 grid w-8 h-8 border ring-8 ring-transparent hover:ring-white/10 place-items-center focus:outline-none"/>
                                <label className="text-sm">I would like to receive news, surveys and special offers from Epic Games.</label>
                            </div>

                            <div className="flex items-center mt-7">
                                <input type="checkbox" className="mr-5 grid w-5 h-5 border ring-8 ring-transparent hover:ring-white/10 place-items-center focus:outline-none"/>
                                <label className="text-sm">I have read and agree to the terms of services.</label>
                            </div>
                        </div>
                        <div className="flex justify-center">
                             <button className="px-32 bg-[#007DFC] py-3 mt-5 rounded-lg">REGISTER NOW</button>
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