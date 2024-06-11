import Image from 'next/image';
import Link from 'next/link';
import { FaCartShopping } from 'react-icons/fa6';
import { IoMdCloseCircle } from 'react-icons/io';
import { HiOutlineShoppingCart } from 'react-icons/hi2';
import { useRef } from 'react';
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import { IoBagCheckSharp } from "react-icons/io5";
import { CgTrashEmpty } from "react-icons/cg";

const Navbar = () => {
  const ref = useRef();

  const toggleCart = () => {
    if (ref.current.classList.contains('translate-x-full')) {
      ref.current.classList.remove('translate-x-full');
      ref.current.classList.add('translate-x-0');
    } else if (ref.current.classList.contains('translate-x-0')) {
      ref.current.classList.remove('translate-x-0');
      ref.current.classList.add('translate-x-full');
    }
  };

  return (
    <>
      <header className="text-gray-600 body-font">
        <div className="flex py-4 px-7 flex-col md:flex-row md:justify-start justify-center items-center shadow-md">
          <div className="logo mx-5">
            <Link href="/">

                <Image src="/codeswear-high-resolution-logo-transparent.png" width={120} height={90} alt="Logo" />

            </Link>
          </div>
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400 flex flex-wrap items-center text-base justify-center">
          <Link href={"/tshirts"} className="mr-5 hover:text-gray-900">T-shirts</Link>
                       <Link href={"/hoodies"} className="mr-5 hover:text-gray-900">Hoodies</Link>
                       <Link href={"/sweatshirts"} className="mr-5 hover:text-gray-900">Sweatshirts</Link>
                        <Link href={"/mugs"} className="mr-5 hover:text-gray-900">Mugs</Link>
                       <Link href={"/zipper"} className="mr-5 hover:text-gray-900">Zipper</Link>
          </nav>
          <button onClick={toggleCart} className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
            <HiOutlineShoppingCart className="text-2xl" />
          </button>
        </div>
      </header>
      <div ref={ref} className="fixed top-0 right-0 h-full w-80 bg-slate-300 p-10 transform transition-transform translate-x-full shadow-lg z-50">
        <h2 className="font-bold text-xl">Shopping Cart</h2>
        <span onClick={toggleCart} className="absolute top-4 right-2 cursor-pointer">
          <IoMdCloseCircle size={24} />
        </span>
        <ol className="mt-4 list-decimal font-semibold">
          <li className="flex justify-between items-center py-2 border-b">
            <div className='w-2/3 font-semibold'>Tshirt - wear the code</div>
            <div className='flex font-semibold items-center justify-center w-1/3 p-1'><CiCircleMinus className='text-xl font-semibold mx-1 cursor-pointer'/>1<CiCirclePlus className='text-xl font-semibold mx-1 cursor-pointer'/></div>
            <div>$25.00</div>
          </li>
          <li className="flex justify-between items-center py-2 border-b">
            <div className='w-2/3 font-semibold'>Tshirt - wear the code</div>
            <div className='flex font-semibold items-center justify-center w-1/3 p-1'><CiCircleMinus className='text-xl font-semibold mx-1 cursor-pointer'/>1<CiCirclePlus className='text-xl font-semibold mx-1 cursor-pointer'/></div>
            <div>$25.00</div>
          </li>
          <li className="flex justify-between items-center py-2 border-b">
            <div className='w-2/3 font-semibold'>Tshirt - wear the code</div>
            <div className='flex font-semibold items-center justify-center w-1/3 p-1'><CiCircleMinus className='text-xl font-semibold mx-1 cursor-pointer'/>1<CiCirclePlus className='text-xl font-semibold mx-1 cursor-pointer'/></div>
            <div>$25.00</div>
          </li>
          <li className="flex justify-between items-center py-2 border-b">
            <div className='w-2/3 font-semibold'>Tshirt - wear the code</div>
            <div className='flex font-semibold items-center justify-center w-1/3 p-1'><CiCircleMinus className='text-xl font-semibold mx-1 cursor-pointer'/>1<CiCirclePlus className='text-xl font-semibold mx-1 cursor-pointer'/></div>
            <div>$25.00</div>
          </li>
          <li className="flex justify-between items-center py-2 border-b">
            <div className='w-2/3 font-semibold'>Tshirt - wear the code</div>
            <div className='flex font-semibold items-center justify-center w-1/3 p-1'><CiCircleMinus className='text-xl font-semibold mx-1 cursor-pointer'/>1<CiCirclePlus className='text-xl font-semibold mx-1 cursor-pointer'/></div>
            <div>$25.00</div>
          </li>
        </ol>
        <div className="flex mx-1 justify-center">
        <button className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-indigo-500 border-0 py-2 px-3 focus:outline-none hover:bg-indigo-600 rounded mx-1 "><IoBagCheckSharp className='m-1 mx-2' />Checkout</button>
        <button className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-indigo-500 border-0 py-2 px-3 focus:outline-none hover:bg-indigo-600 rounded mx-1 "><CgTrashEmpty  className='m-1 mx-2' />Clear cart</button>
        </div>
      </div>
    </>
  );
};

export default Navbar;





// import Image from "next/image";
// import Link from "next/link";
// import { FaCartShopping } from "react-icons/fa6";
// import { IoMdCloseCircle } from "react-icons/io";
// import { HiOutlineShoppingCart } from "react-icons/hi2";
// const Navbar = () => {
//     return (
//         <>
//             <header className=" text-gray-600 body-font">

//                 <div className="flex flex-wrap py-4 px-7 flex-col md:flex-row items-center shadow-md">
//                     <Link href={'/'}>
//                     <Image src="/codeswear-high-resolution-logo-transparent.png" width={120} height={90}/>
//                     </Link>
//                     <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
//                         <Link href={"/tshirts"} className="mr-5 hover:text-gray-900">T-shirts</Link>
//                         <Link href={"/hoodies"} className="mr-5 hover:text-gray-900">Hoodies</Link>
//                         <Link href={"/sweatshirts"} className="mr-5 hover:text-gray-900">Sweatshirts</Link>
//                         <Link href={"/mugs"} className="mr-5 hover:text-gray-900">Mugs</Link>
//                         <Link href={"/zipper"} className="mr-5 hover:text-gray-900">Zipper</Link>
//                     </nav>
//                     <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 w-12 h-8 rounded text-base mt-4 md:mt-0">
//                         {/* <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24"> */}
//                             {/* <path d="M5 12h14M12 5l7 7-7 7"></path> */}

//                             {/* <FaCartShopping className="text-2xl"/> */}
//                             <HiOutlineShoppingCart className="text-2xl" />
//                         {/* </svg> */}
//                     </button>
//                 </div>
//                     <div className="sidebar top-0 right-0 bg-slate-300">
//                         <h2 className="font-bold text-xl ">Shopping Cart</h2>
//                         <span className="absolute top-4 right-2 cursor-pointer "><IoMdCloseCircle /></span>
//                         <ol>
//                             <li>
//                                 <span>Tshirt - wear the code</span>
//                             </li>
//                         </ol>
//                         </div>
                    
//             </header>
//         </>
//     )
// }
// export default Navbar;



