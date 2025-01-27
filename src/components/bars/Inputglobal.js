import React from "react";


const INputGlobal =({type="text",lable,name,id ,required=false,placeholder,onChange,value})=>{


    return(
        <>
        {lable&&<lable className="mb-1.5 w-full text-gray-600 ">{lable}</lable>}
        <input onChange={onChange} value={value} type={type} name={name} id={id} required={required} placeholder={placeholder} className={`p-2 border focus:border-purple-600 outline-none w-full min-h-6  rounded-md`} />
        </>
    )
}

export default INputGlobal