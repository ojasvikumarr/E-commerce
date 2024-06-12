import React from 'react'
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


const checkout = ({cart , addToCart , removeFromCart , clearCart , subtotal}) => {
  return (
    <div className='container px-2 sm:m-auto '>
      <h1 className='text-3xl text-center my-8 font-bold'>checkout</h1>
      <h2 className='font-semibold text-xl'>1.Delivery Details</h2>
      <div className='mx-auto flex'>
        <div class="mx-2 w-1/2 mb-4">
          <label for="Name" class="leading-7 text-m text-gray-600">Name</label>
          <input id="Name" name="Name" class="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-indigo-200 h-10 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" />
        </div>
        <div class="mx-2 w-1/2 mb-4">
          <label for="Email" class="leading-7 text-m text-gray-600">Email</label>
          <input id="Email" name="Email" class="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-indigo-200 h-10 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" />
        </div>
      </div>
      <div class="mx-2 w-full mb-4">
        <label for="Address" class="leading-7 text-m text-gray-600">Address</label>
        <textarea id="Address" name="Address" class="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-indigo-200 h-20 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
      </div>
      <div className='mx-auto flex'>
        <div className="mx-2 w-1/2 mb-2">
          <label for="Pincode" class="leading-7 text-m text-gray-600">Pincode</label>
          <input id="Pincode" name="Pincode" class="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-indigo-200 h-10 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" />
        </div>
        <div className="mx-2 w-1/2 mb-2">
          <label for="State" class="leading-7 text-m text-gray-600">State</label>
          <input id="State" name="State" class="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-indigo-200 h-10 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" />
        </div>
      </div>
      <div className='mx-auto flex'>
        <div className="mx-2 w-1/2 mb-2">
          <label for="Phone" class="leading-7 text-m text-gray-600">Phone</label>
          <input id="Phone" name="Phone" class="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-indigo-200 h-10 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" />
        </div>
        <div className="mx-2 w-1/2 mb-2">
          <label for="City" class="leading-7 text-m text-gray-600">City</label>
          <input id="City" name="City" class="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-indigo-200 h-10 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" />
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
                <div className="w-2/3 font-semibold">{cart[k].name}</div>
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
                <div>$25.00</div>
              </li>
            );
          })}
        </ol>
        <span className='font-bold'>subtotal = {subtotal}</span>
      </div>
      <Link href={"/payment"}>
            <button className="lg:mt-2 xl:mt-4 flex-shrink-0 inline-flex text-white bg-indigo-500 border-0 py-2 px-3 focus:outline-none hover:bg-indigo-600 rounded mx-1 ">
              <IoBagCheckSharp className="m-1 mx-2" />
              Pay  &#x20B9;{subtotal}
            </button>
      </Link>
    </div>
  )
}

export default checkout