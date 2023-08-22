import React, { useState } from "react";
import { useNavigate } from "react-router";
import {useSelector, useDispatch } from "react-redux";
import { setIsLoggedIn, setToken, setUser } from "../slices/authSlice";
const LoginPage = () => {
    const [isEmailValid, setIsEmailValid] = useState(true);
    const [isPasswordValid, setIsPasswordValid] = useState(true);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
    
    const handleLogin = async (e) => {
        e.preventDefault();
        const validateEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
        if(!validateEmail) setIsEmailValid(false);
        const validatePassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/.test(password);
        if(!validatePassword) setIsPasswordValid(false);
        if(!validateEmail || !validatePassword) return;
        const resBody = JSON.stringify({email, password});
        const response = await fetch("http://localhost:8000/auth/login", {
            method: "POST",
            headers:{
                "Content-Type": "application/json",
            },
            body: resBody,
        });

        const data = await response.json();
        const { user, token } = await data;
        console.log(data);
        dispatch(setUser({user}));
        dispatch(setToken({token}));
        dispatch(setIsLoggedIn({status: true}));
        navigate("/");
    }
    return (
        <>
            {isLoggedIn && <h1>Hello</h1>}
            {!isLoggedIn && (
                <div className="min-h-screen min-w-screen flex flex-col">
                    <h1 className="text-4xl text-green-950 mx-auto mt-4 mb-6">Login</h1>
                    <form className="flex flex-col h-full w-full justify-center p-4 mx-auto" onSubmit={handleLogin}>
                        {!isEmailValid && <p className="text-xs font-light text-red-700 w-5/12 mx-auto">Enter a valid Email</p> }
                        <input value={email} onChange={(e) => setEmail(e.target.value)} onFocus={()=>{setIsEmailValid(true)}} className="email text-black text-xl rounded-sm w-5/12 px-6 h-12 mb-6 border border-gray-400 mx-auto hover:border-2 hover:border-green-900 " placeholder="Email"/>
                        <input value={password} onChange={(e) => setPassword(e.target.value)} onFocus={()=>{setIsPasswordValid(true)}} className="password text-black text-xl rounded-sm w-5/12 px-6 h-12 mb-2 border border-gray-400 mx-auto hover:border-2 hover:border-green-900 " placeholder="Password"/>
                        {!isPasswordValid && (<>
                            <p className="text-xs font-light text-red-700 h-fit w-5/12 mx-auto">Password should contain:</p>
                            <ul className="text-xs font-light text-red-700 h-fit w-5/12 mx-auto mb-2 px-2">
                                <li>7-15 characters</li>
                                <li>Atleast one uppercase character</li>
                                <li>Atleast one lowercase character</li>
                                <li>Atleast one number</li>
                                <li>Atleast one special character</li>
                            </ul>
                            
                        </>)}
                        <p className="mb-4 underline hover:text-green-800 text-gray-400 cursor-pointer w-5/12 h-fit mx-auto">Forgot your password?</p>
                        <button type="submit" className="rounded-lg w-28 h-12 mb-4 mx-auto bg-gradient-to-tr from-green-800 to-green-950 text-white text-xl hover:scale-105 hover:shadow-md hover:shadow-green-800/60">
                            Sign in
                        </button>
                        <p className="mb-4 underline hover:text-green-800 text-gray-400 cursor-pointer w-fit h-fit mx-auto" onClick={()=>navigate("/register")}>Create Account</p>
                    </form>
                </div>
            )}
        </>
        
    );
}
export default LoginPage;
