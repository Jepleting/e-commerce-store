import { Inter } from 'next/font/google'
import { useState,useEffect } from 'react'
import Product from '../components/Product'
import product from '@/models/product';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [productsInfo, setProductsInfo] = useState([]);
  useEffect(() => {
    fetch('/api/products')
    .then(response => response.json())
    .then(json => setProductsInfo(json));
  }, []);

  
  return (
  <div className='p-5'>
    <h2 className='text-3xl text-center text-[#6C534E]'>In-store products</h2>
    <div className ='flex flex-wrap'>
    {productsInfo.map(productInfo =>(
      <div key={productInfo._id} className='px-5'> 
        <Product{...productInfo}/>
      </div>
      
      
    ))}
    </div>



   
  </div>
  )
}
