import React, { useState } from "react";
import { useNavigate } from "react-router";
import {useSelector, useDispatch } from "react-redux";
import { setIsLoggedIn, setToken, setUser } from "../slices/authSlice";
import { IoPersonOutline } from "react-icons/io5";
import { resetShipping } from "../slices/shippingSlice";
import { resetCart } from "../slices/cartSlice";
const LoginPage = () => {
    const [isEmailValid, setIsEmailValid] = useState(true);
    const [isPasswordValid, setIsPasswordValid] = useState(true);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isInvalid, setIsInvalid] = useState(false);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
    const user = useSelector(state => state.auth.user) ;
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
        if(!user){
            setIsInvalid(true);
            return;
        }
        dispatch(setUser({user}));
        dispatch(setToken({token}));
        dispatch(setIsLoggedIn({status: true}));
        navigate("/");
    }
    const handleLogout = () => {
        dispatch(setIsLoggedIn({status:false}));
        dispatch(setUser({user:null}));
        dispatch(setToken({token:null}));
        dispatch(resetShipping());
        dispatch(resetCart());
    }
    return (
        <>
            {isLoggedIn && (
                <div className="flex flex-col min-h-fit min-w-fit p-10 ">
                    <h1 className="text-green-950 text-4xl mb-6">Account</h1>
                    <div className="flex">
                        <div className="flex group cursor-pointer">
                            <IoPersonOutline className="group-hover:scale-105 text-2xl mx-4 text-green-950" />
                            <h2 className="group-hover:scale-105 text-xl text-gray-500 hover:text-green-900 underline" onClick={handleLogout}>Log out</h2>
                        </div>
                    </div>
                    <div className="flex justify-between my-12">
                        <div className="flex flex-col">
                            <h1 className="text-green-950 text-2xl mb-4">Order History</h1> 
                            <p className="text-green-950 text-lg font-light mb-4">You haven't placed any orders yet.</p> 
                        </div>
                        <div className="flex flex-col">
                            <h1 className="text-green-950 text-2xl mb-4">Account Details</h1>
                            <p className="text-green-950 text-lg font-light mb-4">{user.name}</p> 
                        </div>
                    </div>
                </div>
            )}
            {!isLoggedIn && (
                <div className="min-h-fit min-w-screen flex flex-col">
                    <h1 className="text-4xl text-green-950 mx-auto mt-4 mb-6">Login</h1>
                    {isInvalid && <p className="text-xl text-center font-light text-red-700 w-5/12 mx-auto">Wrong credentials</p> }
                    <form className="flex flex-col h-full w-full justify-center p-4 mx-auto" onSubmit={handleLogin} onMouseDown={() => setIsInvalid(false)}>
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
