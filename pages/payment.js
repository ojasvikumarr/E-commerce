import React from 'react'
import orders from '@/models/orders'
import mongoose from 'mongoose'
import { useRouter  } from 'next/router'
import { useState } from 'react'

const Payment = ({ subtotal, order }) => {
  const router = useRouter()
  const [total, setsubtotal] = useState(0)
  const products = order.products;
  console.log(order)
  console.log(products);
  let oid
  return (
    <>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">CodesWear.com</h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">Order Id # {order.orderId}</h1>
              <p className="leading-relaxed">Your order has been successfully placed!</p>
              <h3 className='mb-4'>Payment status: <span className='text-green-800 text-bold'>{order.status}</span></h3>
              <div className="flex mb-4">
                <span className="flex-grow border-b-2 border-red-500 py-2 text-lg px-1">Item Description</span>
                <span className="flex-grow border-b-2 border-red-300 py-2 text-lg text-right px-1">Quantity</span>
                <span className="flex-grow border-b-2 border-red-300 py-2 text-lg text-center px-1">Variant</span>
              </div>

              {Object.keys(products).map((key) => {
                return (
                  <div key={key} className="flex border-t border-gray-200 py-2">
                    <span className="text-gray-500  ">{products[key].name} ({products[key].variant}/{products[key].size})</span>
                    <span className="text-gray-900 flex-1 mx-12 my-auto text-center">{products[key].qty}</span>
                    <span className="text-gray-900 flex-1 mx-12 my-auto text-center">&#x20B9;{products[key].price}</span>
                  </div>
                )
              })}
              
              <div className="m-auto">
                <div className="title-font font-medium py-2 text-2xl text-gray-900">Subtotal: &#x20B9;{order.amount}</div>
                <div className="flex">
                  <button className="w-full text-white bg-indigo-500 border-0 py-4 px-6 focus:outline-none hover:bg-indigo-600 rounded">Track Your Order</button>
                  <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src="https://www.shutterstock.com/image-vector/doodle-style-packing-shipping-distribution-600nw-107857553.jpg"/>
          </div>
        </div>
      </section>
    </>
  )
}

export default Payment

export async function getServerSideProps(context) {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URI);
  }

  // Access query parameters
  const { id } = context.query;

  // Fetch order based on the query parameter
  let order = await orders.findById(id).lean();

  return {
    props: {
      order: JSON.parse(JSON.stringify(order)),
    },
  };
}
