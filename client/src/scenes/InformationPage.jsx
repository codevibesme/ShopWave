import React, { useState } from 'react'
import {Country, State, City} from "country-state-city";
import { useNavigate } from 'react-router';
const InformationPage = () => {
    const navigate = useNavigate();
    const [isFirstNameValid, setIsFirstNameValid] = useState(true);
    const [isLastNameValid, setIsLastNameValid] = useState(true);
    const [isCountryValid, setIsCountryValid] = useState(true);
    const [isAddressValid, setIsAddressValid] = useState(true);
    const [isStateValid, setIsStateValid] = useState(true);
    const [isCityValid, setIsCityValid] = useState(true);
    const [isPincodeValid, setIsPincodeValid] = useState(true);
    
    const [country, setCountry] = useState('');
    const [state, setState] = useState('');
    const [city, setCity] = useState('');
    const [stateList, setStateList] = useState([]);
    const [cityList, setCityList] = useState([]);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [pincode, setPincode] = useState('');
    const [phoneCode, setPhoneCode] = useState('');

    const countryList = Country.getAllCountries();

    const handleCountrySelect =  (e) => {
        const selectedCountry = JSON.parse(e.target.value);
        if(selectedCountry.select){
            setCountry('');
            setStateList('');
            setState('');
            setCityList('');
            setCity('');
            return;
        }
        console.log(selectedCountry);
        setCountry(selectedCountry.name);
        const states = State.getStatesOfCountry(selectedCountry.isoCode);
        console.log(states);
        setStateList(states);
        setPhoneCode(selectedCountry.phoneCode);
    }

    const handleStateChange = (e) => {
        const selectedState = JSON.parse(e.target.value);
        if(selectedState.select){
            setState('');
            setCityList('');
            setCity('');
            return;
        }
        setState(selectedState.name);
        const cities = City.getCitiesOfState(selectedState.countryCode, selectedState.isoCode);
        setCityList(cities);
    }

    const handleCityChange = (e) => {
        const selectedCity = JSON.parse(e.target.value);
        if(selectedCity.select){
            setCity('');
            return;
        }
        setCity(selectedCity.name);
        
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(country === "select" || country === '')
            setIsCountryValid(false);
        if(state === "select" || state === '')
            setIsStateValid(false);
        if(city === "select" || city === '')
            setIsCityValid(false);
        if(firstName === '')
            setIsFirstNameValid(false);
        if(lastName === '')
            setIsLastNameValid(false);
        if(address === '')
            setIsAddressValid(false);
        if(pincode === '')
            setIsPincodeValid(false);
    }

    return (
        <div className='w-screen h-screen flex'>
            <div className='w-1/2 h-full p-10 flex flex-col'>
                <h1 className='text-3xl text-green-950 font-light mb-3'>ShopWave</h1>
                <h1 className='text-sm text-gray-500 mb-4 cursor-default'><span className='cursor-pointer text-blue-500' onClick={()=>navigate("/cart")}>Cart</span> &gt; <span className=' text-black'>Information</span> &gt; Shipping &gt; Payment</h1>
                <form className='flex flex-col' onSubmit={handleSubmit}>
                    <div>
                        <p className='text-gray-600 font-light text-xs relative top-5 left-4 h-fit w-fit'>Country/region</p>
                        <select onFocus={()=>setIsCountryValid(true)} className='peer rounded-md h-12 px-4 pt-4 w-full border-green-950' onChange={handleCountrySelect}>
                            <option defaultValue value={JSON.stringify({select: "select"})}>Select</option>
                            {countryList.map(item => (
                                <option value={JSON.stringify(item)}>{item.name}</option>
                            ))}
                        </select>
                        {!isCountryValid && 
                            <p className='text-gray-600 font-light text-xs h-fit w-fit text-red-700'>Select Country/Region</p>
                        }
                    </div>
                    <div className='flex justify-between'>
                        <div className='w-fit'>
                            <p className='text-gray-600 font-light text-xs relative top-5 left-4 h-fit w-fit'>First Name</p>
                            <input onFocus={()=>setIsFirstNameValid(true)} value={firstName} onChange={(e) => setFirstName(e.target.value)} className='peer rounded-md h-12 w-fit text-green-950 text-lg px-4 pt-4 border border-green-950 focus:outline-none'/>
                            {!isFirstNameValid && 
                                <p className='text-gray-600 font-light text-xs h-fit w-fit text-red-700 !peer-focus'>Enter First Name</p>
                            }
                        </div>
                        <div className='w-fit'>
                            <p className='text-gray-600 font-light text-xs relative top-5 left-4 h-fit w-fit'>Last Name</p>
                            <input onFocus={()=>setIsLastNameValid(true)} value={lastName} onChange={(e)=>setLastName(e.target.value)} className='peer rounded-md h-12 w-fit text-green-950 text-lg px-4 pt-4 border border-green-950 focus:outline-none'/>
                            {!isLastNameValid && 
                                <p className='text-gray-600 font-light text-xs h-fit w-fit text-red-700'>Enter Last Name</p>
                            }
                        </div>
                    </div>
                    <div>
                        <p className='text-gray-600 font-light text-xs relative top-5 left-4 h-fit w-fit'>Address</p>
                        <input onFocus={()=>setIsAddressValid(true)} value={address} onChange={(e)=>setAddress(e.target.value)} className='peer text-lg rounded-md h-12 w-full px-4 pt-4 border border-green-950 focus:outline-none'/>
                        {!isAddressValid && 
                            <p className='text-gray-600 font-light text-xs h-fit w-fit text-red-700'>Enter Address</p>
                        }
                    </div>
                    <div className='flex w-full justify-between'>
                        <div className='w-fit'>
                            <p className='text-gray-600 font-light text-xs relative top-5 left-4 h-fit w-fit'>State</p>
                            <select onFocus={()=>setIsStateValid(true)} className='rounded-md h-12 px-4 pt-4 w-40 border-green-950 peer' onChange={handleStateChange}>
                                <option defaultValue value={JSON.stringify({select: "select"})}>Select</option>
                                {stateList.length!==0 && stateList.map(item => (
                                    <option value={JSON.stringify(item)}>{item.name}</option>
                                ))}
                            </select>
                            {!isStateValid && 
                                <p className='text-gray-600 font-light text-xs h-fit w-fit text-red-700'>Select State</p>
                            }
                        </div>
                        <div className='w-fit'>
                            <p className='text-gray-600 font-light text-xs relative top-5 left-4 h-fit w-fit'>City</p>
                            <select onFocus={()=>setIsCityValid(true)} className='rounded-md h-12 px-4 pt-4 w-40 border-green-950 peer' onChange={handleCityChange}>
                                <option defaultValue value={JSON.stringify({select: "select"})}>Select</option>
                                {cityList.length!==0 && cityList.map(item => (
                                    <option value={JSON.stringify(item)}>{item.name}</option>
                                ))}
                            </select>
                            {!isCityValid && 
                                <p className='text-gray-600 font-light text-xs h-fit w-fit text-red-700'>Select Country</p>
                            }
                        </div>
                        <div className='w-fit'>
                            <p className='text-gray-600 font-light text-xs relative top-5 left-4 h-fit w-fit'>Pincode</p>
                            <input onFocus={()=>setIsPincodeValid(true)} value={pincode} onChange={(e)=>setPincode(e.target.value)} className='peer rounded-md h-12 w-40 text-green-950 text-lg px-4 pt-4 border border-green-950 focus:outline-none'/>
                            {!isPincodeValid && 
                                <p className='text-gray-600 font-light text-xs h-fit w-fit text-red-700'>Enter Pincode</p>
                            }
                        </div>
                    </div>
                    <div className='mt-12 flex justify-between'>
                        <p className='text-lg text-blue-600 underline cursor-pointer' onClick={()=>navigate("/cart")}>Return to cart</p>
                        <button type="submit" className='text-white bg-gradient-to-r from bg-green-950 to bg-green-600 rounded-md h-12 w-fit px-4 hover:scale-105 hover:shadow-md hover:shadow-green-700/50'>Continue to Shipping</button>
                    </div>
                </form>
            </div>
            <div className='w-1/2 h-full bg-gradient-to-r from bg-gray-200 to bg-stone-200'></div>
        </div>
    )
}

export default InformationPage;