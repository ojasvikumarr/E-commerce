import "@/styles/globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useState , useEffect } from "react";
import { useRouter } from "next/router";
import LoadingBar from 'react-top-loading-bar'

export default function App({ Component, pageProps }) {
  const router = useRouter()
  const [cart, setcart] = useState({})
  const [subtotal , setsubtotal] = useState(0);
  const [user , setUser] = useState({value:null})
  const [key, setkey] = useState('')
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // console.log("Hi useEffect here!!") ;

    router.events.on('routeChangeStart', () => {
      setProgress(40)
    })
    router.events.on('routeChangeComplete', () => {
      setProgress(100)
    })
    try {
      if(localStorage.getItem("cart")){
        setcart(JSON.parse(localStorage.getItem("cart")));
        saveCart(JSON.parse(localStorage.getItem("cart")))
      }
    } catch (error) {
      console.error(error);
      localStorage.clear();
    }
    const token = localStorage.getItem('token')
    if(token){
      setUser({value:token})
    }
    setkey(Math.random())
  }, [router.query])
  
  const saveCart = (myCart) => {
    localStorage.setItem("cart", JSON.stringify(myCart));
    let subt = 0;
    let keys = Object.keys(myCart); // Use myCart instead of cart
    for (let i = 0; i < keys.length; i++) {
      subt += myCart[keys[i]].price * myCart[keys[i]].qty; // Access properties correctly
    }
    setsubtotal(subt); // Ensure this function is defined
  };
  
  const addToCart = (itemCode , qty , price , name , size , variant) => {
    let newCart = JSON.parse(JSON.stringify(cart)) ;
    if(itemCode in cart){
      newCart[itemCode].qty = cart[itemCode].qty + qty ;
    }else{
      newCart[itemCode] = {qty: 1 , price , name , size , variant};
    }
    setcart(newCart);
    saveCart(newCart);
  }

  const clearCart = () => {
    console.log("Cart has been cleared")
    setcart ({});
    saveCart({});
  }

  const removeFromCart = (itemCode , qty , price , name , size , variant) => {
    let newCart = cart ;
    if(itemCode in cart){
      newCart[itemCode].qty = cart[itemCode].qty - qty ;
    }if(newCart[itemCode]["qty"] <= 0){
      delete newCart[itemCode];
    }
    setcart(newCart);
    saveCart(newCart);
    }

  const buyNow = (itemCode , qty , price , name , size , variant) => {
    let newCart = {};
    newCart= {itemCode : {qty: 1 , price , name , size , variant}};
    setcart(newCart);
    saveCart(newCart);
    router.push('/checkout')
  }

  const logout = () => {
    localStorage.removeItem('token')
    setkey(Math.random())
    setUser({value:null})
    router.push('/')
  }
  
  return(
    <>
      <LoadingBar
        color='#7F00FF'
        progress={progress}
        shadow={true}
        waitingTime={400}
        loaderSpeed={500}
        onLoaderFinished={() => setProgress(0)}
      />
      {key && <Navbar logout={logout} user={user} key={key} addToCart={addToCart} removeFromCart={removeFromCart} clearCart={clearCart} cart={cart} subtotal={subtotal}/>}
      <Component {...pageProps} buyNow={buyNow} addToCart={addToCart} removeFromCart={removeFromCart} clearCart={clearCart} cart={cart} subtotal={subtotal}/>;
      < main className="main-container"/>
      <Footer/>
    </>
  )
}
