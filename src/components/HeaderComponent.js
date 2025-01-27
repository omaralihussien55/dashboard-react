


const HeaderComponent = ({children,name})=>{

    return(
        <div className="p-2 bg-white  dark:bg-slate-800 dark:text-slate-100 ">
            <div className="flex items-center justify-between ">
                <p className="p-1 text-gray-500 dark:text-slate-300">{name}</p>
                <div className="dark:text-slate-100 dark:bg-slate-500/10">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default HeaderComponent


