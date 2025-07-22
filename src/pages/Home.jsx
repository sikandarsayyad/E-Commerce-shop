import React from 'react';
import { useContext } from 'react';
import { ProductContext } from '../context/ProductContext';
import Product from '../components/Product';
import Hero from '../components/Hero';

function Home() {

     const {products} = useContext(ProductContext);

     const filteredProducts = products.filter((item)=>{
          return (
               item.category === "men's clothing" || item.category === "women's clothing" 
          )
     });

  return (
    <div>
     <Hero/>
     <section className='py-16'>
          <div className="container mx-auto">
               <div className='grid gap-[30px] grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 max-w-sm mx-auto md:max-w-none md:mx-0'>
                    {
                         filteredProducts.map((product)=>{
                              return <Product key={product.id} product={product}/>
                         })
                    }
               </div>
          </div>
     </section>
    </div>
  )
}

export default Home