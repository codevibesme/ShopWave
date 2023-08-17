import React, { useState } from 'react'
import { useNavigate } from 'react-router';

const RegisterPage = () => {
    const navigate = useNavigate();

    const [isFirstNameValid, setIsFirstNameValid] = useState(true);
    const [isLastNameValid, setIsLastNameValid] = useState(true);
    const [isEmailValid, setIsEmailValid] = useState(true);
    const [isPasswordValid, setIsPasswordValid] = useState(true);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const handleSignup = (e) => {
        e.preventDefault();
        const validateEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
        if(!validateEmail) setIsEmailValid(false);
        const validatePassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/.test(password);
        if(!validatePassword) setIsPasswordValid(false);
        if(firstName === '')
            setIsFirstNameValid(false);
        if(lastName === '')
            setIsLastNameValid(false);
    }


    return (
        <div className="min-h-screen min-w-screen flex flex-col">
            <h1 className="text-4xl text-green-950 mx-auto mt-4 mb-6">Create Your Account</h1>
            <form className="flex flex-col h-full w-full justify-center p-4 mx-auto" onSubmit={handleSignup}>
                {!isFirstNameValid && <p className="text-xs font-light text-red-700 w-5/12 mx-auto">Enter First Name</p> }
                <input value={firstName} onChange={(e) => setFirstName(e.target.value)} onFocus={setIsFirstNameValid} className="first-name text-black text-xl rounded-sm w-5/12 px-6 h-12 mb-4 border border-gray-400 mx-auto hover:border-2 hover:border-green-900 " placeholder="First Name"/>
                {!isLastNameValid && <p className="text-xs font-light text-red-700 w-5/12 mx-auto">Enter Last Name</p> }
                <input value={lastName} onChange={(e) => setLastName(e.target.value)} onFocus={setIsLastNameValid} className="last-name text-black text-xl rounded-sm w-5/12 px-6 h-12 mb-4 border border-gray-400 mx-auto hover:border-2 hover:border-green-900 " placeholder="Last Name"/>
                {!isEmailValid && <p className="text-xs font-light text-red-700 w-5/12 mx-auto">Enter a valid Email</p> }
                <input value={email} onChange={(e) => setEmail(e.target.value)} onFocus={setIsEmailValid} className="email text-black text-xl rounded-sm w-5/12 px-6 h-12 mb-4 border border-gray-400 mx-auto hover:border-2 hover:border-green-900 " placeholder="Email"/>
                <input value={password} onChange={(e) => setPassword(e.target.value)} onFocus={setIsPasswordValid} className="password text-black text-xl rounded-sm w-5/12 px-6 h-12 mb-2 border border-gray-400 mx-auto hover:border-2 hover:border-green-900 " placeholder="Password"/>
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
                <button type="submit" className="rounded-lg w-28 h-12 mb-4  mx-auto bg-gradient-to-r from bg-green-800 to bg-green-950 text-white text-xl hover:scale-105 hover:shadow-sm hover:shadow-green-800/60 mt-4">
                    Sign up
                </button>
                <p className="mb-4 underline hover:text-green-800 text-gray-400 cursor-pointer w-5/12 h-fit mx-auto" onClick={()=>navigate("/login")}>Already a member? Login</p>
            </form>
        </div>
    );
}

export default RegisterPage;