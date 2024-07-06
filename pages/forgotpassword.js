import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react'
import { useEffect } from 'react';
import { Slide, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const forgotpassword = () => {
  const [email , setemail] = useState('');
  const router = useRouter()
  const handleChange = (e) => {
    const {name , value} = e.target ;
    if(name == 'email') setemail(value);
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/forgot-password`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(email),
      });

      const result = await res.json();
      console.log("Success:", ` ${result}`);

      toast('Successfully signed up!', {
        position: "top-left",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
        transition: Slide,
      });
    } catch (error) {
      toast.error('Error signing up!', {
        position: "top-left",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
        transition: Slide,
      });

      console.error("Error:", `Problem in sending email to api ${error}`);
    }
  }
  useEffect(() => {
    if(localStorage.getItem('token')){
      router.push("/")
    }
  }, [])
  return (
    <>
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
      <div className="flex min-h-screen flex-col  justify-center items-start px-6 -mt-3 lg:px-8">

  <div className="sm:mx-auto sm:w-full sm:max-w-sm">
    <img className="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=purple&shade=600" alt="Your Company"/>
    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Forgot password?</h2>
  </div>

  <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <form className="space-y-6" action="#" method="POST">
      <div>
        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
        <div className="mt-2">
          <input value={email} onChange={handleChange} id="email" name="email" type="email" autoComplete="email" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>

      <div>
        <button type="submit" onClick={handleSubmit} className="flex w-full justify-center rounded-md bg-purple-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600">Sign in</button>
      </div>
    </form>

    <p className="mt-10 text-center text-sm text-gray-500">
      Not a member?
      <Link href={"/signup"} className="font-semibold leading-6 text-purple-600 hover:text-purple-500">Sign up</Link>
    </p>

  </div>
</div>
    </>
      
  )
}

export default forgotpassword ;