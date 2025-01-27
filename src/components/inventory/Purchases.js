import React, { useState } from "react"
import HeaderComponent from "../HeaderComponent"
import ButtonGlobal from "../Buttons"
import Modal from "../Modal"
import INputGlobal from "../bars/Inputglobal"


const Purchases = ()=>{
  const [open,setOpen] = useState(false)
    const handleClose = ()=>{
       console.log("close")

    }
    return(
        <div>
            <HeaderComponent name="Purchases" >
                <ButtonGlobal onclick={()=> setOpen(true)} text={"add Purchases"} />
            </HeaderComponent>

          {  open && <Modal handleClose={handleClose} title={"Add quntity"} >
                        <div className="mb-2"><INputGlobal lable={"notes"} /></div>
            </Modal>}

            <div className="p-5 h-11 flex justify-center items-center mt-28">
               <h1 className="text-center font-black text-2xl"> content in progress .....</h1>
            </div>
        </div>
    )
}

export default Purchases