import React from "react";

const Login = () => {
    return (
        <>
            <div className="bg-[#202020] px-5 mt-10 text-white py-14">
                <div>
                    <img src="/images/eg-logo-light.svg" className="w-10 mx-auto" alt="" />
                    <p className="text-sm font-semibold mt-7">SIGN IN WITH AN EPIC GAMES ACCOUNT</p>
                </div>
                <div className="mt-5">
                    <form action="w-full ">
                        <div>
                         <input type="text" id="email" className="border-white/30  focus:border-white appearance-none floating-input peer"/>
                            <label htmlFor="email" className="floating-label peer-focus:-translate-y-5 peer-focus:scale-90 -translate-y-1/2">Email Address</label>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login