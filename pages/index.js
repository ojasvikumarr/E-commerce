import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
  <>
   <head>
      <title>CodesWear.com - Wear the code</title>
      <meta name="description" content="CodesWear.com - Wear the code"/>
      <link rel="icon" href="/codeswear2/public/favicon.ico" />
    </head>
    <Navbar/>

    <Footer/>
  </>
   
  );
}
