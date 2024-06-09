import Image from "next/image";
import Link from "next/link";
const Navbar = () => {
    return (
        <>
            <header className="text-gray-600 body-font">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <Link href={'/'}>
                    <Image src="/codeswear-high-resolution-logo-transparent.png" width={100} height={100}/>
                    </Link>
                    <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
                        <a className="mr-5 hover:text-gray-900">T-shirts</a>
                        <a className="mr-5 hover:text-gray-900">Hoodies</a>
                        <a className="mr-5 hover:text-gray-900">Sweatshirts</a>
                        <a className="mr-5 hover:text-gray-900">Mugs</a>
                        <a className="mr-5 hover:text-gray-900">Zipper</a>
                    </nav>
                    <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Cart
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </button>
                </div>
            </header>
        </>
    )
}
export default Navbar;