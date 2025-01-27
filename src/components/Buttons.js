import React from "react"


const ButtonGlobal = ({bg="bg-purple-700",color="text-white",text ,bordercolor,pointer,onclick })=>{


    return (
        <button onClick={onclick} className={`p-2    ${bg} ${color} border ${pointer} rounded-md min-w-16 min-h-7 ${bordercolor}`}>
             {text}
        </button>
    )

}

export default ButtonGlobal