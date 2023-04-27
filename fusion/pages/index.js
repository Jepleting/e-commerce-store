import { Inter } from 'next/font/google'
import { useState,useEffect } from 'react'

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
    <div className='py-4'>
        <div className='w-64'>
          <img src="/products/design-damask.jpg" alt="" />
        </div>
        <div className='mt-2 shadow-xl h-40 w-64 text-center' >
          <h3 className='font-bold text-lg'>Damask design</h3>
          <p>Ksh 5000</p>
          <button className='bg-[#C89FA3] hover:bg-[#6C534E] text-white font-bold py-2 px-4 rounded-full'>Add to cart</button>
        </div>
    </div>
  </div>
  )
}
