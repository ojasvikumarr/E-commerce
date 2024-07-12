import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Product from '@/models/products';
import mongoose from 'mongoose';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

const stickers = ({products}) => {
  console.log(products);

  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container w-[400vh] py-14 mx-auto ">
        <Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/">Home Page</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbPage>Mugs</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>
          <div className="flex flex-wrap justify-center ">
          {Object.keys(products).length === 0 && <p className=' text-3xl text-center my-8 font-bold'>"Sorry We're out of stock, we'll be back soon , Stay tuned!</p>}
            {Object.keys(products).map((product) => (
              <div key={products[product]._id} className="lg:w-1/4 md:w-1/2 p-4 cursor-pointer shadow-md ">
                <Link passHref={true} href={`/product/${products[product].slug}`} className='shadow-lg' >
                  {/* <a className="block relative h-48 rounded overflow-hidden"> */}
                    <Image
                      alt="ecommerce"
                      className="m-auto block w-full border-opacity-45"
                      src={products[product].img}
                      width={150}
                      height={300}
                    />
                  {/* </a> */}
                
                <div className="mt-auto text-left align-bottom m-auto">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{products[product].category}</h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">{products[product].item}</h2>
                  <p className="mt-1 font-bold ">&#x20B9;{products[product].price}</p>
                  {/* <h2 className="text-gray-900 title-font text-lg font-medium">
                    {products[product].color+" "}
                  </h2> */}
                  <div>
{/*                     
                    {
                      products[product].color.map((color) => {
                        return(
                          <button key={color} className={`border-2 border-gray-900  bg-${color.toLowerCase()}-300 rounded-full w-6 h-6 `}></button>
                        )
                      })  
                    } */}
                    
                  </div>
                  {/* <div>
                    {products[product].size.includes('S') && <span className='border-violet-900 border-2 rounded p-1 m-1 mt-2 '>S</span>}
                    {products[product].size.includes('M') && <span className='border-violet-900 border-2 rounded p-1 m-1'>M</span>}
                    {products[product].size.includes('L') && <span className='border-violet-900 border-2 rounded p-1 m-1'>L</span>}
                    {products[product].size.includes('XL') && <span className='border-violet-900 border-2 rounded p-1 m-1'>XL</span>}
                    {products[product].size.includes('XXL') && <span className='border-violet-900 border-2 rounded p-1 m-1'>XXL</span>}
                  </div>
                  <div>
                    {products[product].color.includes('Blue') &&  <button className={`border-2 m-1 border-gray-900  bg-blue-600 rounded-full w-6 h-6 `}></button>}
                    {products[product].color.includes('Red') &&  <button className={`border-2 m-1 border-gray-900  bg-red-600 rounded-full w-6 h-6 `}></button>}
                    {products[product].color.includes('Green') &&  <button className={`border-2 m-1 border-gray-900  bg-green-600 rounded-full w-6 h-6 `}></button>}
                    {products[product].color.includes('Black') &&  <button className={`border-2 m-1 border-gray-900  bg-black rounded-full w-6 h-6 `}></button>}
                    {products[product].color.includes('Purple') &&  <button className={`border-2 m-1 border-gray-900  bg-purple-600 rounded-full w-6 h-6 `}></button>}
                    {products[product].color.includes('Violet') &&  <button className={`border-2 m-1 border-gray-900  bg-violet-600 rounded-full w-6 h-6 `}></button>}
                    {products[product].color.includes('Yellow') &&  <button className={`border-2 m-1 border-gray-900  bg-yellow-600 rounded-full w-6 h-6 `}></button>}
                    {products[product].color.includes('Gray') &&  <button className={`border-2 m-1 border-gray-900  bg-gray-600 rounded-full w-6 h-6 `}></button>}
                  </div> */}
                </div>
              </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default stickers;


export async function getServerSideProps(context) {
  if(!mongoose.connections[0].readyState){
    await mongoose.connect(process.env.MONGO_URI)
  }
  let products = await Product.find({category:'sticker'});
  let stickers = {};
        for(let item of products){
            if(item.item in stickers){
                if(!stickers[item.item].color.includes(item.color) && item.availableQty>0){
                    stickers[item.item].color.push(item.color)
                }
                if(!stickers[item.item].size.includes(item.size) && item.availableQty>0){
                    stickers[item.item].size.push(item.size)
                }
            }else{
                stickers[item.item] = JSON.parse(JSON.stringify(item))
                if(item.availableQty > 0 ){
                    stickers[item.item].color = [item.color]
                    stickers[item.item].size = [item.size]
                }
            }
        }
  return {

    props: {products : JSON.parse(JSON.stringify(stickers))},
  }
}