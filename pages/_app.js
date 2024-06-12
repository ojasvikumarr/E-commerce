import "@/styles/globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useState , useEffect } from "react";
export default function App({ Component, pageProps }) {
  const [cart, setcart] = useState({})
  const [subtotal , setsubtotal] = useState(0);

  useEffect(() => {
    console.log("Hi useEffect here!!") ;

    try {
      if(localStorage.getItem("cart")){
        setcart(JSON.parse(localStorage.getItem("cart")));
        saveCart(JSON.parse(localStorage.getItem("cart")))
      }
    } catch (error) {
      console.error(error);
      localStorage.clear();
    }
  }, [])
  
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
    let newCart = cart ;
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

  
  return(
    <>
      <Navbar addToCart={addToCart} removeFromCart={removeFromCart} clearCart={clearCart} cart={cart} subtotal={subtotal}/>
      <Component {...pageProps} addToCart={addToCart} removeFromCart={removeFromCart} clearCart={clearCart} cart={cart} subtotal={subtotal}/>;
      <Footer/>
    </>
  )
}
