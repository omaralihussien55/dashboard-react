import React from "react";
import ButtonGlobal from "./Buttons";
import INputGlobal from "./bars/Inputglobal";


const Modal  = ({title,children,open,handleClose})=>{

    return(
        <div className={`fixed  flex justify-center items-center inset-0 transition-all duration-500 bg-slate-800/10 z-[999] `}>

            <div className="w-1/3 h-2/3 overflow-y-scroll rounded-lg bg-white p-3 relative z-[9999]">
                 <div className="flex flex-col justify-between h-full">
                        <h1 className="mb-2 text-center p-1 text-gray-700">{title}</h1>
                        <div className="grow mb-2" >
                         {children}
                        </div>

                        <div className="flex items-center justify-between ">
                            <ButtonGlobal pointer={"pointer-events-none"} bg="bg-purple-400" text={"save"}>
                           
                            </ButtonGlobal>

                            <ButtonGlobal bg="" onclock={()=> alert("jh")}  text={"close"} color="text-gray-700">

                             </ButtonGlobal>
                        </div>
                 </div>
            </div>

        </div>
    )
}

export default Modal