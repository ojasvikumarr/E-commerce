import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const tshirts = () => {
  const products = [
    { id: 1, category: 'CATEGORY', src: '/photo-1618677603544-51162346e165.webp', title: 'The Catalyzer', price: 16.00 },
    { id: 2, category: 'CATEGORY', src: '/photo-1618677603544-51162346e165.webp', title: 'Shooting Stars', price: 21.15 },
    { id: 3, category: 'CATEGORY', src: '/photo-1618677603544-51162346e165.webp', title: 'Neptune', price: 12.00 },
    { id: 4, category: 'CATEGORY', src: '/photo-1618677603544-51162346e165.webp', title: 'The 400 Blows', price: 18.40 },
    { id: 5, category: 'CATEGORY', src: '/photo-1618677603544-51162346e165.webp', title: 'The Catalyzer', price: 16.00 },
    { id: 6, category: 'CATEGORY', src: '/photo-1618677603544-51162346e165.webp', title: 'Shooting Stars', price: 21.15 },
    { id: 7, category: 'CATEGORY', src: '/photo-1618677603544-51162346e165.webp', title: 'Neptune', price: 12.00 },
    { id: 8, category: 'CATEGORY', src: '/photo-1618677603544-51162346e165.webp', title: 'The 400 Blows', price: 18.40 },
  ];

  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container w-[400vh] py-24 mx-auto ">
          <div className="flex flex-wrap ">
            {products.map((product) => (
              <div key={product.id} className="lg:w-1/4 md:w-1/2 p-4 cursor-pointer shadow-md ">
                <Link href={`/product/tshirt`} className='shadow-lg' passHref>
                  {/* <a className="block relative h-48 rounded overflow-hidden"> */}
                    <Image
                      alt="ecommerce"
                      className="m-auto block h-[20vh] border-opacity-45"
                      src={product.src}
                      width={150}
                      height={500}
                    />
                  {/* </a> */}
                </Link>
                <div className="mt-4 text-center">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{product.category}</h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">{product.title}</h2>
                  <p className="mt-1 text-center">${product.price.toFixed(2)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default tshirts;
