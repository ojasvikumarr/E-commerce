"use client";
import { useRouter } from "next/router";
import mongoose from "mongoose";
import Product from "@/models/products";
// import products from "@/models/products";
import { GrSecure } from "react-icons/gr";
import { FaBoxesPacking } from "react-icons/fa6";
import { FaTruck } from "react-icons/fa";
import React, { useEffect, useState } from "react"
import { InfiniteMovingCards } from "../components/ui/infinite-moving-cards.tsx"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { FaShieldAlt } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { motion } from "framer-motion";
import { LampContainer } from "../components/ui/lamp.tsx";

const plug = ({ addToCart, product, variants, buyNow }) => {
    const [reviews, setReviews] = useState(0); // Initialize reviews state
    const [stars, setStars] = useState([]); // Initialize stars state

    useEffect(() => {
        // Generate a random number of reviews between 1 and 5
        const randomReviews = Math.ceil(Math.random() * 5);
        setReviews(randomReviews);

        // Create stars array based on randomReviews
        const starsArray = Array(5).fill("empty"); // Initialize array with 5 "empty" stars
        for (let i = 0; i < randomReviews; i++) {
            starsArray[i] = "filled"; // Fill the first `randomReviews` positions with "filled"
        }

        setStars(starsArray); // Update stars state with calculated stars
    }, []);
    console.log(stars);
    const router = useRouter();
    // console.log(product, variants);
    const { slug } = useRouter().query;
    // console.log(slug);

    const [pin, setpin] = useState();
    const [service, setservice] = useState();

    const checkServiceability = async () => {
        const pins = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/pincode`);
        const pinsJson = await pins.json();
        // console.log(pins, pinsJson);
        if (Object.keys(pinsJson).includes(pin)) {
            toast.success('Pincode is servicable!', {
                position: "bottom-center",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",

            });
            setservice(true);
        } else {
            toast.error('Sorry , Pincode is not servicable!', {
                position: "bottom-center",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",

            });
            setservice(false);
        }
        // console.log(service);
    }

    const onChangePin = (e) => {
        setpin(e.target.value);
    }

    const [color, setcolor] = useState(product.color)
    const [size, setsize] = useState(product.size)

    const refreshVariant = (newsize, newcolor) => {
        let url = `${process.env.NEXT_PUBLIC_HOST}/product/${variants[newcolor][newsize]['slug']}`
        // window.location = url;
        router.push(url);
    }
    const notify = () => toast("Wow so easy!");
    return (
        <>
            <section className="text-gray-600 body-font overflow-hidden">
                <ToastContainer
                    position="bottom-center"
                    autoClose={1000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"

                />
                <div className="container px-5 py-14 mx-auto">
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink href="/">Home Page</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbLink href={`/${product.category.toLowerCase()}s`}>{product.category}</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbPage>{product.item}</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                    <div className="lg:w-4/5 mx-auto flex flex-wrap">
                        <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto  object-cover object-top rounded" src={product.img} />
                        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                            <h2 className="text-sm title-font text-gray-500 tracking-widest">CodesWear.com</h2>
                            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{product.item} ({product.size}/{product.color})</h1>
                            <div className="flex mb-4">
                                <span className="flex items-center">
                                    {stars.map((star, index) => (
                                        <svg
                                            key={index}
                                            fill={star === "filled" ? "currentColor" : "none"}
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            className="w-4 h-4 text-purple-500"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                        </svg>
                                    ))}
                                    {/* Display number of reviews */}
                                    <span className="text-gray-600 ml-3">{reviews} Reviews</span>
                                </span>
                                <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                                    <a className="text-gray-500">
                                        <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                        </svg>
                                    </a>
                                    <a className="text-gray-500">
                                        <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                        </svg>
                                    </a>
                                    <a className="text-gray-500">
                                        <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                        </svg>
                                    </a>
                                </span>
                            </div>
                            <p className="leading-relaxed">Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo juiceramps cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean shorts keytar banjo tattooed umami cardigan.</p>
                            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                                <div className="flex">
                                    <span className="mr-3">Color</span>
                                    {Object.keys(variants).includes('White') && Object.keys(variants['White']).includes(size) && <button onClick={() => { refreshVariant(size, 'White') }} className={`border-2 bg-gray-100 rounded-full w-6 h-6 focus:outline-none ${color === 'White' ? 'border-black' : 'border-gray-300'}`}></button>}
                                    {Object.keys(variants).includes('Red') && Object.keys(variants['Red']).includes(size) && <button onClick={() => { refreshVariant(size, 'Red') }} className={`border-2  ml-1 bg-red-500 rounded-full w-6 h-6 focus:outline-none ${color === 'White' ? 'border-black' : 'border-gray-300'}`}></button>}
                                    {Object.keys(variants).includes('Green') && Object.keys(variants['Green']).includes(size) && <button onClick={() => { refreshVariant(size, 'Green') }} className={`border-2  ml-1 bg-green-400 rounded-full w-6 h-6 focus:outline-none ${color === 'White' ? 'border-black' : 'border-gray-300'}`}></button>}
                                    {Object.keys(variants).includes('Blue') && Object.keys(variants['Blue']).includes(size) && <button onClick={() => { refreshVariant(size, 'Blue') }} className={`border-2  ml-1 bg-blue-400 rounded-full w-6 h-6 focus:outline-none ${color === 'White' ? 'border-black' : 'border-gray-300'}`}></button>}
                                    {Object.keys(variants).includes('Purple') && Object.keys(variants['Purple']).includes(size) && <button onClick={() => { refreshVariant(size, 'Purple') }} className={`border-2  ml-1 bg-purple-500 rounded-full w-6 h-6 focus:outline-none ${color === 'White' ? 'border-black' : 'border-gray-300'}`}></button>}
                                    {Object.keys(variants).includes('Violet') && Object.keys(variants['Violet']).includes(size) && <button onClick={() => { refreshVariant(size, 'Violet') }} className={`border-2  ml-1 bg-violet-500 rounded-full w-6 h-6 focus:outline-none ${color === 'White' ? 'border-black' : 'border-gray-300'}`}></button>}
                                    {Object.keys(variants).includes('Yellow') && Object.keys(variants['Yellow']).includes(size) && <button onClick={() => { refreshVariant(size, 'Yellow') }} className={`border-2  ml-1 bg-yellow-500 rounded-full w-6 h-6 focus:outline-none ${color === 'White' ? 'border-black' : 'border-gray-300'}`}></button>}
                                    {Object.keys(variants).includes('Orange') && Object.keys(variants['Orange']).includes(size) && <button onClick={() => { refreshVariant(size, 'Orange') }} className={`border-2  ml-1 bg-orange-700 rounded-full w-6 h-6 focus:outline-none ${color === 'White' ? 'border-black' : 'border-gray-300'}`}></button>}
                                    {Object.keys(variants).includes('Black') && Object.keys(variants['Black']).includes(size) && <button onClick={() => { refreshVariant(size, 'Black') }} className={`border-2  ml-1 bg-black rounded-full w-6 h-6 focus:outline-none ${color === 'White' ? 'border-black' : 'border-gray-300'}`}></button>}
                                    {Object.keys(variants).includes('Gray') && Object.keys(variants['Gray']).includes(size) && <button onClick={() => { refreshVariant(size, 'Gray') }} className={`border-2  ml-1 bg-gray-300 rounded-full w-6 h-6 focus:outline-none ${color === 'White' ? 'border-black' : 'border-gray-300'}`}></button>}
                                </div>
                                <div className="flex ml-6 items-center">
                                    <span className="mr-3">Size</span>
                                    <div className="relative">
                                        <select value={size} onChange={(e) => { refreshVariant(e.target.value, color) }} className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-purple-200 focus:border-purple-500 text-base pl-3 pr-10">
                                            {Object.keys(variants[color]).includes('S') && <option value={"S"}>S</option>}
                                            {Object.keys(variants[color]).includes('M') && <option value={'M'}>M</option>}
                                            {Object.keys(variants[color]).includes('L') && <option value={'L'}>L</option>}
                                            {Object.keys(variants[color]).includes('XL') && <option value={'XL'}>XL</option>}
                                            {Object.keys(variants[color]).includes('XXL') && <option value={'XXL'}>XXL</option>}
                                            {/* <option value={"S"}>S</option>
                                            <option value={"M"}>M</option>
                                            <option value={"L"}>L</option>
                                            <option value={"XL"}>XL</option>
                                            <option value={"XXL"}>XXL</option> */}
                                        </select>
                                        <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4" viewBox="0 0 24 24">
                                                <path d="M6 9l6 6 6-6"></path>
                                            </svg>
                                        </span>
                                    </div>
                                    <span className="m-1 mx-3"> Available Qty : {product.availableQty}</span>
                                </div>
                            </div>
                            <div className="flex justify-between md:text-sm">
                                {product.availableQty > 0 ? <div className="flex items-center justify-center align-middle">
                                    <span className="title-font font-medium text-l line-through items-center text-gray-900">&#x20B9;{1.3 * product.price}</span>
                                    <span className="title-font font-bold text-3xl m-2 text-gray-900">&#x20B9;{product.price}</span>
                                    <span className="title-font font-small text-l mb-1 text-red-900">-30%</span>
                                </div>
                                    : <span className="title-font font-medium text-2xl  text-gray-900">Out of Stock!</span>
                                }
                                <button disabled={product.availableQty <= 0} onClick={() => buyNow(slug, 1, `${product.price}`, `${product.item}`, size, color)} className="flex ml-2  disabled:bg-purple-200 text-white items-center bg-purple-500 border-0 py-2 px-4 focus:outline-none`}hover:bg-purple-600 rounded">Buy Now</button>
                                <button disabled={product.availableQty <= 0} onClick={() => { addToCart(slug, 1, `${product.price}`, `${product.item}`, size, color) }} className="flex disabled:bg-purple-200 text-white items-center bg-purple-500 border-0 py-2 px-4 focus:outline-none`}hover:bg-purple-600 rounded">Add to cart</button>
                                <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                                    </svg>
                                </button>
                            </div>
                            <div className="flex mt-6 ">
                                <input onChange={onChangePin} type="text" placeholder="Enter your pincode" className="border-purple-950{`border-2 rounded-md  ${color === 'White' ? 'border-black' : 'border-gray-300'}px-2" />
                                <button onClick={checkServiceability} className="flex ml-7 text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none`}hover:bg-purple-600 rounded"> check</button>
                            </div>
                            {!service && service != null && <div className="text-red-900 text-sm mt-3">Sorry , This pincode is not serivicable</div>}
                            {service && service != null && <div className="text-green-900 text-sm mt-3">Yay! , Your pincode is servicable </div>}
                            <div className="flex flex-wrap mt-14">
                                {/* First section */}
                                <div className="flex items-center justify-center  sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 p-4">
                                    <span className="flex items-center text-violet-900">
                                        <FaTruck className="text-violet-800 bg-violet-300 p-1 rounded-full text-2xl" />
                                        <span className="ml-2 font-bold">Free Shipping</span>
                                    </span>
                                </div>
                                <div className="flex items-center justify-center  sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 p-4">
                                    <span className="flex items-center text-violet-900">
                                        <FaShieldAlt className="text-violet-800 bg-violet-300 p-1 rounded-full text-2xl" />
                                        <span className="ml-2 font-bold">Secure Payments</span>
                                    </span>
                                </div>

                                {/* Second section */}
                                <div className="flex items-center justify-center sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 p-4">
                                    <span className="flex items-center text-violet-900">
                                        <FaBoxesPacking className="text-violet-800 bg-violet-300 p-1 rounded-full text-2xl" />
                                        <span className="ml-2 font-bold">Free Returns</span>
                                    </span>
                                </div>
                                <div className="flex items-center justify-center sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 p-4">
                                    <span className="flex items-center text-violet-900">
                                        <GrSecure className="text-violet-800 bg-violet-300 p-1 rounded-full text-2xl" />
                                        <span className="ml-2 font-bold">Safety Certified</span>
                                    </span>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
      >
        Build lamps <br /> the right way
      </motion.h1>
    </LampContainer>
            <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white items-center justify-center relative overflow-hidden">
                <InfiniteMovingCards
                    items={testimonials}
                    direction="right"
                    speed="slow"
                    pauseOnHover={true}
                />
            </div>
        </>
    )
}
export default plug;


export async function getServerSideProps(context) {
    if (!mongoose.connections[0].readyState) {
        await mongoose.connect(process.env.MONGO_URI)
    }

    let products = await Product.findOne({ slug: context.query.slug });
    //Finddone should been used !!
    if (!products) {
        return {
            notFound: true,
        };
    }
    let variants = await Product.find({ item: products.item, category: products.category })
    let colorSizeSlug = {}//{red : {XL : {slug:'wear-the-code-xl}}}
    for (let item of variants) {
        if (Object.keys(colorSizeSlug).includes(item.color)) {
            colorSizeSlug[item.color][item.size] = { slug: item.slug }
        } else {
            colorSizeSlug[item.color] = {}
            colorSizeSlug[item.color][item.size] = { slug: item.slug }
        }
    }
    return {

        props: {
            product: JSON.parse(JSON.stringify(products)),
            variants: JSON.parse(JSON.stringify(colorSizeSlug))
        }
    }
}

const testimonials = [
    {
        quote:
            "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
        name: "Charles Dickens",
        title: "A Tale of Two Cities",
    },
    {
        quote:
            "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
        name: "William Shakespeare",
        title: "Hamlet",
    },
    {
        quote: "All that we see or seem is but a dream within a dream.",
        name: "Edgar Allan Poe",
        title: "A Dream Within a Dream",
    },
    {
        quote:
            "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
        name: "Jane Austen",
        title: "Pride and Prejudice",
    },
    {
        quote:
            "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
        name: "Herman Melville",
        title: "Moby-Dick",
    },
];