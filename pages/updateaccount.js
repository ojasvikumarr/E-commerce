import React from 'react'
import { Input } from './components/ui/input';
import { Label } from './components/ui/label';
import { useRouter  } from 'next/router';
import { useState } from 'react';
import { cn } from './utils/cn';
import { IoMdCloseCircle } from "react-icons/io";
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import { IoBagCheckSharp } from "react-icons/io5";
import { useEffect } from 'react';

const updateaccount = ({ cart, addToCart, removeFromCart, clearCart, subtotal }) => {
    const router = useRouter()
  const [name, setname] = useState('')
  const [email, setemail] = useState('')
  const [pincode, setpincode] = useState('')
  const [address, setaddress] = useState('')
  const [state, setstate] = useState('')
  const [phone, setphone] = useState('')
  const [city, setcity] = useState('')
  const [disabled, setDisabled] = useState(true)

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      fetchUserData(token);
    }
  }, [])

    const handleChange = async (e) => {
        if (e.target.name == 'name') {
          setname(e.target.value)
        }
        else if (e.target.name == 'email') {
          setemail(e.target.value)
        }
        else if (e.target.name == 'pincode') {
          setpincode(e.target.value)
          if(e.target.value.length == 6){
            let pins = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/pincode`)
            let pinjson = await pins.json();
            if(Object.keys(pinjson).includes(e.target.value)){
              setstate(pinjson[e.target.value][1])
              setcity(pinjson[e.target.value][0])
            }
          }else{
            setstate('')
            setcity('')
          }
        }
        else if (e.target.name == 'address') {
          setaddress(e.target.value)
        }
        else if (e.target.name == 'state') {
          setstate(e.target.value)
        }
        else if (e.target.name == 'phone') {
          setphone(e.target.value)
        }
        else if (e.target.name == 'city') {
          setcity(e.target.value)
        }
        if (name.length > 2 && email.length > 2 && pincode.length > 2 && state.length > 2 && city.length > 2 && address.length > 2) {
          setDisabled(false);
        } else {
          setDisabled(true);
        }
      }
      const fetchUserData = async (token) => {
        try {
          const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/user`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ token }),
          });
    
          const result = await res.json();
          if (result.email) {
            setname(result.name);
            setemail(result.email);
          } else {
            console.error("Token verification failed:", result.error);
    
              // Prompt user to log in again
              console.log("Session expired, please log in again.");
              localStorage.removeItem('token')
              toast.error(`Session expired, please log in again.${result.error}`, {
                position: "top-left",
                autoClose: 4500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "light",
                transition: Slide,
              });
              // You can add your logic here to redirect the user to the login page or show a modal
            localStorage.removeItem('token');
            setTimeout(() => {
                router.push('/login');
            }, 3500);
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      };
  return (
    <div className="container m-1 mx-10 mb-32">
        <h1 className='text-3xl text-center my-8 font-bold'>Update Your Account</h1>
      <h2 className='font-semibold text-xl'>1.Delivery Details</h2>
      <div className='mx-auto flex'>
        <div className="mx-2 w-1/2 mb-4">
          <label htmlFor="Name" className="leading-7 text-m text-gray-600">Name</label>
          <Input onChange={handleChange} placeholder='Enter your name' value={name} id="Name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-indigo-200 h-10 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" />
        </div>
        <div className="mx-2 w-1/2 mb-4">
          <label htmlFor="Email" className="leading-7 text-m text-gray-600">Email</label>
          <Input onChange={handleChange} value={email} id="Email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-indigo-200 h-10 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" />
        </div>
      
      </div>
      <div className="mx-2 w-full mb-4">
        <label htmlFor="Address" className="leading-7 text-m text-gray-600">Address</label>
        <textarea onChange={handleChange} placeholder='Address please' value={address} id="Address" name="address" className=" flex w-full border-none bg-gray-100    shadow-input     file:border-0 file:bg-transparent 
          file:text-sm file:font-medium placeholder:text-neutral-400 dark:placeholder-text-neutral-600 
          focus-visible:outline-none focus-visible:ring-[2px]  focus-visible:ring-neutral-400 dark:focus-visible:ring-neutral-600
           disabled:cursor-not-allowed disabled:opacity-50
           dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]
           group-hover/input:shadow-none transition duration-400  rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-indigo-200 h-20 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 duration-200 ease-in-out"></textarea>
      </div>
      <div className='mx-auto flex'>
        <div className="mx-2 w-1/2 mb-2">
          <label htmlFor="Pincode" className="leading-7 text-m text-gray-600">Pincode</label>
          <Input onChange={handleChange} value={pincode} placeholder='Enter the pincode' id="Pincode" name="pincode" className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-indigo-200 h-10 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" />
        </div>
        <div className="mx-2 w-1/2 mb-2">
          <label htmlFor="State" className="leading-7 text-m text-gray-600">State</label>
          <Input onChange={handleChange} value={state} id="State" name="state" className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-indigo-200 h-10 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" />
        </div>
      </div>
      <div className='mx-auto flex'>
        <div className="mx-2 w-1/2 mb-2">
          <label htmlFor="Phone" className="leading-7 text-m text-gray-600">Phone</label>
          <Input onChange={handleChange} value={phone} placeholder='Enter your 10 digit phone number' id="Phone" name="phone" className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-indigo-200 h-10 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" />
        </div>
        <div className="mx-1 w-1/2 mb-2">
          <label htmlFor="City" className="leading-7 text-m text-gray-600">City</label>
          <Input onChange={handleChange} value={city} id="City" name="city" className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-indigo-200 h-10 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" />
        </div>
      </div>
      {/* <h2 className='font-semibold text-xl'>2.Review Cart Items & Pay</h2>
      <div
        className="w-full bg-white-300 p-10 shadow-lg "
      >
        <h2 className="font-bold text-xl">Shopping Cart</h2>
        <span
          className="absolute top-4 right-2 cursor-pointer"
        >
          <IoMdCloseCircle size={24} />
        </span>
        <ol className="mt-4 list-item font-semibold">
          {Object.keys(cart).length == 0 && (
            <div className="my-4">Your cart is empty!</div>
          )}
          {Object.keys(cart).map((k) => {
            return (
              <li
                key={k}
                className="flex justify-between items-center py-2 border-b"
              >
                <div className="w-2/3 font-semibold">{cart[k].name} ({cart[k].size}/{cart[k].variant})</div>
                <div className="flex font-semibold items-center justify-center w-1/3 p-1">
                  <CiCircleMinus
                    onClick={() => {
                      removeFromCart(
                        k,
                        1,
                        cart[k].price,
                        cart[k].name,
                        cart[k].size,
                        cart[k].variant
                      );
                    }}
                    className="text-xl font-semibold mx-1 cursor-pointer"
                  />
                  {cart[k].qty}
                  <CiCirclePlus
                    onClick={() => {
                      addToCart(
                        k,
                        1,
                        cart[k].price,
                        cart[k].name,
                        cart[k].size,
                        cart[k].variant
                      );
                    }}
                    className="text-xl font-semibold mx-1 cursor-pointer"
                  />
                </div>
                <div>&#x20B9;{cart[k].price}</div>
              </li>
            );
          })}
        </ol>
        <span className='font-bold'>subtotal = {subtotal}</span>
      </div> */}
      <span>
  
        <button  disabled={disabled} className="disabled:bg-violet-400 lg:mt-2 xl:mt-4 flex-shrink-0 inline-flex text-white bg-indigo-500 border-0 py-2 px-3 focus:outline-none hover:bg-indigo-600 rounded mx-1 ">
          <IoBagCheckSharp className="m-1 mx-2" />
          update 
        </button>

      </span>
    </div>
  )
}

export default updateaccount