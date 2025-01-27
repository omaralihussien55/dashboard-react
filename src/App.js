import { useEffect } from "react";
import {createBrowserRouter,createRoutesFromElements, Navigate, Outlet, Route, RouterProvider, Routes} from "react-router-dom"

import { useSelector } from "react-redux";
import RootLayout from "./components/RootLayout";
import Login from "./components/pages/auth/Login";
import SignUp from "./components/pages/auth/SignUp";
import DashBoardLayout from "./components/DashBoardLayout";
import Modifiers from "./components/menu/Modifiers";
import Products from "./components/menu/Products";
import Gifts from "./components/manage/Gifts";
import Events from "./components/manage/Events";
import Coupons from "./components/manage/Coupons";
import Warehouse from "./components/inventory/warehouse";
import Purchases from "./components/inventory/Purchases";
import Supplier from "./components/inventory/Supplier";
import Items from "./components/inventory/items";
import Dashboard from "./components/DashBoard";
import Cookies from "js-cookie";
import NavBar from "./components/bars/Navbar";
import SideBar from "./components/bars/SideBar";
function App() {
  const {dark,ltr} = useSelector((state) => state.BarSlice)
  const token = Cookies.get("accessToken")

  // const router = createBrowserRouter(createRoutesFromElements(
  //   <Route path="/" element={<RootLayout/>}>
  //       <Route index element={<h1>my app</h1>} />
  //       <Route path="auth" element={<Login />} >
  //         <Route path="" element={<SignUp />} /> 
  //       </Route>
  //   </Route>
  // ))        

  useEffect(()=>{
      if(ltr){
        document.body.classList.add("ltr")
        document.body.classList.remove("rtl")
        document.body.dir ="ltr"
       }else{
        document.body.classList.add("rtl")
        document.body.classList.remove("ltr")
        document.body.dir ="rtl"
       }
    

  },[ltr])
  useEffect(()=>{

    if(dark){
      document.body.classList.add("dark")

    }else{
      document.body.classList.remove("dark")

    }
  
  },[dark])
  
  return (

    <div  className="App ">
        
        {/* <div className="app-content flex gap-1 p-1 ">
             <NavBar />
             <SideBar />
             <Main />
        </div> */}
       <Routes>
      {/* <Route  path="/" element={token?<Navigate  to={"/dashboard"} replace/>:<RootLayout/>}>
        <Route index element={<h1>my app</h1>} />
      <Route path="auth">
           <Route path="login" element={<Login />} /> 
           <Route path="signup" element={<SignUp />} /> 
      </Route>
        </Route> */}

        <Route path="/" element={<DashBoardLayout />}>
        
          <Route exact index element={<Dashboard />} />

          <Route path="items" element={<Items/>} /> 
          <Route path="Supplier" index element={<Supplier/>} /> 
          <Route path="Purchases" index element={<Purchases />} /> 
          <Route path="warehouse" index element={<Warehouse/>} /> 


          <Route path="coupons" element={<Coupons />} /> 
          <Route path="events" index element={<Events />} /> 
          <Route path="gift" index element={<Gifts />} /> 


          <Route path="Products" element={<Products />} /> 
          <Route path="Modifiers" index element={<Modifiers />} /> 

          <Route path="setting" index element={<h1 className="h-full  flex">
            <span className="block m-auto">in progress ..........</span>
          </h1>} /> 

        </Route>
    </Routes>
    </div>
  );
}

export default App;
