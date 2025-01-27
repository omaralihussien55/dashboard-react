import React from "react"
import { userIcon } from "./bars/SideBar"
import { useSelector } from "react-redux"

const bankoticon = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
<path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
</svg>

const truck = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
<path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
</svg>

const profit = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
<path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>

const StatiArray =[
    {sale:"56715k",name:"users",nameAr:"المستخدمين",icon:userIcon,bg:"bg-orange-50",color:"text-orange-700"},
    {sale:"56m",name:"weakly sales",nameAr:"المبيعات اسبوعيا",icon:bankoticon,bg:"bg-blue-50",color:"text-blue-700"},
    {sale:"567k",name:"producs",nameAr:"المنتجات",icon:truck,bg:"bg-purple-50",color:"text-purple-700"},
    {sale:"10m",name:"profit",nameAr:"الارباح",icon:profit,bg:"bg-green-50",color:"text-green-700"},
]
const Statistics = ()=>{
  const {ltr} =useSelector(state => state.BarSlice)

    return(
        <div className="mb-5 ">
             <div className="mb-3">
                <h4 className="p-1 text-2xl font-bold text-gray-600 dark:text-slate-300  ">{ltr?"Hi , Welcome ":"مرحبا"}</h4>
             </div>
          
             <div className="flex  flex-wrap ">
                  {StatiArray.map((item,idx)=>{
                    return(
                        <div key={idx} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 m-h-[130px] mb-1.5">
                        <div className={`w-[98%] h-full flex flex-col p-4 rounded-lg  items-center justify-center dark:shadow-xl dark:bg-slate-500/10   ${item.color} ${item.bg}`}>
                          <div className={`size-12 mb-2 dark:text-slate-100 rounded-full flex items-center shadow-xl justify-center `}>
                               {item.icon}
                          </div>
                          <div className="text-center">
                              <h5 className="text-2xl font-bold mb-1.5 dark:text-slate-200">{ltr?item.name:item.nameAr}</h5>
                              <p className="p-1 mb-1 dark:text-slate-400">{item.sale}</p>
                          </div>
                        </div>
                      </div>
                    )
                  })}


             </div>


        </div>
    )
}

export default Statistics