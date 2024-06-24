import React, { useState } from 'react'
import { useRouter } from 'next/router';
import Image from "next/image";
import Link from "next/link";
import { FaCartShopping } from "react-icons/fa6";
import { IoMdCloseCircle } from "react-icons/io";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { useRef } from "react";
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import { IoBagCheckSharp } from "react-icons/io5";
import { CgTrashEmpty } from "react-icons/cg";
import Head from 'next/head';
import Script from 'next/script';
import { Slide, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Product from '@/models/products';

const checkout = ({ cart, addToCart, removeFromCart, clearCart, subtotal }) => {
  const router = useRouter()
  const [name, setname] = useState('')
  const [email, setemail] = useState('')
  const [pincode, setpincode] = useState('')
  const [address, setaddress] = useState('')
  const [state, setstate] = useState('')
  const [phone, setphone] = useState('')
  const [city, setcity] = useState('')
  const [disabled, setDisabled] = useState(true)
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

  // const initiatePayment = async () => {

  //   let oid = Math.floor(Math.random() * Date.now());
  //   const data = { cart, subtotal, oid, email: "email", name, address, pincode, phone }
  //   let a = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/pretransaction`, {
  //     method: 'POST',
  //     header: {
  //       'Content-type': 'application/json'
  //     },
  //     body: JSON.stringify(data)
  //   })
  //   let txnToken = await a.json()
  //   console.log(txnToken);
  //   var config = {
  //     "root": "",
  //     "flow": "DEFAULT",
  //     "data": {
  //       "orderId": oid,
  //       "token": txnToken,
  //       "tokenType": "TXN_TOKEN",
  //       "amount": subtotal
  //     },
  //     "handler": {
  //       "notifyMerchant": function (eventName, data) {
  //         console.log("notifyMerchant handler function called");
  //         console.log("eventName => ", eventName);
  //         console.log("data => ", data);
  //       }
  //     }
  //   };

  //   if (window.Paytm && window.Paytm.CheckoutJS) {
  //     window.Paytm.CheckoutJS.init(config).then(function onSuccess() {
  //       // after successfully updating configuration, invoke JS Checkout
  //       window.Paytm.CheckoutJS.invoke();
  //     }).catch(function onError(error) {
  //       console.log("error => ", error);
  //     });

  //   }
  // }

  const createOrder = async () => {
    let oid = Math.floor(Math.random() * Date.now());
    let data = { cart, subtotal, name, address, phone, pincode, email, oid };
    
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/orders`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
  
      const result = await res.json();
      console.log("Success:", `Order is successfully placed! `);
      toast('Order is successfully placed!', {
        position: "top-left",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
        transition: Slide,
      });
  
      // Redirect to payment page with the order id
      setTimeout(() => {
        router.push(`/payment?id=${result.orderId}`);
      }, 1600);
    } catch (error) {
      toast.error('Error while placing the order', {
        position: "top-left",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
        transition: Slide,
      });
  
      console.error("Error:", `Problem in Creating the order ${error}`);
    }
  };
  
  return (
    <div className='container px-2 sm:m-auto '>
      <ToastContainer
        position="top-left"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
        theme="light"
        transition={Slide}
      />
      {/* <Head><meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0" /></Head>
      <Script type="application/javascript" src={`${process.env.PAYTM_HOST}/merchantpgpui/checkoutjs/merchants/${process.env.PAYTM_MID}.js`} onload="onScriptLoad();" crossorigin="anonymous" /> */}
      <h1 className='text-3xl text-center my-8 font-bold'>checkout</h1>
      <h2 className='font-semibold text-xl'>1.Delivery Details</h2>
      <div className='mx-auto flex'>
        <div className="mx-2 w-1/2 mb-4">
          <label htmlFor="Name" className="leading-7 text-m text-gray-600">Name</label>
          <input onChange={handleChange} value={name} id="Name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-indigo-200 h-10 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" />
        </div>
        <div className="mx-2 w-1/2 mb-4">
          <label htmlFor="Email" className="leading-7 text-m text-gray-600">Email</label>
          <input onChange={handleChange} value={email} id="Email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-indigo-200 h-10 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" />
        </div>
      </div>
      <div className="mx-2 w-full mb-4">
        <label htmlFor="Address" className="leading-7 text-m text-gray-600">Address</label>
        <textarea onChange={handleChange} value={address} id="Address" name="address" className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-indigo-200 h-20 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
      </div>
      <div className='mx-auto flex'>
        <div className="mx-2 w-1/2 mb-2">
          <label htmlFor="Pincode" className="leading-7 text-m text-gray-600">Pincode</label>
          <input onChange={handleChange} value={pincode} id="Pincode" name="pincode" className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-indigo-200 h-10 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" />
        </div>
        <div className="mx-2 w-1/2 mb-2">
          <label htmlFor="State" className="leading-7 text-m text-gray-600">State</label>
          <input onChange={handleChange} value={state} id="State" name="state" className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-indigo-200 h-10 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" />
        </div>
      </div>
      <div className='mx-auto flex'>
        <div className="mx-2 w-1/2 mb-2">
          <label htmlFor="Phone" className="leading-7 text-m text-gray-600">Phone</label>
          <input onChange={handleChange} value={phone} id="Phone" name="phone" className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-indigo-200 h-10 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" />
        </div>
        <div className="mx-2 w-1/2 mb-2">
          <label htmlFor="City" className="leading-7 text-m text-gray-600">City</label>
          <input onChange={handleChange} value={city} id="City" name="city" className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-indigo-200 h-10 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" />
        </div>
      </div>
      <h2 className='font-semibold text-xl'>2.Review Cart Items & Pay</h2>
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
      </div>
      <apan>
        <button onClick={createOrder} disabled={disabled} className="disabled:bg-violet-400 lg:mt-2 xl:mt-4 flex-shrink-0 inline-flex text-white bg-indigo-500 border-0 py-2 px-3 focus:outline-none hover:bg-indigo-600 rounded mx-1 ">
          <IoBagCheckSharp className="m-1 mx-2" />
          Pay  &#x20B9;{subtotal}
        </button>
      </apan>
    </div>
  )
}

export default checkout