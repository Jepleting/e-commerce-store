import { Inter } from 'next/font/google'
import { useState,useEffect } from 'react'
import Product from '../components/Product'
import product from '@/models/product';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [productsInfo, setProductsInfo] = useState([]);
  const [phrase, setPhrase]= useState([]);
  useEffect(() => {
    fetch('/api/products')
    .then(response => response.json())
    .then(json => setProductsInfo(json));
  }, []);

  let products;
  if (phrase){
    products = productsInfo.filter(productInfo => productInfo.name.toLowerCase().includes(phrase));
  }else{
    products = productsInfo;
  }


  return (
  <div className='p-5'>
    <h2 className='text-3xl text-center text-[#6C534E]'>In-store products</h2>
    <input value={phrase} onChange={e => setPhrase(e.target.value)} type="text" placeholder='Search for wallpaper...' className='bg-gray-200 w-45 py-2 px-4 rounded-xl'></input>
    <div className ='flex flex-wrap'>
    {products.map(productInfo =>(
      <div key={productInfo._id} className='px-5'> 
        <Product{...productInfo}/>
      </div>
      
      
    ))}
    </div>



   
  </div>
  )
}
