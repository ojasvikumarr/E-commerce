import React from 'react'

const payment = ({subtotal}) => {
  return (
    <>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">CodesWear.com</h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">Order Id # 17U89F</h1>
              <p className="leading-relaxed mb-4">Your order has been successfully placed!</p>
              <div className="flex mb-4">
                <a className="flex-grow border-b-2 border-red-500 py-2 text-lg px-1">Item Descriptiion</a>
                <a className="flex-grow border-b-2 border-red-300 py-2 text-lg text-right px-1">Quantity</a>
                <a className="flex-grow border-b-2 border-red-300 py-2 text-lg text-right px-1">Variant</a>
              </div>
              
              <div className="flex border-t border-gray-200 py-2">
                <span className="text-gray-500">Wear-The-Code</span>
                <span className="ml-auto text-gray-900">1</span>
                <span className="ml-auto text-gray-900 ">Blue</span>
              </div>
              <div className="flex border-t border-gray-200 py-2">
              <span className="text-gray-500">Wear-The-Code</span>
                <span className="ml-auto text-gray-900">1</span>
                <span className="ml-auto text-gray-900">Blue</span>
              </div>
              <div className="flex border-t border-b mb-6 border-gray-200 py-2">
              <span className="text-gray-500">Wear-The-Code</span>
                <span className="ml-auto text-gray-900">1</span>
                <span className="ml-auto text-gray-900">Blue</span>
              </div>
              <div className=" m-auto">
                <div className="title-font font-medium py-2 text-2xl text-gray-900">Subtotal : &#x20B9;{subtotal}</div>
                <div className="flex">
                <button className="w-full text-white bg-indigo-500 border-0 py-4 px-6 focus:outline-none hover:bg-indigo-600 rounded">Track Your Order</button>
                <button className="rounded-full w-10 h-10 bg-gray-200  p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                  <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                  </svg>
                </button>
                </div>
              </div>
            </div>
            <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src="https://dummyimage.com/400x400"/>
          </div>
        </div>
      </section>
    </>
  )
}

export default payment