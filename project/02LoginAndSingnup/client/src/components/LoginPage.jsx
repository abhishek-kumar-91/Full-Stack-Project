import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios';

function LoginPage() {

  const [user, setUser] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate();

  const handleSubmit = (e) =>{
    e.preventDefault();

    axios.post("http://localhost:8000/login", {user, password})
    .then((result) =>{
      console.log(result)
      if(result.data == "success"){
        navigate("/home")
      }
      
    }).catch(err => console.log(err));
  }
  return (
    <>
    <div className="h-[100vh] w-full flex justify-center items-center gap-x-10">
    <div className="h-[450px] w-[40vw] border-2 rounded-xl shadow-sm p-6  shadow-white overflow-hidden bg-center">
      <h1 className="text-2xl text-center pt-20 ">Welcome To Agoda</h1>
      <h1 className="text-2xl text-center pb-20">Login Page</h1>
      <h3 className="font-medium text-base text-gray-700 mb-2">If you are new user please register.</h3>
      <Link to="/registration"><button 
      className="w-full h-16 bg-orange-400 rounded-lg text-xl font-bold text-white hover:bg-orange-600 duration-200 ease-in"
      >Registration</button></Link>
      
    </div>

    <div className="h-[450px] w-[30vw] border-2 border-grey-400 rounded-xl shadow-sm sha shadow-white flex items-center ">
      <div className="w-full h-auto overflow-hidden ">
        {/* form details is here */}

        <form onSubmit={handleSubmit} className="flex flex-col p-5 gap-10">
          <label htmlFor="email" className=" font-bold text-gray-500">
            Email
          </label>
          <input
            type="email"
            name="email"
            placeholder="Ex. john@gmail.com"
            className="outline-none border-b-2  border-orange-500 h-8  p-4 font-medium"
            onChange={(e)=>setUser(e.target.value)}
          />
          
          <label htmlFor="password" className=" font-bold text-gray-500">
            Password
          </label>
          <input
            type="password"
            name="password"
            placeholder="Ex. johndoe#a5"
            className="outline-none border-b-2  border-orange-400 h-8  p-4 font-medium"
            onChange={(e)=>setPassword(e.target.value)}
          />
          
        <button
            type="submit"
           
            className="outline-none bg-orange-400 text-white mt-4 p-3 rounded-lg font-bold cursor-pointer  hover:bg-orange-600 duration-200 ease-in"
          >LogIn</button>
        </form>
      </div>
    </div>
  </div></>
  )
}

export default LoginPage