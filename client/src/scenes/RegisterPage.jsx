import React from 'react'
import { useNavigate } from 'react-router';

const RegisterPage = () => {
    const navigate = useNavigate();
    return (
        <div className="min-h-screen min-w-screen flex flex-col">
            <h1 className="text-4xl text-green-950 mx-auto mt-4 mb-6">Create Your Account</h1>
            <form className="flex flex-col h-full w-full justify-center p-4 mx-auto">
                <input className="first-name text-black text-xl rounded-sm w-5/12 px-6 h-12 mb-6 border border-gray-400 mx-auto hover:border-2 hover:border-green-900 " placeholder="First Name"/>
                <input className="last-name text-black text-xl rounded-sm w-5/12 px-6 h-12 mb-6 border border-gray-400 mx-auto hover:border-2 hover:border-green-900 " placeholder="Last Name"/>
                <input className="email text-black text-xl rounded-sm w-5/12 px-6 h-12 mb-6 border border-gray-400 mx-auto hover:border-2 hover:border-green-900 " placeholder="Email"/>
                <input className="password text-black text-xl rounded-sm w-5/12 px-6 h-12 mb-2 border border-gray-400 mx-auto hover:border-2 hover:border-green-900 " placeholder="Password"/>
                <button type="submit" className="rounded-lg w-28 h-12 mb-4 mx-auto bg-gradient-to-r from bg-green-800 to bg-green-950 text-white text-xl hover:scale-105 hover:shadow-sm hover:shadow-green-800/60">
                    Sign up
                </button>
                <p className="mb-4 underline hover:text-green-800 text-gray-400 cursor-pointer w-5/12 h-fit mx-auto" onClick={()=>navigate("/login")}>Already a member? Login</p>
            </form>
        </div>
    );
}

export default RegisterPage;