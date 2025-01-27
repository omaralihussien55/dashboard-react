import { apiSlice } from "../../api/apiSlice";

export const authApiSlice = apiSlice.injectEndpoints({
    endpoints:(builder)=>({
        register:builder.mutation({
            query:(cridtional)=>{
                console.log("cridtional",cridtional)
                return ({
                
                    url:"/auth/register",
                    method:"POST",
                    body:{...cridtional}
                })
                
            },
            // providesTags:["User"],
        }),
        login:builder.mutation({
            query:(cridtional)=> ({
                
                url:"/auth/login",
                method:"POST",
                body:{...cridtional}
            }) 
        })
    })
})

export const {useRegisterMutation,useLoginMutation} = authApiSlice