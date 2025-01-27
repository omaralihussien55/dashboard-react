
import { useDispatch, useSelector } from "react-redux"
import "./bars.modules.css"
import img1 from "../../logo.svg"
import { useState } from "react"
import { handleActive } from "../../redux/barStore"
import { NavLink, useNavigate } from "react-router-dom"
export const userIcon = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 dark:text-slate-400">
<path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
</svg>

const Arrow = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
<path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
</svg>

const btnToggleIcon = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 text-gray-400 dark:text-slate-400">
<path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
</svg>

const chartIcon = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 dark:text-slate-400">
<path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
</svg>

const iconInventory = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 dark:text-slate-400">
<path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z" />
</svg>

const iconMange = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 dark:text-slate-400">
<path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" />
</svg>

const iconmenu =<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 dark:text-slate-400">
<path strokeLinecap="round" strokeLinejoin="round" d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.871c1.355 0 2.697.056 4.024.166C17.155 8.51 18 9.473 18 10.608v2.513M15 8.25v-1.5m-6 1.5v-1.5m12 9.75-1.5.75a3.354 3.354 0 0 1-3 0 3.354 3.354 0 0 0-3 0 3.354 3.354 0 0 1-3 0 3.354 3.354 0 0 0-3 0 3.354 3.354 0 0 1-3 0L3 16.5m15-3.379a48.474 48.474 0 0 0-6-.371c-2.032 0-4.034.126-6 .371m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.169c0 .621-.504 1.125-1.125 1.125H4.125A1.125 1.125 0 0 1 3 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 0 1 6 13.12M12.265 3.11a.375.375 0 1 1-.53 0L12 2.845l.265.265Zm-3 0a.375.375 0 1 1-.53 0L9 2.845l.265.265Zm6 0a.375.375 0 1 1-.53 0L15 2.845l.265.265Z" />
</svg>

const iconSetting =<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 dark:text-slate-400">
<path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
<path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
</svg>

const SideBarArray = [
{en:"Dashboard",ar:"لوحة التحكم",icon:chartIcon,arr:[],nav:"/"},
{en:"Inventory",ar:"المخزون",icon:iconInventory,arr:[{en:"items",ar:"مواد المخزون",nav:"/items"},{en:"Supplier",ar:"الموردين",nav:"/Supplier"},{en:"Purchases",ar:"المشتريات",nav:"/Purchases"},{en:"warehouse",ar:"المخزن",nav:"/warehouse"},]},
{en:"Manage",ar:"الادارة",icon:iconMange,arr:[{en:"coupons",ar:"الكوبونات",nav:"/coupons"},{en:"events",ar:"الاحداث",nav:"/events"},{en:"Gifts",ar:"الهدايا",nav:"/gift"}]},
{en:"Menu",ar:"القائمة",icon:iconmenu,arr:[{en:"Products",ar:"المنتجات",nav:"/Products"},{en:"Modifiers",ar:"الاضافات",nav:"/Modifiers"}]},
{en:"setting",ar:"الاعدادت",icon:iconSetting,arr:[],nav:"/setting"},
]

const SideBar = ()=>{
    const [indexOpen,setIndexOpen] = useState(null);
    const {active,ltr} = useSelector((state) => state.BarSlice)
    const dispatch = useDispatch()
   const navigate = useNavigate()
    const HandleOpenArrow = (idx)=>{
         if(indexOpen == idx){
            setIndexOpen(null)
         }else{
            setIndexOpen(idx)
         }
    }
    return(
        <div className={`SideBar shrink-0 ${active?"active":""} dark:bg-slate-800 dark:text-slate-50 `}>
            <div className="btn-toogle" onClick={()=> dispatch(handleActive(!active))}>
                {btnToggleIcon}
            </div>
            <div className="flex items-center gap-6 mb-3">
                <div className="size-10 rounded-full overflow-hidden shrink-0">
                    <img src={img1} className="w-full h-full"  alt=""/>
                </div>
                 <p className="text-gray-800 title">omar ali</p>
            </div>

            <div className="">
                <ul className="p-0 m-0 ul-lists ">
                    {SideBarArray.map((item,idx)=>{
                        return(
                            <li onClick={()=>{
                                if(item.nav){
                                    navigate(item.nav)
                                    HandleOpenArrow(idx)
                                }else{
                                   HandleOpenArrow(idx)
                                }
                            }
                            } key={idx} className="p-1.5  relative li-list hover:bg-gray-100 cursor-pointer rounded-md mb-2.5">
                                 <div className={`flex content-list items-center gap-4 dark:text-slate-400 text-gray-600 ${indexOpen == idx?"add-color":""}`}>
                                    <span className="block ">{item.icon}</span>
                                    <span className="block grow hidd-item ">{ltr?item.en:item.ar}</span>
                                    {item.arr.length > 0&& <span className="block  hidd-item ">{Arrow}</span>}
                                  </div>
                          
                                  {indexOpen == idx &&<>
                                     {item.arr?.length > 0 && <ListChild arr={item.arr} />}
                                   </>}
                                   
                           </li>
                          
                         
                        )
                    })}

                </ul>
            </div>
        </div>
    )
}



export default SideBar

const ListChild = ({arr})=>{
const {ltr} = useSelector(state=> state.BarSlice)
    // const navigate = useNavigate()
    return(
        <ul className="ul-Lists-Child px-5">
            {arr.map((items,idx)=>{
                return(
                    <>
                    <li key={idx} 
                    className="li-List-Child mb-1 p-1 text-gray-400">
                        <NavLink 
                        to={items.nav}
                        >
                        {ltr?items.en:items.ar}
                        </NavLink>
                        
                        </li>
                        </>
                )
            })}
        </ul>
    )
}

<div className="parent">
<p>child</p>
</div>