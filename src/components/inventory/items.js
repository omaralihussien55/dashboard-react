import React, { useState } from "react"
import HeaderComponent from "../HeaderComponent"
import ButtonGlobal from "../Buttons"
import Modal from "../Modal"
import INputGlobal from "../bars/Inputglobal"


const Items = ()=>{
  const [open,setOpen] = useState(false)
    const handleClose = ()=>{
       console.log("close")

    }
    return(
        <div>
            <HeaderComponent name="items" >
                <ButtonGlobal onclick={()=> setOpen(true)} text={"add items"} />
            </HeaderComponent>

          {  open && <Modal handleClose={handleClose} title={"Add items"} >
                        <div className="mb-2"><INputGlobal lable={"item name"} /></div>
                        <div className="mb-2"><INputGlobal lable={"unit"} /></div>
                        <div className="mb-2"><INputGlobal lable={"price"} /></div>
                        <div className="mb-2"><INputGlobal lable={"ska"} /></div>
            </Modal>}

            <div className="p-5  flex justify-center items-center mt-28 ">
               <h1 className="text-center font-black text-2xl"> content in progress .....</h1>
            </div>
        </div>
    )
}

export default Items