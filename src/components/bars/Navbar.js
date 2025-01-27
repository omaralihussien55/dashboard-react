import { useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { handleActive, handleDark, handleDirction } from "../../redux/barStore"
import img1 from "../../logo.svg"
import { userIcon } from "./SideBar"
const settingIcon = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 ">
<path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
<path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
</svg>

const settingIcon2 = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 ">
<path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
<path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
</svg>

const EmailIcon = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
<path strokeLinecap="round" strokeLinejoin="round" d="M2.25 13.5h3.86a2.25 2.25 0 0 1 2.012 1.244l.256.512a2.25 2.25 0 0 0 2.013 1.244h3.218a2.25 2.25 0 0 0 2.013-1.244l.256-.512a2.25 2.25 0 0 1 2.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 0 0-2.15-1.588H6.911a2.25 2.25 0 0 0-2.15 1.588L2.35 13.177a2.25 2.25 0 0 0-.1.661Z" />
</svg>

const blogIcon = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
<path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
</svg>

const ProfileIcon = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
<path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
</svg>


const DarkModeIcon =<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
<path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
</svg>

const LightModeIcone=<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
<path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
</svg>


const Bell = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-purple-600">
<path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
</svg>


const NavBar = ()=>{
    const {active} = useSelector((state) => state.BarSlice)
    const RefNavbar= useRef(null)



    return(
        <nav style={{width:active?"calc(100% - 80px)":"calc(100% - 270px)"}} className={ `navbar rounded-md dark:bg-slate-800 dark:text-slate-50  flex justify-center bg-white shadow-md z-20  `} ref={RefNavbar}>
            <div className="w-11/12 mx-auto">
               <div className="flex items-center justify-between gap-4  h-full">
                <DarkMode/>
                <div></div>
                   <div className="min-w-44 flex items-center justify-end gap-5 h-full">
                    
                   <Dirction/>
                       <Notification />
                        <div className="relative h-full  flex items-center min-w-24">
                              <User/>
                         </div>
                   </div>
                  

               </div>

           </div>
        </nav>
    )
}

export default NavBar

const User = ()=>{
  const {ltr} =useSelector(state => state.BarSlice)
  const [toggle,setToggle] = useState(false)
  return(
    <div className={`user ${toggle?"toggle":""} bg-purple-50 dark:bg-slate-800 border border-purple-800`} >
         <div className="usercontain">
             <div className="imgcontain">
              <img src={img1} alt="" />
             </div>
             <p  className="username text-gray-100">omar ali</p>
         </div>
         <div className="menutoggle text-white" onClick={()=> setToggle(!toggle)}>
          {settingIcon}
         </div>

         <ul className="absolute top-12 left-0 mt-3 w-full">
                <li className="mb-1.5">
                  <a className="p-1 flex items-end gap-5 cursor-pointer ">
                    <span className="block ">{ProfileIcon}</span>
                    <span className="block">{ltr?"profile":"الصفحة الشخصية"}</span>
                  </a>
                </li>

                <li className="mb-1.5">
                  <a className="p-1 flex items-end gap-5 cursor-pointer ">
                    <span className="block ">{EmailIcon}</span>
                    <span className="block  ">{ltr?"email":"البريد"}</span>
                  </a>
                </li>

                <li className="mb-1.5">
                  <a className="p-1 flex items-end gap-5 cursor-pointer ">
                    <span className="block ">{blogIcon}</span>
                    <span className="block  ">{ltr?"Messages":"الرسائل"}</span>
                  </a>
                </li>
                <li className="mb-1.5">
                  <a className="p-1 flex items-end gap-5 cursor-pointer ">
                    <span className="block  ">{settingIcon2}</span>
                    <span className="block ">{ltr?"setting":"الاعدادات"}</span>
                  </a>
                </li>
        </ul>
    </div>
  )
}


const NotifyArray =[
  {title:"Inventory",info:"A purchase has been completed for an inventory item.",titleAr:"المخزون",infoAr:"تم استكمال عملية شراء لمادة مخزون"},
  {title:"manage",info:"Coupon expiration",titleAr:"الادارة",infoAr:"انتهاء صلاحية كوبون"},
  {title:"menu",info:"The product is about to run out",titleAr:"القائمة",infoAr:" المنتجات على وشك النفاد"},
]
const Notification = ()=>{
    const {ltr} =useSelector(state => state.BarSlice)
    const [toggle,setToggle] = useState(false)
  return(
       <div  className={` Notification cursor-pointer flex items-center justify-center `}>
          <span onClick={()=> setToggle(prev => !prev)} className="size-10 notify-btn-bell flex justify-center items-center bg-purple-100 dark:bg-slate-800 border dark:border-purple-500 rounded-full">{Bell}</span>
          <div className={`notify p-2 overflow-y-scroll ${toggle ?"toggle":""}`}>
            <div className="p-2">
                   {NotifyArray.map((item,idx)=>{

                    return(
                      <div onClick={()=> setToggle(false)} style={{transitionDelay:`${idx * .2}s`}} key={idx} className="p-1 mb-1.5 bg-purple-50 list-notify">
                            <div className="flex items-center gap-2 mb-1">
                               <div className="size-10 rounded-full bg-purple-100 overflow-hidden ">
                                 <img src={img1} className="w-full h-full" alt=""/>
                               </div>
                           <div className="text-sm text-gray-600">{ltr?item.title:item.titleAr}</div>
                            </div>
                          <p className="text-sm text-gray-500">{ltr?item.info:item.infoAr}</p>
                       </div>
                    )
                   })}
            </div>
          </div>
       </div>
  )
}



const DarkMode = ()=>{
  const {dark} = useSelector((state)=> state.BarSlice)

 const dispatch = useDispatch()
  return(
    <div onClick={()=> {
      localStorage.setItem("dark",!dark)
      dispatch(handleDark(!dark))
    }} className="relative cursor-pointer border transition-all duration-300 w-20 h-9 overflow-hidden rounded-[20px] ">
         <div className={`h-full w-1/3 transition-all duration-300   absolute ${dark?"right-0 ":"left-0"} top-0 flex justify-center items-center `}>
              { dark?LightModeIcone:DarkModeIcon}
         </div>
    </div>
  )
}


const Dirction = ()=>{
  const {ltr} = useSelector((state)=> state.BarSlice)
  const dispatch = useDispatch()
  return(
    <div onClick={()=>{
      localStorage.setItem("ltr",!ltr)
      dispatch(handleDirction(!ltr))
    }} className="p-1 relative z-[99] uppercase font-bold cursor-pointer rounded-xl min-w-14 mx-2 flex justify-center items-center border border-purple-600 text-gray-700 dark:text-slate-100">
         {ltr?"rtl":"ltr"}
    </div>
  )
}