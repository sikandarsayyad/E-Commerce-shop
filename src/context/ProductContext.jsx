import React, {createContext, useEffect, useState} from 'react'

//create context
export const ProductContext = createContext();

const ProductProvider = ({children})=> {

     const [products, setProducts] = useState([]);

     useEffect(()=>{
          const fetchProducts = async ()=> {
               const response = await fetch('https://fakestoreapi.com/products')
               const data = await response.json()
               // console.log(data);
               setProducts(data);
          }
          fetchProducts();
     }, [])

     return <ProductContext.Provider value={{products}}>{children}</ProductContext.Provider>
}

export default ProductProvider;