import React, { useState } from 'react'
import {Country, State, City} from "country-state-city";
import { useNavigate } from 'react-router';
import { setName, setAddress as setShipAddress , setCountry as setShipCountry, setCity as setShipCity, setState as setShipState, setPhone as setShipPhone, setPincode as setShipPincode, setEmail as setShippingEmail } from '../slices/shippingSlice';
import { useDispatch } from 'react-redux';
import OrderDetails from '../components/OrderDetails';
const InformationPage = () => {
    const navigate = useNavigate();
    const [isFirstNameValid, setIsFirstNameValid] = useState(true);
    const [isLastNameValid, setIsLastNameValid] = useState(true);
    const [isCountryValid, setIsCountryValid] = useState(true);
    const [isAddressValid, setIsAddressValid] = useState(true);
    const [isStateValid, setIsStateValid] = useState(true);
    const [isCityValid, setIsCityValid] = useState(true);
    const [isPincodeValid, setIsPincodeValid] = useState(true);
    const [isPhoneValid, setIsPhoneValid] = useState(true);
    const [isEmailValid, setIsEmailValid] = useState(true);

    const [country, setCountry] = useState('');
    const [state, setState] = useState('');
    const [city, setCity] = useState('');
    const [stateList, setStateList] = useState([]);
    const [cityList, setCityList] = useState([]);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [countryCode, setCountryCode] = useState('');
    const [pincode, setPincode] = useState('');
    const [phoneCode, setPhoneCode] = useState('');
    const [email, setEmail] =useState('');

    const countryList = Country.getAllCountries();
    const dispatch = useDispatch();
    const handleCountrySelect =  (e) => {
        const selectedCountry = JSON.parse(e.target.value);
        if(selectedCountry.select){
            setCountry('');
            setStateList('');
            setState('');
            setCityList('');
            setCity('');
            setCountryCode('');
            return;
        }
        console.log(selectedCountry);
        setCountry(selectedCountry.name);
        const states = State.getStatesOfCountry(selectedCountry.isoCode);
        setCountryCode(selectedCountry.isoCode);
        console.log(states);
        setStateList(states);
        setPhoneCode(selectedCountry.phonecode);
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
        let stopSubmit=0;
        e.preventDefault();
        if(country === "select" || country === ''){
            setIsCountryValid(false);
            stopSubmit=1;
        }
        if(state === "select" || state === ''){
            setIsStateValid(false);
            stopSubmit=1;
        }
        if(city === "select" || city === ''){
            setIsCityValid(false);
            stopSubmit=1;
        }
        if(firstName === ''){
            setIsFirstNameValid(false);
            stopSubmit=1;
        }
        if(lastName === ''){
            setIsLastNameValid(false);
            stopSubmit=1;
        }
        if(address === ''){
            setIsAddressValid(false);
            stopSubmit=1;
        }
        if(pincode === '' || /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(pincode) || /[a-z\A-Z]/.test(pincode) ){
            setIsPincodeValid(false);
            stopSubmit=1;
        }
        const validateEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
        if(!validateEmail){
            setIsEmailValid(false);  
            stopSubmit=1;
        }
        if(phone.length !== 10 || /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(phone) || /[a-z\A-Z]/.test(phone) ||  phone === ''){
            setIsPhoneValid(false);
            stopSubmit=1;
        }
        if(stopSubmit) return;
        dispatch(setName({name:`${firstName} ${lastName}`}));
        dispatch(setShipAddress({address}));
        dispatch(setShipCountry({country}));
        dispatch(setShipState({state}));
        dispatch(setShipCity({city}));
        dispatch(setShipPhone({phone: `${phoneCode} ${phone}`}));
        dispatch(setShippingEmail({email}));
        dispatch(setShipPincode({pincode}));
        navigate("/checkout/shipping");
    }

    return (
        <div className='min-h-screen w-full flex'>
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
                    <div className='flex w-full relative justify-between'>
                        {country && (
                            <>
                                <div className='flex flex-col  min-w-fit justify-center me-3 absolute left-4 top-8'>
                                    <div className='flex w-full'>
                                        <img className='me-2 h-8 w-8' src={`http://purecatamphetamine.github.io/country-flag-icons/3x2/${countryCode}.svg`} alt="flag" />
                                        <div className='flex flex-col justify-center w-full'>
                                            <p className='text-green-950 text-md w-fit'>{phoneCode}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='w-2/5'>
                                    <p className='text-gray-600 font-light text-xs relative top-5 left-4 h-fit w-fit'>Phone</p>
                                    <input onFocus={()=>setIsPhoneValid(true)} value={phone} onChange={(e)=>setPhone(e.target.value)} className='peer text-lg rounded-md h-12 w-full ps-20 pe-4 pt-4 border border-green-950 focus:outline-none'/>
                                    {!isPhoneValid && 
                                        <p className='text-gray-600 font-light text-xs h-fit w-fit text-red-700'>Enter valid Phone number</p>
                                    }
                                </div>
                            </>
                        )}
                        <div className={`${country? ' w-2/4' : 'w-full'}`}>
                            <p className='text-gray-600 font-light text-xs relative top-5 left-4 h-fit w-fit'>Email</p>
                            <input onFocus={()=>setIsEmailValid(true)} value={email} onChange={(e)=>setEmail(e.target.value)} className='peer text-lg rounded-md h-12 w-full px-4 pt-4 border border-green-950 focus:outline-none'/>
                            {!isEmailValid && 
                                <p className='text-gray-600 font-light text-xs h-fit w-fit text-red-700'>Enter valid Email</p>
                            }
                        </div>
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
                        <button type="submit" className='text-white bg-gradient-to-tr from-green-800 to-green-950 rounded-md h-12 w-fit px-4 hover:scale-105 hover:shadow-md hover:shadow-green-700/50'>Continue to Shipping</button>
                    </div>
                </form>
            </div>
            <div className='w-1/2 py-10 ps-10 pe-32 min-h-full bg-stone-100'>
                <OrderDetails />
            </div>
        </div>
    )
}

export default InformationPage;