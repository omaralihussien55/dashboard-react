import React, { useState } from "react"
import HeaderComponent from "../HeaderComponent"
import ButtonGlobal from "../Buttons"
import Modal from "../Modal"
import INputGlobal from "../bars/Inputglobal"


const Products = ()=>{
  const [open,setOpen] = useState(false)
    const handleClose = ()=>{
       console.log("close")

    }
    return(
        <div>
            <HeaderComponent name="Products" >
                <ButtonGlobal onclick={()=> setOpen(true)} text={"add Products"} />
            </HeaderComponent>

          {  open && <Modal handleClose={handleClose} title={"Add Products"} >
                        <div className="mb-2"><INputGlobal lable={"Products name"} /></div>
                        <div className="mb-2"><INputGlobal type="number" lable={"price"} /></div>
                        <div className="mb-2"><INputGlobal lable={"unit"} /></div>
            </Modal>}

            <div className="p-5 h-11 flex justify-center items-center mt-28">
               <h1 className="text-center font-black text-2xl"> content in progress .....</h1>
            </div>
        </div>
    )
}

export default Products