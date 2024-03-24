import React from "react";

const Input = ({ label, id, type, style }) => {

    const classe = "h-8 border-0 outline-none rounded-lg bg-white text-black shadow pl-2" + style
    return (
        <div className="flex flex-col justify-start items-start gap-1 w-full h-full">
            <label htmlFor={id}> {label} </label>
            <input type={type} id={id} name={id} className={classe} />
        </div>
    )
}

export default Input