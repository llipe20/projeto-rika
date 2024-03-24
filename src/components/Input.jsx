import React from "react";

const Input = ({ label, id, type, style }) => {

    return (
        <div className="flex flex-col justify-start items-start gap-1 w-1/2 h-full">
            <label htmlFor={id}> {label} </label>
            <input type={type} id={id} name={id} className="h-8 border-0 outline-none rounded-lg bg-gray-200 text-black shadow pl-2 w-96" />
        </div>
    )
}

export default Input