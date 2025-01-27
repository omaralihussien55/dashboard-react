import React from "react"
import { BrowserRouter as Router, Route, Routes,  } from "react-router-dom";
import Charts from "./Charts"
import Dashboard from "./DashBoard"
import Statistics from "./Statistics"
import Table from "./Table"
import Items from "./inventory/items";
import Supplier from "./inventory/Supplier";
import Purchases from "./inventory/Purchases";
import Warehouse from "./inventory/warehouse";
import Coupons from "./manage/Coupons";
import Events from "./manage/Events";
import Gifts from "./manage/Gifts";
import Products from "./menu/Products";
import Modifiers from "./menu/Modifiers";


const Main = ({children})=>{


    return (
        <main className="mt-16 p-3 overflow-x-scroll  m-h-full    grow dark:bg-slate-800 dark:text-slate-50 ">
         
            {children}
        </main>
    )
}

export default Main