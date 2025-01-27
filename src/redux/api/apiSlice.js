import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import Cookies from "js-cookie";

const baseQuery = fetchBaseQuery({
    baseUrl:"http://localhost:5000",
    credentials:"include",
    prepareHeaders:(headers)=>{
         const token = Cookies.get("accessToken");

         if(token){
            headers.set("authorization",`Bearer ${token}`)
         }

         return headers
    }
})

const baseQueryWithReauth = async (args,api,extraOption)=>{
let result = await baseQuery(args,api,extraOption);
if(result?.error?.status === 403){
    const refreshResult = await baseQuery("/auth/refresh",api,extraOption);
    if(refreshResult?.data){
        const {accessToken} = refreshResult.data;
        Cookies.set("accessToken",accessToken);

        result  =  await baseQuery(args,api,extraOption);
    }else{
        if(refreshResult?.error?.status === 403){
             refreshResult.error.data.message ="your login expire"
        }
       return refreshResult
    }

}
return result
}

export const apiSlice = createApi({
    reducerPath: 'apiSlice',
    baseQuery:baseQueryWithReauth,
    endpoints: (builder) => ({
      
    }),
  })


// export const apiSlice = createApi({
//     baseQuery,
//     endpoints:()=>{}
// })