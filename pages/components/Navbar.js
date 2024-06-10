import Image from "next/image";
import Link from "next/link";
import { FaCartShopping } from "react-icons/fa6";
import { HiOutlineShoppingCart } from "react-icons/hi2";
const Navbar = () => {
    return (
        <>
            <header className=" text-gray-600 body-font">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center shadow-md">
                    <Link href={'/'}>
                    <Image src="/codeswear-high-resolution-logo-transparent.png" width={100} height={100}/>
                    </Link>
                    <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
                        <Link href={"/tshirts"} className="mr-5 hover:text-gray-900">T-shirts</Link>
                        <Link href={"/hoodies"} className="mr-5 hover:text-gray-900">Hoodies</Link>
                        <Link href={"/sweatshirts"} className="mr-5 hover:text-gray-900">Sweatshirts</Link>
                        <Link href={"/mugs"} className="mr-5 hover:text-gray-900">Mugs</Link>
                        <Link href={"/zipper"} className="mr-5 hover:text-gray-900">Zipper</Link>
                    </nav>
                    <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 w-12 h-8 rounded text-base mt-4 md:mt-0">
                        {/* <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24"> */}
                            {/* <path d="M5 12h14M12 5l7 7-7 7"></path> */}

                            {/* <FaCartShopping className="text-2xl"/> */}
                            <HiOutlineShoppingCart className="text-2xl" />
                        {/* </svg> */}
                    </button>
                </div>
            </header>
        </>
    )
}
export default Navbar;