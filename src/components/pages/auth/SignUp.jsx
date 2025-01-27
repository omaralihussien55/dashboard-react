import React, {  useState } from 'react'
import INputGlobal from '../../bars/Inputglobal'
import { useRegisterMutation } from '../../../redux/feature/auth/authApiSlice'
import Cookies from "js-cookie";
import { useNavigate } from 'react-router-dom';
const SignUp = () => {
    const [inputuser,setInputUser] = useState({
        first_name:"",
        last_name:"",
        email:"",
        password:""
    })

    const [register,{isError,error}]= useRegisterMutation();
  const navigate = useNavigate()
    const handleSubmit = async (e)=>{
        e.preventDefault();
        try{
            console.log({
                first_name:inputuser.first_name,
                last_name:inputuser.last_name,
                email:inputuser.email,
                password:inputuser.password
            })
         const {data}=  await register({
               first_name:inputuser.first_name,
               last_name:inputuser.last_name,
               email:inputuser.email,
               password:inputuser.password
           })
           console.log("data",data)
           const accessToken = data?.accessToken
           if(accessToken){
            Cookies.set("accessToken",accessToken)
            navigate("/dashboard")
            setInputUser({
                first_name:"",
                last_name:"",
                email:"",
                password:""
            })
           }
        }catch(err){
         console.log(err)
        }
    }
  return (
    <div className='w-full bg-red-300'>
    <div className='p-3 w-1/2 mx-auto my-6'>
    <form onSubmit={handleSubmit}>
    <div className='mb-3'>
         <INputGlobal onChange={(e)=>{
            setInputUser(prev => {
                return {...prev,first_name:e.target.value}
            })
         }} value={inputuser.first_name}  name={"first_name"} lable={'first_name'} type='first_name' id={"first_name"} required placeholder={"first_name"} />
         
       </div>
       <div  className='mb-3'>
         <INputGlobal onChange={(e)=>{
            setInputUser(prev => {
                return {...prev,last_name:e.target.value}
            })
         }} value={inputuser.last_name} name={"last_name"} lable={"last_name"} type='last_name' id={"last_name"} required placeholder={"last_name"} />
       </div>
       <div className='mb-3'>
         <INputGlobal onChange={(e)=>{
            setInputUser(prev => {
                return {...prev,email:e.target.value}
            })
         }} value={inputuser.email} name={"email"} lable={'email'} type='email' id={"email"} required placeholder={"email"} />
         
       </div>
       <div  className='mb-3'>
         <INputGlobal onChange={(e)=>{
            setInputUser(prev => {
                return {...prev,password:e.target.value}
            })
         }} value={inputuser.password} name={"password"} lable={"password"} type='password' id={"password"} required placeholder={"password"} />
       </div>
       <div><button type="submit" className='p-2 rounded w-28 h-10 outline-none bg-purple-200 border'>signup</button></div>
    </form>
    <div className='p-2 my-3 w-1/2'>
         {isError && error && <p className='p-2 bg-red-700 text-white text-center'>{error.data.message}</p>}
    </div>
    </div>
    </div>
  )
}

export default SignUp
