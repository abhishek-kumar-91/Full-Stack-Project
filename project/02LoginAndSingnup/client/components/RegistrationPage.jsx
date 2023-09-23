import React from 'react'
import { Link } from 'react-router-dom'

function RegistrationPage() {
  return (
    <>
    <div className="h-[100vh] w-full flex justify-center items-center gap-x-10">
        <div className="h-[450px] w-[40vw] border-2 rounded-xl shadow-sm p-6  shadow-white overflow-hidden bg-center">
          <h1 className="text-2xl text-center pt-20 ">Welcome To Agoda</h1>
          <h1 className="text-2xl text-center pb-20">Registration Page</h1>
          <h3 className="font-medium text-base text-gray-700 mb-2">If you are already registered</h3>
         <Link to="/login"><button 
          className="w-full h-16 bg-orange-400 rounded-lg text-xl font-bold text-white hover:bg-orange-600 duration-200 ease-in"
          >Log In</button></Link> 
          
        </div>

        <div className="h-[450px] w-[30vw] border-2 border-grey-400 rounded-xl shadow-sm sha shadow-white ">
          <div className="w-full h-auto overflow-hidden">
            {/* form details is here */}

            <form className="flex flex-col p-5">
              <label htmlFor="firstName" className=" font-bold text-gray-500">
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                placeholder="Ex. John.."
                className="outline-none border-b-2  border-orange-400 h-8  p-4 font-medium"
              />
              <label htmlFor="lastName" className=" font-bold text-gray-500">
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                placeholder="Ex. Doe.."
                className="outline-none border-b-2  border-orange-400 h-8 p-4 font-medium"
              />
              <label htmlFor="email" className=" font-bold text-gray-500">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="Ex. john@gmail.com"
                className="outline-none border-b-2  border-orange-500 h-8  p-4 font-medium"
              />
              <label htmlFor="phoneNumber" className=" font-bold text-gray-500">
                Phone no
              </label>
              <input
                type="number"
                name="phoneNumber"
                placeholder="Ex. 8830026482"
                className="outline-none border-b-2  border-orange-400 h-8  p-4 font-medium"
              />
              <label htmlFor="password" className=" font-bold text-gray-500">
                Password
              </label>
              <input
                type="password"
                name="password"
                placeholder="Ex. johndoe#a5"
                className="outline-none border-b-2  border-orange-400 h-8  p-4 font-medium"
              />
              <label htmlFor="cnfPassword" className=" font-bold text-gray-500">
                Confirm Password
              </label>
              <input
                type="text"
                name="cnfPassword"
                placeholder="Ex. johndoe#a5"
                className="outline-none border-b-2  border-orange-400 h-8  p-4 font-medium"
              />
            <input
                type="submit"
                name="submit"
                value={"Submit"}
                className="outline-none bg-orange-400 text-white mt-4 p-3 rounded-lg font-bold cursor-pointer  hover:bg-orange-600 duration-200 ease-in"
              />
              
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default RegistrationPage