import React,{useState} from 'react'
import INputGlobal from '../../bars/Inputglobal'
import { useLoginMutation } from '../../../redux/feature/auth/authApiSlice';
import Cookies from "js-cookie";
import { useNavigate } from 'react-router-dom';
const LoginForm = () => {
         const [inputuser,setInputUser] = useState({
             email:"",
             password:""
         })
    const [register,{isError,error}]= useLoginMutation();
    const navigate = useNavigate()
      const handleSubmit = async (e)=>{
          e.preventDefault();
          try{
           const {data}=  await register({
                 email:inputuser.email,
                 password:inputuser.password
             })
             const accessToken = data?.accessToken
             if(accessToken){
              Cookies.set("accessToken",accessToken)
              navigate("/dashboard")
              setInputUser({
                  email:"",
                  password:""
              })
             }
          }catch(err){
           console.log(err)
          }
      }
  return (
    <form onSubmit={handleSubmit}>
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
       <div><button type="submit" className='p-2 rounded w-28 h-10 outline-none bg-purple-200 border'>login</button></div>
       <div className='p-2 my-3 w-1/2'>
         {isError && error && <p className='p-2 bg-red-700 text-white text-center'>{error.data.message}</p>}
    </div>
    </form>
  )
}

export default LoginForm
