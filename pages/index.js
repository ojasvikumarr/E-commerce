"use client";
import Image from "next/image";
import Head from "next/head";
import { Inter } from "next/font/google";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
import { LayoutGrid } from "../components/ui/layout-grid"
import { ParallaxScroll } from "../components/ui/parallax-scroll"
const inter = Inter({ subsets: ["latin"] });
import PhotoSlider from "../components/photoSlider";
import { motion } from "framer-motion"
import { useState } from "react";
import { TypewriterEffect } from "../components/ui/typewriter-effect"
import Link from "next/link";
export default function Home() {
  const [ispen, setIsOpen] = useState(false);
  const [show, setshow] = useState(false)
  const words = [
    {
      text: "Get",
    },
    {
      text: "custom",
    },
    {
      text: "designed",
    },
    {
      text: "products",
    },
    {
      text: "by",
    },
    {
      text: "sending",
    },
    {
      text: "us",
    },
    {
      text: "a",
    },
    {
      text: "text",
    },
    {
      text: "on",
    },
    {
      text: "WhatsApp!",
      className: "text-blue-500 dark:text-green-600",
    },
  ];
  const handleClick = () => {
    Window.url= "https://wa.me/9315499283?text=Hello! I would like to get custom designed products.";
  }
  return (
    <>
      {/* we need to wrap the whole content in a single fragement to ensue that it returned JSX in a structured properly */}
      {/* and the head component must also be Head so that it is consistent between server-side and client side rendering */}
      <Head>
        <title>CodesWear.com - Wear the code</title>
        <meta name="description" content="CodesWear.com - Wear the code" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Navbar /> */}
      {/* <Image
        src="/premium_photo-1685082608966-ef313bf33731.webp"
        alt="photo"
        width={1440}
        height={200}
      /> */}
      <div className=" mx-auto p-2">

        <div className="flex justify-center items-center">
          <div className="bg-violet-800 text-pink-100 justify-center rounded-full flex my-1 py-2 px-2 mx-auto">
            <div className="rounded-full bg-violet-950 px-2 flex items-center ">
              <button onClick={() => {setshow(!show)}} className="rainbow-text">New</button>
             </div>
          <Link href={"https://wa.me/9315499283?text=Hello! What a great website you have made , heres an Internship Offer! for you hehehe...."}>
             {show && <TypewriterEffect words={words} />}
            </Link>
            </div>
        </div>
        <div>
          <h2 className="justify-center flex text-red-900 m-1 bg-yellow-100 align-middle rounded p-1">
            This is just a demo website for my resume as a summer project it is not meant to be used to do any fouls play or scam anyone
            i requested Razorpay gateway as now most of the companies require onhands experience with implementing payment gateways 
            and its taken as an additional edge over normal development 
          </h2>
        </div>
        <PhotoSlider images={img} interval={5000} />
        {/* <Image height={100} width={100} src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/fdc353ba-9ad5-4cda-9a1c-f8738775ccb1.__CR0,0,970,300_PT0_SX970_V1___.jpg"/> */}
      </div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
              Pitchfork Kickstarter Taxidermy
            </h1>
            <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
              Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
              gentrify, subway tile poke farm-to-table.
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-200 p-6 rounded-lg">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                  Shooting Stars
                </h2>
                <p className="leading-relaxed text-base">
                  Fingerstache flexitarian street art 8-bit waist co, subway
                  tile poke farm.
                </p>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-200 p-6 rounded-lg">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="6" cy="6" r="3"></circle>
                    <circle cx="6" cy="18" r="3"></circle>
                    <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                  </svg>
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                  The Catalyzer
                </h2>
                <p className="leading-relaxed text-base">
                  Fingerstache flexitarian street art 8-bit waist co, subway
                  tile poke farm.
                </p>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-200 p-6 rounded-lg">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                  Neptune
                </h2>
                <p className="leading-relaxed text-base">
                  Fingerstache flexitarian street art 8-bit waist co, subway
                  tile poke farm.
                </p>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-200 p-6 rounded-lg">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                  >
                    <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1zM4 22v-7"></path>
                  </svg>
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                  Melanchole
                </h2>
                <p className="leading-relaxed text-base">
                  Fingerstache flexitarian street art 8-bit waist co, subway
                  tile poke farm.
                </p>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-200 p-6 rounded-lg">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path>
                  </svg>
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                  Bunker
                </h2>
                <p className="leading-relaxed text-base">
                  Fingerstache flexitarian street art 8-bit waist co, subway
                  tile poke farm.
                </p>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-200 p-6 rounded-lg">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                  Ramona Falls
                </h2>
                <p className="leading-relaxed text-base">
                  Fingerstache flexitarian street art 8-bit waist co, subway
                  tile poke farm.
                </p>
              </div>
            </div>
          </div>
          <button className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            Button
          </button>
          <div className="h-screen mb-40 py-20 w-full">
            <LayoutGrid cards={cards} />
          </div>
          {/* <ParallaxScroll images={images} />; */}
        </div>
      </section>
      {/* <Footer /> */}
    </>
  )
}
const images = [
  "https://m.media-amazon.com/images/I/81YO4Qtc1mL._SY879_.jpg",
  "https://m.media-amazon.com/images/I/51BaWHbbziL._SX679_.jpg",
  "https://m.media-amazon.com/images/I/71xAkSEspIL._SY879_.jpg",
  "https://m.media-amazon.com/images/I/41Z3fJiaFsL.jpg",
  "https://m.media-amazon.com/images/I/81J3TNJ68TL._SY879_.jpg",
  "https://m.media-amazon.com/images/I/615DOXPAfqL._SY879_.jpg",
  "https://m.media-amazon.com/images/I/61A7rwdWHtL._SX679_.jpg",
  "https://m.media-amazon.com/images/I/81JUb2j7IXL._SY879_.jpg",
  "https://m.media-amazon.com/images/I/718ZiEqFr7L._SY879_.jpg",
  "https://m.media-amazon.com/images/I/71+49ZpSCfL._SY879_.jpg",
  "https://m.media-amazon.com/images/I/61HmZ0plzdL._SY879_.jpg",
  "https://m.media-amazon.com/images/I/61bdcF18g0L._SX679_.jpg",
  "https://m.media-amazon.com/images/I/61ROABnmNpL._SX679_.jpg",
  "https://m.media-amazon.com/images/I/81YO4Qtc1mL._SY879_.jpg",
  "https://m.media-amazon.com/images/I/51BaWHbbziL._SX679_.jpg",
  "https://m.media-amazon.com/images/I/71xAkSEspIL._SY879_.jpg",
  "https://m.media-amazon.com/images/I/41Z3fJiaFsL.jpg",
  "https://m.media-amazon.com/images/I/81J3TNJ68TL._SY879_.jpg",
  "https://m.media-amazon.com/images/I/615DOXPAfqL._SY879_.jpg",
  "https://m.media-amazon.com/images/I/61A7rwdWHtL._SX679_.jpg",
  "https://m.media-amazon.com/images/I/81JUb2j7IXL._SY879_.jpg",
  "https://m.media-amazon.com/images/I/718ZiEqFr7L._SY879_.jpg",
  "https://m.media-amazon.com/images/I/71+49ZpSCfL._SY879_.jpg",
  "https://m.media-amazon.com/images/I/61HmZ0plzdL._SY879_.jpg",
  "https://m.media-amazon.com/images/I/61bdcF18g0L._SX679_.jpg",
  "https://m.media-amazon.com/images/I/61ROABnmNpL._SX679_.jpg"
];
const img = [
  "https://codeswear.nyc3.cdn.digitaloceanspaces.com/constants/landing/banner/1.webp",
  "https://codeswear.nyc3.cdn.digitaloceanspaces.com/constants/landing/banner/5.webp",
  "https://codeswear.nyc3.cdn.digitaloceanspaces.com/constants/landing/banner/4.webp",
  "https://codeswear.nyc3.cdn.digitaloceanspaces.com/constants/landing/banner/3.webp",
  "https://codeswear.nyc3.cdn.digitaloceanspaces.com/constants/landing/banner/2.webp",
  "https://codeswear.nyc3.cdn.digitaloceanspaces.com/constants/landing/banner/6.webp"
]
const SkeletonOne = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">House in the woods</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A serene and tranquil retreat, this house in the woods offers a peaceful
        escape from the hustle and bustle of city life.
      </p>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">House above the clouds</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Perched high above the world, this house offers breathtaking views and a
        unique living experience. It&apos;s a place where the sky meets home,
        and tranquility is a way of life.
      </p>
    </div>
  );
};
const SkeletonThree = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Greens all over</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A house surrounded by greenery and nature&apos;s beauty. It&apos;s the
        perfect place to relax, unwind, and enjoy life.
      </p>
    </div>
  );
};
const SkeletonFour = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Rivers are serene</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A house by the river is a place of peace and tranquility. It&apos;s the
        perfect place to relax, unwind, and enjoy life.
      </p>
    </div>
  );
};
const SkeletonFive = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Rivers are serene</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A house by the river is a place of peace and tranquility. It&apos;s the
        perfect place to relax, unwind, and enjoy life.
      </p>
    </div>
  );
};
const SkeletonSix = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Rivers are serene</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A house by the river is a place of peace and tranquility. It&apos;s the
        perfect place to relax, unwind, and enjoy life.
      </p>
    </div>
  );
};

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    thumbnail:
      "https://m.media-amazon.com/images/S/aplus-media-library-service-media/3c490157-ea2a-450f-829d-4bc508b54176.__CR0,0,1464,600_PT0_SX1464_V1___.jpg",
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail:
      "https://m.media-amazon.com/images/S/aplus-media-library-service-media/ebf98a72-da4c-4421-83b9-2a5dfe21eda3.__CR0,0,970,600_PT0_SX970_V1___.jpg",
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail:
      "https://m.media-amazon.com/images/S/aplus-media-library-service-media/35a9f6be-62f8-4a80-b48e-25b9da0ce517.__CR0,0,362,453_PT0_SX362_V1___.jpg",
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-2",
    thumbnail:
      "https://m.media-amazon.com/images/S/aplus-media-library-service-media/405a619d-4fcd-40dc-ac99-0fa22a63f8a6.__CR0,0,1464,600_PT0_SX1464_V1___.jpg",
  },
  {
    id: 5,
    content: <SkeletonFive />,
    className: "md:col-span-2",
    thumbnail:
      "https://m.media-amazon.com/images/S/aplus-media-library-service-media/383eed31-8585-40f5-86e1-9277d6815bc3.__CR0,0,970,300_PT0_SX970_V1___.jpeg",
  },
  {
    id: 6,
    content: <SkeletonSix />,
    className: "md:col-span-1",
    thumbnail:
      "https://m.media-amazon.com/images/S/aplus-media-library-service-media/812f7876-fa2f-4706-90b3-b45179fb5be4.__CR0,0,1464,600_PT0_SX1464_V1___.jpg",
  },
  // {
  //   id: 4,
  //   content: <SkeletonFour />,
  //   className: "md:col-span-1",
  //   thumbnail:
  //     "https://images.unsplash.com/photo-1475070929565-c985b496cb9f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  // },
  // {
  //   id: 4,
  //   content: <SkeletonFour />,
  //   className: "md:col-span-2",
  //   thumbnail:
  //     "https://images.unsplash.com/photo-1475070929565-c985b496cb9f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  // },
  // {
  //   id: 4,
  //   content: <SkeletonFour />,
  //   className: "md:col-span-2",
  //   thumbnail:
  //     "https://images.unsplash.com/photo-1475070929565-c985b496cb9f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  // },
  // {
  //   id: 4,
  //   content: <SkeletonFour />,
  //   className: "md:col-span-1",
  //   thumbnail:
  //     "https://images.unsplash.com/photo-1475070929565-c985b496cb9f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  // },
];