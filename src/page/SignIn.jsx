import React from "react";
import FormInput from "../components/molecules/FormInput";

const SignIn = () => {
    return (
        <>
            <div className="bg-[#202020] w-full  sm:w-[29.5rem] mx-auto px-5 sm:px-14 my-9 text-white py-14  ">
                <div>
                    <img src="/images/eg-logo-light.svg" className="w-[2.65rem] mx-auto" alt="" />
                    <p className="text-[12px] font-bold mt-7">SIGN UP</p>
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
                        <div className="flex justify-between gap-5 mt-6">
                            <div><FormInput title="First Name" /></div>
                            <div><FormInput title="Last Name" /></div>
                        </div>
                        <div>
                            <div className="mt-6"><FormInput title="Display Name" /></div>
                            <div className="mt-6"><FormInput title="Emaill Address" /></div>
                            <div className="mt-6"><FormInput title="Password" /></div>
                        </div>
                        <div className="text-[13.5px] text-[#A0A0A0]">
                            <div className="flex items-center mt-5 items-center">
                                <input type="checkbox" className="w-[1.25rem] h-[1.25rem] border-[#C7C7C7] bg-[#202020]"/>
                                <label className="ml-3 pl-1 pr-4">I would like to receive news, surveys and special offers from Epic Games.</label>
                            </div>

                            <div className="flex items-center mt-4 items-center">
                                <input type="checkbox" className="w-[1.25rem] h-[1.25rem] border-[#C7C7C7] bg-[#202020]"/>
                                <label className="ml-3 px-1">I have read and agree to the <span className="text-white underline underline-offset-2">terms of services.</span></label>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <button className="px-20 py-[1.19rem] w-full rounded-sm text-[12.5px] font-bold xs:px-32 bg-[#007DFC] py-3 mt-9 xs:rounded-lg">REGISTER NOW</button>
                        </div>
                    </form>
                </div>

                <div className="text-center mt-8 text-sm text-[#A0A0A0]">
                    <a href="" className="text-white underline underline-offset-2"> Privacy Policy</a>
                    <p className="mt-6">Have an Epic Games account? <a href="" className="text-white underline underline-offset-2">Sign In</a></p>
                    <p>Back to <a href="/" className="text-white underline underline-offset-2">Home</a></p>
                </div>
            </div>
        </>
    )
}

export default SignIn;