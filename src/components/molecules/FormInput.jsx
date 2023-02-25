import React from "react";

const FormInput = (porps) => {
    const {title} = porps;

    return (
        <> 
        <div className="relative w-full p-1 px-5 border mt-7 rounded-md border-white/30 z-20">
        <button id="headlessui-listbox-button-13" type="button" aria-haspopup="true" aria-expanded="false" className="relative flex items-center justify-between w-full gap-2 py-3 text-sm group">
            <div className="text-left">
                {/* <div className="text-white/60">Country <span className="text-red-400">*</span></div> */}
                <div>{title}</div>
            </div>
        </button>
         </div>
        </>
    )
}

export default FormInput;