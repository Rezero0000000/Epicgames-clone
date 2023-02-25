import React from "react";

const FormInput = (porps) => {
    const {title} = porps;

    return (
        <> 
            <div>
                <input type="text" className="bg-[#202020] w-full rounded-md py-5 text-sm placeholder:px-2 placeholder:font-semibold placeholder:text-[#BDC5C3]" placeholder={title}/>
            </div>
        </>
    )
}

export default FormInput;